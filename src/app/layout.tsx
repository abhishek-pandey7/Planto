import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planto. — Breath Natural",
  description: "For Fresh Decs Ai Plat. We Have Small And Best O2 Plants Collection's.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
