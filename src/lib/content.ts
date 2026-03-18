export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "list"; items: string[]; prefix?: string }
  | { type: "note"; content: string }
  | { type: "transition"; from: string; to: string[] };

export interface ContentSection {
  title: string;
  blocks: ContentBlock[];
}

export interface AreaContent {
  tagline: string;
  sections: ContentSection[];
  cta?: {
    label: string;
    href: string;
    note?: string;
  };
}

// Registry — add new area content here as it's created
const contentMap: Record<string, () => Promise<{ default: AreaContent }>> = {
  mentoring: () => import("./content/mentoring"),
  events: () => import("./content/events"),
  design: () => import("./content/design"),
  engineering: () => import("./content/engineering"),
  produkty: () => import("./content/produkty"),
  ops: () => import("./content/ops"),
  tools: () => import("./content/tools"),
};

export async function getAreaContent(slug: string): Promise<AreaContent | null> {
  const loader = contentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
