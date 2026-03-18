export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krystian M\u0105dry",
    url: "https://krystianmadry.pl",
    image: "https://krystianmadry.pl/KM.jpg",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
