import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GridTemplate } from "./gridTemplate";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Explora la completa base de datos Pokémon con estadísticas, habilidades y movimientos. Accede a información detallada sobre tus Pokémon favoritos y mantente al día con las últimas novedades del universo Pokémon. ¡Únete a la aventura ahora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <GridTemplate>
          {children}
        </GridTemplate>
      </body>
    </html>
  );
}
