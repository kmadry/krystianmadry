import type { AreaContent } from "../content";

const design: AreaContent = {
  tagline: `Wszystko zaczyna si\u0119 od my\u015bli.\nForma jest jej konsekwencj\u0105.`,
  sections: [
    {
      title: "O co tu chodzi",
      blocks: [
        {
          type: "text",
          content: `Tworz\u0119 fizyczne obiekty \u2014 odlewy, kt\u00f3re powstaj\u0105 z idei.\n\nNie chodzi o dekoracj\u0119.\nChodzi o form\u0119, kt\u00f3ra ma sens i swoj\u0105 obecno\u015b\u0107.`,
        },
        {
          type: "list",
          prefix: `Ka\u017cdy obiekt jest wynikiem procesu:`,
          items: [
            `decyzji`,
            `uproszczeń`,
            `pracy z materia\u0142em`,
          ],
        },
      ],
    },
    {
      title: "Jak to powstaje",
      blocks: [
        {
          type: "text",
          content: `Zaczyna si\u0119 od my\u015bli.\nPotem przychodzi proces.`,
        },
        {
          type: "list",
          items: [`projekt`, `forma`, `odlew`, `wyko\u0144czenie`],
        },
        {
          type: "note",
          content: `Bez po\u015bpiechu.\nBez przypadkowych decyzji.`,
        },
      ],
    },
    {
      title: "Co powstaje",
      blocks: [
        {
          type: "list",
          items: [
            `obiekty u\u017cytkowe`,
            `formy dekoracyjne`,
            `rzeczy na zam\u00f3wienie`,
          ],
        },
        {
          type: "note",
          content: `Minimalistyczne.\nSpokonje.\nIndywidualne.`,
        },
      ],
    },
    {
      title: "Podej\u015bcie",
      blocks: [
        {
          type: "text",
          content: `Nie robi\u0119 serii \u201epod sprzeda\u017c\u201d.\n\nKa\u017cda rzecz ma sw\u00f3j kontekst i pow\u00f3d powstania.\nDlatego wi\u0119kszo\u015b\u0107 prac powstaje na zam\u00f3wienie.`,
        },
      ],
    },
    {
      title: "Dla kogo",
      blocks: [
        {
          type: "list",
          prefix: `Dla os\u00f3b, kt\u00f3re:`,
          items: [
            `szukaj\u0105 rzeczy innych ni\u017c wszystkie`,
            `ceni\u0105 prostot\u0119 i materia\u0142`,
            `chc\u0105 czego\u015b bardziej osobistego ni\u017c gotowy produkt`,
          ],
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `Pierwsi klienci.`,
        },
      ],
    },
  ],
  cta: {
    label: "Odezwij si\u0119",
    href: "mailto:kryst.madry@gmail.com",
    note: `Je\u015bli masz pomys\u0142 albo potrzeb\u0119 \u2014 odezwij si\u0119.`,
  },
};

export default design;
