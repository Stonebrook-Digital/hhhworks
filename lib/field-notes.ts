export type FieldNote = {
  id: string;
  author: string;
  role: string;
  date: string;
  body: string;
  tags: string[];
};

export const FIELD_NOTES_AUTHOR = {
  name: "Abraham Harvey",
  role: "Co-owner",
} as const;

export const FIELD_NOTES: FieldNote[] = [
  {
    id: "property-inspection",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "We were contacted by the client for a thorough inspection of their property. Leveraging our advanced diagnostic tools, we diligently assessed the situation, looking for any potential issues that may cause discomfort down the line. By using our reliable inspection tools, we provided them with comprehensive insights regarding their property's condition. Ensuring the highest service standard, we have demonstrated our commitment to serving with quality and integrity. We believe everyone deserves a safe and secure environment to live and work.",
    tags: ["#inspectionServices", "#PropertyInspection", "#QualityService"],
  },
  {
    id: "hvac-efficiency-inspection",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "Today, we visited a client who expressed concerns about the efficiency of their heating system. They contacted us to conduct a comprehensive HVAC inspection, ensuring their indoor environment is safe and comfortable. We utilized modern diagnostic tools and techniques to identify potential issues, and our well-trained team conducted the task effectively without causing any inconvenience to the customer. Thanks to the detailed HVAC inspection, we assured our client that their system is in excellent shape and working at optimum efficiency. If necessary, we assured them that we can provide top-quality parts to address any need that might arise in future. No surprises, just expert care and peace of mind!",
    tags: ["#HVACinspection", "#ExpertService"],
  },
  {
    id: "routine-maintenance-check-in",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "Checking in with you all from a recent job we completed. The customer reached out to us for routine maintenance on their system. They wanted to ensure optimal function and prevent any future issues. We used our trusted toolkit and industry-approved testing tools to perform a thorough check and maintenance service. Happy to report that we ensured a smoother system operation. Thanks to our team's dedication to quality and detailed work, we had another satisfied customer.",
    tags: ["#RoutineMaintenance", "#QualityService"],
  },
  {
    id: "changeout-1-5-ton",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "We were contacted by the client to help with their need for a new heating and cooling system. We facilitated a 1.5 ton changeout service for their outdated cooling system - perfectly installing a top-quality replacement to cater for their climate needs. With our in-depth experience and industry-standard products, we managed to ensure that their indoor comfort is effectively cared for. Ready to face the changing temperatures, our clients now have a fully functional, and optimized cooling system in place.",
    tags: ["#ClimateCare", "#CoolingSolutions", "#TopTierService"],
  },
  {
    id: "air-handler-service",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "Our team was contacted to troubleshoot an issue with a malfunctioning air handler. We used our expertise and top-of-the-line products to rectify this problem to ensure efficient airflow and optimum indoor air quality. With precision and attention to detail, we fine-tuned the air handler, bringing it back to optimal performance. Today, our team not only provided a solution, but also educated the client on how to maintain their air handler for ultimate comfort and durability. Always at your service for a fresher and healthier indoor environment.",
    tags: ["#AirHandler", "#ServicingExcellence", "#CustomerSatisfaction"],
  },
  {
    id: "washer-condenser-repair",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "We quickly responded when a valued customer reported issues with their washer and condenser. Utilizing our comprehensive whole platform approach, we ensured a thorough diagnostic process and efficient repair service. We believe that our breadth and quality of service are unparalleled. Your washer and condenser are now performing at their peak. Always at your service to provide effective solutions and keep your appliances operating optimally.",
    tags: ["#WasherMaintenance", "#CondenserRepair"],
  },
  {
    id: "routine-maintenance-longevity",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "Our customers reached out to us for a routine maintenance service. We were happy to provide our expertise and top-quality products to ensure their system stays at its optimal performance. Our professional team, armed with the right tools and experience, performed comprehensive maintenance procedures to prevent any future issues. We believe that by offering our customers regular maintenance services, we can help them maintain the longevity of their system. This was a great opportunity to lend our expertise, and we look forward to supporting them in the future.",
    tags: ["#RoutineMaintenance", "#CustomerService"],
  },
  {
    id: "duct-cleaning-inspection",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "We are currently performing a duct cleaning inspection for our valued customer who got in touch due to concerns about their indoor air quality. We thoroughly examined and cleaned all the ducts using high-quality products and professional techniques. Ensuring homes are healthy and comfortable is our top priority. We are glad to help and assist whenever clean air needs are a concern.",
    tags: ["#AirQuality", "#DuctCleaningInspection", "#HealthyHome"],
  },
  {
    id: "changeout-2-5-ton",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "Our valued customer reached out needing assistance with their outdated and inefficient HVAC system. After a thorough assessment, it was clear that the best solution was a 2.5 ton changeout. This ensures increased energy efficiency and reliable performance for years to come. As always, we used top-of-the-line products, adhering to the best practices that we uphold in our services. Our client can now enjoy a cozy and comfortable home, thanks to the new system we have set up.",
    tags: ["#HVACChangeout", "#CustomerSatisfaction"],
  },
  {
    id: "condenser-motor-replacement",
    author: FIELD_NOTES_AUTHOR.name,
    role: FIELD_NOTES_AUTHOR.role,
    date: "July 7th, 2025",
    body: "We were contacted by our valued customer needing assistance with their cooling system. The issue was promptly identified as a malfunctioning condenser motor. After our thorough assessment, we provided a suitable replacement and ensured their cooling system was back running efficiently. We ensured the comfort of our client's home was restored with our reliable, high-quality products. Known for swift and efficient service, we respond proactively and ensure our customers' satisfaction. Proud to have resolved the issue in a professional and timely manner.",
    tags: ["#CondenserMotorReplacement", "#CoolingSystem", "#CustomerSatisfaction"],
  },
];

export const FIELD_NOTES_INITIAL_COUNT = 5;
