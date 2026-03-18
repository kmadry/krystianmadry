const baseUrl = "https://krystianmadry.pl";

interface JsonLdProps {
  locale?: string;
}

export default function JsonLd({ locale = "pl" }: JsonLdProps) {
  const siteUrl = locale === "pl" ? baseUrl : `${baseUrl}/${locale}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krystian M\u0105dry",
    url: baseUrl,
    image: `${baseUrl}/KM.png`,
    email: "kryst.madry@gmail.com",
    jobTitle: "Senior Frontend Engineer & CTO",
    sameAs: [
      "https://www.linkedin.com/in/krystian-m%C4%85dry-60bb07105/",
      "https://inkubacja.dev",
    ],
    knowsAbout: [
      "Frontend Engineering",
      "React",
      "TypeScript",
      "Software Architecture",
      "Product Development",
      "Mentoring",
    ],
  };

  // WebSite schema helps Google understand the site structure
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Krystian M\u0105dry",
    url: siteUrl,
    description:
      locale === "pl"
        ? "Senior Frontend Engineer, CTO i builder — software, produkty, fizyczne formy."
        : "Senior Frontend Engineer, CTO and builder — software, products, physical forms.",
    author: { "@type": "Person", name: "Krystian M\u0105dry" },
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
