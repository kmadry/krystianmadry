import type { AreaContent } from "../content";

const mentoring: AreaContent = {
  tagline:
    `Wej\u015bcie poziom wy\u017cej jako developer nie zaczyna si\u0119 od kolejnej technologii. Zaczyna si\u0119 od sposobu my\u015blenia.`,
  sections: [
    {
      title: "O co tu chodzi",
      blocks: [
        {
          type: "text",
          content: `To nie jest kurs.\n\nNie ucz\u0119 pisa\u0107 \u201e\u0142adnego kodu\u201d.\nPomagam zrozumie\u0107, co realnie wp\u0142ywa na Twoj\u0105 prac\u0119 i rozw\u00f3j.`,
        },
        {
          type: "text",
          content: `Firmy nie p\u0142ac\u0105 za perfekcj\u0119.\nP\u0142ac\u0105 za dowieziony efekt, spok\u00f3j w zespole i przewidywalno\u015b\u0107.\n\nNa tym pracujemy.`,
        },
      ],
    },
    {
      title: `Jak to dzia\u0142a`,
      blocks: [
        {
          type: "text",
          content: `Pracujemy na tym, co robisz na co dzie\u0144.`,
        },
        {
          type: "list",
          items: [
            `analizujemy Tw\u00f3j spos\u00f3b my\u015blenia i podejmowania decyzji`,
            `rozk\u0142adamy na cz\u0119\u015bci Tw\u00f3j kod i spos\u00f3b pracy`,
            `poprawiamy debugowanie, refactor i komunikacj\u0119`,
            `budujemy plan rozwoju dopasowany do reali\u00f3w zespo\u0142u i rynku`,
            `uczysz si\u0119 korzysta\u0107 z AI tak, \u017ceby przyspiesza\u0142o prac\u0119 \u2014 nie maskowa\u0142o brak\u00f3w`,
          ],
        },
        {
          type: "text",
          content: `To nie s\u0105 zadania \u201edo odrobienia\u201d.\nTo zmiana sposobu dzia\u0142ania.`,
        },
      ],
    },
    {
      title: `Co si\u0119 zmienia`,
      blocks: [
        {
          type: "transition",
          from: `zrobi\u0107 task i przej\u015b\u0107 dalej`,
          to: [
            `kontrol\u0119 nad tym, co robisz`,
            `\u015bwiadome decyzje`,
            `dowo\u017cenie rzeczy od pocz\u0105tku do ko\u0144ca`,
          ],
        },
      ],
    },
    {
      title: "Dla kogo",
      blocks: [
        {
          type: "list",
          prefix: `Dla developer\u00f3w, kt\u00f3rzy:`,
          items: [
            `ju\u017c pracuj\u0105 (junior / mid)`,
            `czuj\u0105, \u017ce stoj\u0105 w miejscu`,
            `chc\u0105 wej\u015b\u0107 poziom wy\u017cej, ale nie wiedz\u0105 jak`,
          ],
        },
        {
          type: "note",
          content: `Nie dla os\u00f3b, kt\u00f3re dopiero zaczynaj\u0105.`,
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `Startuj\u0119 z pierwszymi osobami.`,
        },
      ],
    },
  ],
  cta: {
    label: "inkubacja.dev",
    href: "https://inkubacja.dev",
    note: `Je\u015bli to z Tob\u0105 rezonuje \u2014 sprawdź szczeg\u00f3\u0142y.`,
  },
};

export default mentoring;
