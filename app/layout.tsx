import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const theSeasons = localFont({
  src: "./fonts/TheSeasons.otf",
  variable: "--font-title",
  display: "swap",
});

const glacial = localFont({
  src: "./fonts/GlacialIndifference.otf",
  variable: "--font-subtitle",
  display: "swap",
});

const garet = localFont({
  src: "./fonts/Garet.otf",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GIHA DECO",
  description: "Ambientación, organización y alquileres para eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${theSeasons.variable} ${glacial.variable} ${garet.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
