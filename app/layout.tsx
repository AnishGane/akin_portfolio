import type { Metadata } from "next";
// import { quera } from "./font";
import { Montserrat, Roboto, Lora } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akin's Portfolio",
  description: "Welcome to the portfolio of a UI/UX designer(me)",
};

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${roboto.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
