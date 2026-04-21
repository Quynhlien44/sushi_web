import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noirumi Studio",
  description:
    "An online-first sushi concept focused on calm presentation, precise food, and considered packaging.",
  keywords: [
    "Noirumi Studio",
    "online-first sushi",
    "sushi concept",
    "takeaway",
    "delivery",
    "packaging",
    "Finnish food brand",
  ],
  openGraph: {
    title: "Noirumi Studio",
    description:
      "An online-first sushi concept focused on calm presentation, precise food, and considered packaging.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="cover">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}