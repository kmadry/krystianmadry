import type { AreaContent } from "../content";

const events: AreaContent = {
  tagline: `Powr\u00f3t do dzieci\u0144stwa.\nTylko w wersji, kt\u00f3ra naprawd\u0119 wci\u0105ga.`,
  sections: [
    {
      title: "O co tu chodzi",
      blocks: [
        {
          type: "text",
          content: `To nie jest zwyk\u0142a zabawa.\n\nTworz\u0119 wydarzenia, kt\u00f3re \u0142\u0105cz\u0105 prost\u0105 frajd\u0119 z realn\u0105 rywalizacj\u0105.\nWchodzisz bez do\u015bwiadczenia \u2014 i po kilku minutach jeste\u015b w grze.`,
        },
        {
          type: "list",
          prefix: "To co\u015b pomi\u0119dzy:",
          items: ["zabaw\u0105", "sportem", "do\u015bwiadczeniem"],
        },
      ],
    },
    {
      title: `Jak to dzia\u0142a`,
      blocks: [
        {
          type: "text",
          content: `Zaczynasz od podstaw.`,
        },
        {
          type: "list",
          items: [
            `tor szkoleniowy, gdzie uczysz si\u0119 kontroli`,
            `przej\u015bcie na tor g\u0142\u00f3wny po opanowaniu jazdy`,
            `jazda + czas\u00f3wki + ranking`,
          ],
        },
        {
          type: "text",
          content: `Ka\u017cdy przejazd to decyzja.\nLiczy si\u0119 nie tylko pr\u0119dko\u015b\u0107, ale kontrola.`,
        },
      ],
    },
    {
      title: "System",
      blocks: [
        {
          type: "text",
          content: `Ca\u0142o\u015b\u0107 oparta jest o prosty model.`,
        },
        {
          type: "list",
          items: [
            `ka\u017cdy przejazd = 1 token`,
            `decydujesz ile chcesz je\u017cdzi\u0107`,
            `rywalizacja oparta o czas i dok\u0142adno\u015b\u0107`,
          ],
        },
        {
          type: "text",
          content: `System jest prosty, ale daje realn\u0105 motywacj\u0119 do gry.`,
        },
      ],
    },
    {
      title: "Co z tego masz",
      blocks: [
        {
          type: "list",
          items: [
            `szybkie wej\u015bcie w co\u015b nowego`,
            `rywalizacj\u0119, kt\u00f3ra wci\u0105ga`,
            `powr\u00f3t do prostej frajdy`,
          ],
        },
        {
          type: "note",
          content: `Bez barier wej\u015bcia.\nBez potrzeby \u201ebycia w temacie\u201d.`,
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
            `lubi\u0105 rywalizacj\u0119`,
            `chc\u0105 spr\u00f3bowa\u0107 czego\u015b nowego`,
            `szukaj\u0105 do\u015bwiadczenia, nie tylko wyj\u015bcia`,
          ],
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `Pierwszy event w przygotowaniu.`,
        },
      ],
    },
  ],
  cta: {
    label: "Odezwij si\u0119",
    href: "mailto:kryst.madry@gmail.com",
    note: `Je\u015bli chcesz w tym uczestniczy\u0107 albo pom\u00f3c to rozwin\u0105\u0107 \u2014 odezwij si\u0119.`,
  },
};

export default events;
