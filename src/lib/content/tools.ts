import type { AreaContent } from "../content";

const tools: AreaContent = {
  tagline: `Zaplecze do tworzenia rzeczy fizycznych.`,
  sections: [
    {
      title: "O co tu chodzi",
      blocks: [
        {
          type: "text",
          content: `To nie jest osobny produkt.\n\nTo narz\u0119dzie, kt\u00f3re pozwala przej\u015b\u0107:\nod pomys\u0142u \u2192 do fizycznej formy.`,
        },
      ],
    },
    {
      title: "Co obejmuje",
      blocks: [
        {
          type: "list",
          items: [`druk 3D`, `CNC`, `grawer`],
        },
        {
          type: "note",
          content: `Rzeczy potrzebne do prototypowania i tworzenia kr\u00f3tkich serii.`,
        },
      ],
    },
    {
      title: "Jak to wykorzystuj\u0119",
      blocks: [
        {
          type: "list",
          items: [
            `wsparcie dla w\u0142asnych projekt\u00f3w`,
            `budowanie form i element\u00f3w`,
            `testowanie pomys\u0142\u00f3w w praktyce`,
          ],
        },
      ],
    },
    {
      title: "Podej\u015bcie",
      blocks: [
        {
          type: "text",
          content: `To nie jest produkcja masowa.`,
        },
        {
          type: "list",
          prefix: `To:`,
          items: [
            `precyzja`,
            `szybko\u015b\u0107 prototypowania`,
            `kontrola nad procesem`,
          ],
        },
      ],
    },
    {
      title: "Status",
      blocks: [
        {
          type: "text",
          content: `Rozw\u00f3j.`,
        },
      ],
    },
  ],
  cta: {
    label: "Odezwij si\u0119",
    href: "mailto:kryst.madry@gmail.com",
    note: `Je\u015bli potrzebujesz czego\u015b niestandardowego \u2014 odezwij si\u0119.`,
  },
};

export default tools;
