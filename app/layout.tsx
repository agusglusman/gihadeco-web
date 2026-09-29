import type { Metadata } from "next";
import localFont from "next/font/local";
import WhatsappFloatingButton from "@/components/common/WhatsappFloatingButton";
import "./globals.css";

const theSeasons = localFont({
  src: "./fonts/The Seasons Regular.ttf",
  variable: "--font-title",
  display: "swap",
});

const theSeasonsItalic = localFont({
  src: "./fonts/The Seasons Italic.ttf",
  variable: "--font-title-italic",
  display: "swap",
});

const glacial = localFont({
  src: "./fonts/GlacialIndifference.otf",
  variable: "--font-subtitle",
  display: "swap",
});

const glacialBold = localFont({
  src: "./fonts/GlacialIndifference-Bold.otf",
  variable: "--font-subtitle-bold",
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
        className={`${theSeasons.variable} ${glacial.variable} ${garet.variable} ${theSeasonsItalic.variable}`}
      >
        {children}
        <WhatsappFloatingButton />
      </body>
    </html>
  );
}
