import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function field(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = field(body.name);
  const email = field(body.email);
  const phone = field(body.phone);
  const service = field(body.service);
  const message = field(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    "",
    "Message:",
    message,
  ].filter((line): line is string => line !== null);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "HHHWorks Site <noreply@stonebrooknyc.com>",
      to: EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Contact form: Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: unexpected error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
