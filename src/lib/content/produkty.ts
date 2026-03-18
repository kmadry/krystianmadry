import type { AreaContent } from "../content";

const produkty: AreaContent = {
  tagline: `Buduj\u0119 aplikacje, kt\u00f3re zaczynaj\u0105 si\u0119 od potrzeby \u2014 nie od pomys\u0142u na biznes.`,
  sections: [
    {
      title: "O co tu chodzi",
      blocks: [
        {
          type: "text",
          content: `To nie s\u0105 \u201eprojekty do portfolio\u201d.\n\nTo rzeczy, kt\u00f3re sprawdzaj\u0105:`,
        },
        {
          type: "list",
          items: [
            `jak dzia\u0142a pomys\u0142`,
            `czy ma sens`,
            `czy da si\u0119 go rozwin\u0105\u0107`,
          ],
        },
        {
          type: "note",
          content: `Powstaj\u0105 szybko, ale nie przypadkowo.`,
        },
      ],
    },
    {
      title: "Jak do tego podchodz\u0119",
      blocks: [
        {
          type: "text",
          content: `Nie buduj\u0119 od razu \u201edu\u017cych produkt\u00f3w\u201d.`,
        },
        {
          type: "list",
          prefix: `Zaczynam od:`,
          items: [
            `najprostszej wersji`,
            `realnego u\u017cycia`,
            `sprawdzenia, czy to dzia\u0142a`,
          ],
        },
        {
          type: "note",
          content: `Dopiero potem ma sens rozw\u00f3j.`,
        },
      ],
    },
    {
      title: "Wybrane kierunki",
      blocks: [
        {
          type: "text",
          content: `QuietSelf`,
        },
        {
          type: "text",
          content: `Aplikacja do obserwacji siebie.\nBez presji. Bez gamifikacji.\nPo prostu \u015bwiadomo\u015b\u0107.`,
        },
        {
          type: "text",
          content: `Nautification`,
        },
        {
          type: "text",
          content: `Wsparcie dla \u017ceglarzy \u2014 w praktyce, nie w teorii.`,
        },
      ],
    },
    {
      title: "Podej\u015bcie",
      blocks: [
        {
          type: "text",
          content: `Nie wszystko musi urosnąć.\n\nNiekt\u00f3re rzeczy zostaj\u0105 narz\u0119dziami.\nInne maj\u0105 potencja\u0142, \u017ceby sta\u0107 si\u0119 czym\u015b wi\u0119kszym.`,
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `W budowie.`,
        },
      ],
    },
  ],
  cta: {
    label: "Odezwij si\u0119",
    href: "mailto:kryst.madry@gmail.com",
    note: `Je\u015bli kt\u00f3ry\u015b kierunek jest Ci bliski \u2014 odezwij si\u0119.`,
  },
};

export default produkty;
