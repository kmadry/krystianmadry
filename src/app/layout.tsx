import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krystian Mądry",
  description:
    "Software, produkty, doświadczenia i rzeczy fizyczne. Buduję je równolegle — systemowo, bez zbędnego chaosu.",
  openGraph: {
    title: "Krystian Mądry",
    description:
      "Software, produkty, doświadczenia i rzeczy fizyczne. Buduję je równolegle — systemowo, bez zbędnego chaosu.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
