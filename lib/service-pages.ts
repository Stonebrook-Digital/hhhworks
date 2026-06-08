export type ServicePageSection = {
  title: string;
  body: string;
};

export type ServicePageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerSrc?: string;
  bannerAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  introTitle?: string;
  intro: string;
  sections: ServicePageSection[];
  closing?: string;
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  "hvac-repairs": {
    slug: "hvac-repairs",
    metaTitle: "HVAC Repairs",
    metaDescription:
      "Expert HVAC repairs by Triple H Air Conditioning Inc. Fast diagnostics and dependable fixes for Tampa Bay homes and businesses.",
    heroTitle: "Expert HVAC repairs",
    heroSubtitle: "Your solution for reliable HVAC repairs",
    bannerSrc: "/hvac-repairs-banner.jpg",
    bannerAlt: "Outdoor HVAC condenser unit against a brick wall",
    imageSrc: "/hvac-repair-services.jpg",
    imageAlt: "HVAC technician tools and outdoor AC units ready for repair service",
    introTitle: "Expert HVAC repairs by Triple H Air Conditioning Inc.",
    intro:
      "Your HVAC system keeps your home or business comfortable. When something breaks down, you need answers fast. Our trained technicians diagnose the issue and restore your system efficiently.",
    sections: [
      {
        title: "Comprehensive diagnostics and repair",
        body: "Every visit starts with a thorough check—from simple filter issues to complex compressor problems. We find the root cause and use modern tools to deliver repairs built to last.",
      },
      {
        title: "Quality service that stands out",
        body: "Prompt, efficient work with a smooth experience from the first call. Our team handles repairs professionally and aims to exceed your expectations on every job.",
      },
      {
        title: "The best parts for every repair",
        body: "We use quality, manufacturer-recommended parts so your system stays efficient long after we leave. Our approach is simple: do it right the first time.",
      },
      {
        title: "Preventative advice and ongoing support",
        body: "After the repair, we share practical maintenance tips to help prevent future breakdowns. We're invested in the long-term health of your system—not just the quick fix.",
      },
    ],
    closing:
      "Choose Triple H Air Conditioning Inc. for repairs that restore comfort and protect your investment. Contact us today for professional, reliable service.",
  },
  "hvac-replacement": {
    slug: "hvac-replacement",
    metaTitle: "HVAC Replacement",
    metaDescription:
      "Professional HVAC replacement in Tampa Bay. Personalized system recommendations, expert installation, and lasting comfort.",
    heroTitle: "Expert HVAC replacement",
    heroSubtitle: "Ensuring efficient and reliable HVAC systems",
    bannerSrc: "/hvac-replacement-banner.jpg",
    bannerAlt: "Professional HVAC tools and equipment ready for replacement service",
    imageSrc: "/hvac-replacement-services.jpg",
    imageAlt: "Outdoor air conditioning condenser unit installed at a residential property",
    introTitle: "Professional HVAC replacement services",
    intro:
      "When it's time for an HVAC replacement, choosing the right provider is crucial. At Triple H Air Conditioning Inc., we upgrade homes and businesses with the latest heating and cooling technology—guided by certified technicians through a smooth transition to a more efficient system.",
    sections: [
      {
        title: "Personalized solutions for your needs",
        body: "Every property is different. We assess your current system, understand your requirements, and recommend the best options—whether you need better efficiency, improved air quality, or a replacement for a failing unit.",
      },
      {
        title: "Professional installation matters",
        body: "Replacement is more than swapping equipment. Our technicians follow the latest installation standards—proper sizing, ductwork inspection, and careful adjustments—so your new system performs reliably from day one.",
      },
      {
        title: "High-quality systems for lasting comfort",
        body: "We partner with leading manufacturers for energy-efficient, durable equipment backed by strong warranties. That commitment helps your investment deliver lasting comfort and lower utility costs.",
      },
      {
        title: "Support beyond installation",
        body: "Our relationship doesn't end at install. We share maintenance best practices and remain available for routine service and repairs so your system keeps meeting your expectations.",
      },
    ],
    closing:
      "Choose Triple H Air Conditioning Inc. for personalized recommendations, professional installation, and ongoing support. Contact us today to start toward a better heating and cooling solution.",
  },
  "hvac-maintenance": {
    slug: "hvac-maintenance",
    metaTitle: "HVAC Maintenance",
    metaDescription:
      "Comprehensive HVAC maintenance in Tampa Bay. Prolong system life, improve performance, and reduce energy costs.",
    heroTitle: "Expert HVAC maintenance",
    heroSubtitle: "Maximize the efficiency and longevity of your system",
    bannerSrc: "/hvac-maintenance-banner.jpg",
    bannerAlt: "Two outdoor HVAC condenser units on a patio beside a home",
    imageSrc: "/hvac-maintenance-services.jpg",
    imageAlt: "HVAC technician checking refrigerant levels on an outdoor condenser unit",
    introTitle: "Comprehensive HVAC maintenance services",
    intro:
      "Regular maintenance keeps your heating, ventilation, and air conditioning running at peak efficiency. At Triple H Air Conditioning Inc., our maintenance services prolong system life, improve performance, and reduce the risk of unexpected breakdowns—while helping lower energy costs.",
    sections: [
      {
        title: "Tailored maintenance plans",
        body: "Every system has different needs. We work with you to build a plan for your home or commercial facility—proactive care that extends equipment life and helps avoid costly repairs down the line.",
      },
      {
        title: "Expert technicians and thorough checks",
        body: "Our certified technicians inspect filters, refrigerant levels, electrical connections, thermostats, and more. We catch small issues early—before they become major problems.",
      },
      {
        title: "Benefits of routine maintenance",
        body: "Beyond preventing failures, regular service improves indoor air quality, keeps your system running efficiently, and can lower utility bills while reducing your environmental footprint.",
      },
      {
        title: "Reliable support and guidance",
        body: "We're here with answers, performance advice, and honest recommendations on upgrades that can improve comfort and efficiency. Your system should be a dependable source of comfort year-round.",
      },
    ],
    closing:
      "Partner with Triple H Air Conditioning Inc. for maintenance that keeps your HVAC system in top condition. Contact us today to learn more about our plans and how we can help you maintain a comfortable, efficient space.",
  },
  "hvac-tune-ups": {
    slug: "hvac-tune-ups",
    metaTitle: "HVAC Tune Ups",
    metaDescription:
      "Professional HVAC tune-ups in Tampa Bay. Optimize performance, extend system life, and reduce breakdowns.",
    heroTitle: "Expert HVAC tune ups",
    heroSubtitle: "Keeping your system running at its best",
    bannerSrc: "/hvac-tune-ups-banner.jpg",
    bannerAlt: "HVAC manifold gauges connected to an outdoor condenser unit",
    imageSrc: "/hvac-tune-up-services.jpg",
    imageAlt: "Technician holding manifold gauges during an HVAC tune-up",
    introTitle: "Optimize your HVAC system with professional tune-ups",
    intro:
      "Regular tune-ups keep your heating, ventilation, and air conditioning healthy and efficient. At Triple H Air Conditioning Inc., our comprehensive tune-ups optimize performance, extend system life, and reduce costly breakdowns—so you stay comfortable year-round while keeping energy costs in check.",
    sections: [
      {
        title: "Detailed inspection and performance enhancements",
        body: "We inspect critical components—compressor, blower motor, condenser, thermostat, and more—then calibrate, tighten connections, lubricate moving parts, and clean or replace filters to catch issues before they escalate.",
      },
      {
        title: "Customized tune-ups for your system",
        body: "Every system is different. Our technicians tailor each tune-up to your equipment's model, age, and usage so every step addresses what your system actually needs for peak efficiency.",
      },
      {
        title: "Proactive recommendations",
        body: "A tune-up with us goes beyond adjustments and cleaning. We share energy-saving tips, upgrade suggestions, and maintenance best practices to help you get more from your system long after we leave.",
      },
      {
        title: "Service you can trust",
        body: "Our certified technicians take pride in meticulous, high-quality work and outstanding customer service. Every tune-up is built around efficiency, reliability, and the longevity of your system.",
      },
    ],
    closing:
      "Don't let an underperforming system compromise your comfort or your wallet. Schedule an HVAC tune-up with Triple H Air Conditioning Inc. today and experience the benefits of a well-maintained system.",
  },
  "duct-cleaning": {
    slug: "duct-cleaning",
    metaTitle: "Duct Cleaning",
    metaDescription:
      "Professional duct cleaning in Tampa Bay. Improve indoor air quality, airflow, and HVAC efficiency.",
    heroTitle: "Expert duct cleaning",
    heroSubtitle: "Enhance your indoor air quality with expert duct cleaning",
    bannerSrc: "/duct-cleaning-banner.jpg",
    bannerAlt: "Duct cleaning brush inside a metal ventilation duct",
    imageSrc: "/duct-cleaning-services.jpg",
    imageAlt: "Duct cleaning brush removing dust and debris from a vent",
    introTitle: "Professional duct cleaning services",
    intro:
      "Clean ductwork is essential for good indoor air quality and efficient HVAC operation. Over time, ducts collect dust, allergens, and debris that affect air quality and system performance. Triple H Air Conditioning Inc. uses advanced techniques and equipment to thoroughly clean your ductwork for a healthier, more comfortable space.",
    sections: [
      {
        title: "Comprehensive inspection and cleaning",
        body: "We start with a detailed ductwork inspection to identify problem areas, then use specialized vacuums and brushes to reach every corner and remove contaminants throughout your system.",
      },
      {
        title: "The importance of regular duct cleaning",
        body: "Built-up debris restricts airflow, forces your system to work harder, and can worsen allergies and respiratory issues. Professional cleaning helps extend equipment life and keeps your indoor environment healthier.",
      },
      {
        title: "Advanced techniques for superior results",
        body: "Our trained technicians use the latest duct cleaning methods to remove dirt, dust, and buildup efficiently—improving air quality, comfort, and system performance while helping lower utility costs.",
      },
      {
        title: "Why choose Triple H Air Conditioning Inc.",
        body: "We focus on lasting results, not quick fixes. With a commitment to quality, efficiency, and customer satisfaction, our team delivers thorough duct cleaning that improves the health of your indoor space.",
      },
    ],
    closing:
      "Don't compromise on the health of your HVAC system or your indoor air. Contact Triple H Air Conditioning Inc. today to schedule professional duct cleaning and breathe easier knowing your ductwork is in expert hands.",
  },
  "construction-installations": {
    slug: "construction-installations",
    metaTitle: "Construction Installations",
    metaDescription:
      "New construction HVAC installation in Tampa Bay. Planned systems, modern equipment, and builder collaboration.",
    heroTitle: "Expert construction installations",
    heroSubtitle: "Seamless HVAC solutions for new construction projects",
    bannerSrc: "/construction-installations-banner.jpg",
    bannerAlt: "Close-up of outdoor HVAC condenser units installed along a stone wall",
    imageSrc: "/new-construction-hvac-installations.jpg",
    imageAlt: "Row of outdoor HVAC condenser units installed at a new construction site",
    introTitle: "Expert new construction HVAC installation services",
    intro:
      "New builds need HVAC planned from the ground up. At Triple H Air Conditioning Inc., we deliver tailored installation solutions for residential and commercial construction—working closely with builders and architects to integrate efficient, reliable systems into every project.",
    sections: [
      {
        title: "Proper planning and installation",
        body: "Careful planning prevents costly issues down the road. We size systems to your property's specifications so you get even heating and cooling, efficient operation, and dependable performance from day one.",
      },
      {
        title: "Advanced systems for modern construction",
        body: "We install the latest HVAC technologies—energy-efficient equipment, smart controls, and solutions that support indoor air quality—so your new build meets today's comfort and efficiency standards.",
      },
      {
        title: "Collaboration with your construction team",
        body: "We coordinate with builders and contractors at every stage, ensuring ductwork, equipment, and connections are installed at the right point in the build for optimal results and a smooth timeline.",
      },
      {
        title: "Post-installation support and services",
        body: "Our work doesn't end at install. We handle system testing, initial startup, and ongoing maintenance so your new HVAC system performs reliably long after the project is complete.",
      },
    ],
    closing:
      "Building something new? Partner with Triple H Air Conditioning Inc. for HVAC installation that fits your project from planning through completion. Contact us today to discuss your new construction needs.",
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);

export function getServicePage(slug: string) {
  return SERVICE_PAGES[slug] ?? null;
}
