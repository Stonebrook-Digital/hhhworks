import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/app/components/ServiceDetailLayout";
import { getServicePage, SERVICE_SLUGS } from "@/lib/service-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return { title: "Service" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();
  return <ServiceDetailLayout page={page} />;
}
