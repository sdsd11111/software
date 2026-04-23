import type { Metadata, Viewport } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Software de Gestión para Empresas de Servicios — Gestión Eficiente",
  description: "Sistema de gestión y seguimiento de proyectos en campo",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/icon-512.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gestión App",
  },
  formatDetection: {
    telephone: false,
  },
};


import Navbar from "@/components/marketing/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head />
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
