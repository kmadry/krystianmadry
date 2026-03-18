import type { AreaContent } from "../content";

const ops: AreaContent = {
  tagline: `Prosty biznes oparty na dost\u0119pno\u015bci.`,
  sections: [
    {
      title: "O co tu chodzi",
      blocks: [
        {
          type: "text",
          content: `Nie wszystko trzeba posiada\u0107.\n\nCzasem wystarczy mie\u0107 dost\u0119p \u2014 na moment, kiedy jest to potrzebne.`,
        },
        {
          type: "text",
          content: `Buduj\u0119 wypo\u017cyczalni\u0119 sprz\u0119tu, kt\u00f3ra dzia\u0142a prosto i bez zb\u0119dnych komplikacji.`,
        },
      ],
    },
    {
      title: "Co obejmuje",
      blocks: [
        {
          type: "list",
          items: [
            `elektronarz\u0119dzia`,
            `sprz\u0119t rekreacyjny`,
            `rzeczy u\u017cytkowe`,
          ],
        },
        {
          type: "note",
          content: `Rzeczy, kt\u00f3re realnie si\u0119 przydaj\u0105.`,
        },
      ],
    },
    {
      title: "Jak to dzia\u0142a",
      blocks: [
        {
          type: "list",
          items: [
            `wybierasz sprz\u0119t`,
            `korzystasz`,
            `oddajesz`,
          ],
        },
        {
          type: "note",
          content: `Bez zb\u0119dnych formalno\u015bci.\nBez utrudnie\u0144.`,
        },
      ],
    },
    {
      title: "Podej\u015bcie",
      blocks: [
        {
          type: "text",
          content: `Nie chodzi o skalowanie na si\u0142\u0119.`,
        },
        {
          type: "list",
          prefix: `Chodzi o:`,
          items: [
            `dost\u0119pno\u015b\u0107`,
            `prostot\u0119`,
            `sens u\u017cytkowy`,
          ],
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `Uruchomienie.`,
        },
      ],
    },
  ],
  cta: {
    label: "innowacja-sprzet.pl",
    href: "https://innowacja-sprzet.pl",
    note: `Szczeg\u00f3\u0142y i dost\u0119pny sprz\u0119t znajdziesz tutaj:`,
  },
};

export default ops;
