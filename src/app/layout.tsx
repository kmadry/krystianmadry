import "./globals.css";
import type { ReactNode } from "react";

// html/body are owned by [locale]/layout.tsx so the lang attribute
// is set correctly per locale. This root layout is a required shell.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
