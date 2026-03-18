import type { AreaContent } from "../content";

const engineering: AreaContent = {
  tagline: `Na co dzie\u0144 pracuj\u0119 przy systemach, kt\u00f3re musz\u0105 dzia\u0142a\u0107.\nW realnych warunkach \u2014 z zespo\u0142em, presj\u0105 czasu i odpowiedzialno\u015bci\u0105.`,
  sections: [
    {
      title: "Jak pracuj\u0119",
      blocks: [
        {
          type: "text",
          content: `\u0141\u0105cz\u0119 kilka warstw:`,
        },
        {
          type: "list",
          items: [
            `implementacj\u0119`,
            `architektur\u0119`,
            `podejmowanie decyzji`,
            `komunikacj\u0119 w zespole`,
          ],
        },
        {
          type: "note",
          content: `Widz\u0119 system jako ca\u0142o\u015b\u0107, nie tylko fragment.`,
        },
      ],
    },
    {
      title: "Rola",
      blocks: [
        {
          type: "list",
          prefix: `W zale\u017cno\u015bci od projektu dzia\u0142am jako:`,
          items: [
            `frontend / senior developer`,
            `osoba odpowiedzialna za architektur\u0119`,
            `kto\u015b, kto domyka rzeczy, kiedy zaczynaj\u0105 si\u0119 rozje\u017cd\u017ca\u0107`,
          ],
        },
      ],
    },
    {
      title: "Podej\u015bcie",
      blocks: [
        {
          type: "text",
          content: `Nie skupiam si\u0119 na \u201e\u0142adnym kodzie\u201d dla samego kodu.`,
        },
        {
          type: "list",
          prefix: `Liczy si\u0119:`,
          items: [
            `przewidywalno\u015b\u0107`,
            `stabilno\u015b\u0107`,
            `mo\u017cliwo\u015b\u0107 dalszego rozwoju`,
          ],
        },
        {
          type: "note",
          content: `Kod jest \u015brodkiem.\nEfekt \u2014 celem.`,
        },
      ],
    },
    {
      title: "Skala",
      blocks: [
        {
          type: "list",
          prefix: `Pracuj\u0119 przy produktach, kt\u00f3re:`,
          items: [
            `maj\u0105 realnych u\u017cytkownik\u00f3w`,
            `s\u0105 rozwijane d\u0142ugoterminowo`,
            `wymagaj\u0105 odpowiedzialnych decyzji`,
          ],
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `Aktywnie.`,
        },
      ],
    },
  ],
  cta: {
    label: "Odezwij si\u0119",
    href: "mailto:kryst.madry@gmail.com",
    note: `Je\u015bli widzisz miejsce, gdzie mog\u0119 pom\u00f3c \u2014 odezwij si\u0119.`,
  },
};

export default engineering;
