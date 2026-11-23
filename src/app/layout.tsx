import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import {
  COMPANY,
  SITE_URL,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Topvan Piedade | Transporte Universitário, Escolar e Turismo Piedade ⇄ Sorocaba",
    template: "%s | Topvan Piedade",
  },
  description:
    "Transporte universitário e escolar diário Piedade ⇄ Sorocaba (UNISO, FACENS, UNIP, Anhanguera, FATEC, Objetivo, Anglo, Colégio Ser, ETEC, IFSP) e aluguel de van executiva Mercedes Sprinter 18 lugares para turismo, eventos e aeroportos.",
  keywords: [
    "transporte universitário piedade",
    "van universitária piedade sorocaba",
    "transporte escolar piedade sorocaba",
    "aluguel de van piedade sp",
    "fretamento de van piedade",
    "turismo piedade sp",
    "van executiva piedade",
    "transfer aeroporto piedade",
    "topvan piedade",
    "topvan transporte executivo",
  ],
  authors: [{ name: COMPANY.founder, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Topvan Piedade",
    title:
      "Topvan Piedade | Transporte Universitário, Escolar e Turismo Piedade ⇄ Sorocaba",
    description:
      "Rota diária Piedade ⇄ Sorocaba em van Mercedes-Benz Sprinter executiva de 18 lugares. Transporte universitário, escolar, turismo, eventos e transfer aeroportos.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Topvan Piedade | Transporte Universitário, Escolar e Turismo Piedade ⇄ Sorocaba",
    description:
      "Van executiva em Piedade-SP desde 2016: transporte universitário e escolar para Sorocaba, viagens, romarias, eventos e aeroportos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} antialiased bg-black text-white`}
      >
        <JsonLd data={getLocalBusinessSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
