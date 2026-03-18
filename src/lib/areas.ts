export interface Area {
  id: string;
  title: string;
  description: string;
  status: string;
}

export const areas: Area[] = [
  {
    id: "engineering",
    title: "Engineering / Praca projektowa",
    description:
      "Buduję i dowożę złożone produkty cyfrowe — od implementacji po architekturę.",
    status: "aktywnie",
  },
  {
    id: "produkty",
    title: "Produkty własne",
    description:
      "Tworzę własne aplikacje i produkty — od pomysłu do pierwszej działającej wersji.",
    status: "w budowie",
  },
  {
    id: "mentoring",
    title: "Mentoring / Inkubacja.dev",
    description:
      "Pomagam developerom wejść poziom wyżej — przez sposób myślenia i dowożenie, nie kolejne technologie.",
    status: "startuje",
  },
  {
    id: "events",
    title: "Eventy / Integracja",
    description:
      "Tworzę doświadczenia oparte na rywalizacji i zabawie — pierwszy event RC już w drodze.",
    status: "pierwszy event",
  },
  {
    id: "design",
    title: "Forma / Inspiracja",
    description:
      "Przekładam idee na fizyczne formy — minimalistyczne obiekty i odlewy.",
    status: "pierwsi klienci",
  },
  {
    id: "tools",
    title: "Narzędzia / Produkcja",
    description:
      "Druk 3D, CNC i grawer — zaplecze do tworzenia i testowania rzeczy.",
    status: "rozwój",
  },
  {
    id: "ops",
    title: "Operacje / Wypożyczalnia",
    description:
      "Buduję prosty biznes oparty na sprzęcie i dostępności.",
    status: "start",
  },
];

export function getArea(id: string): Area | undefined {
  return areas.find((a) => a.id === id);
}
