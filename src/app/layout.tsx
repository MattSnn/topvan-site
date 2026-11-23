import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionBar from "@/components/MobileActionBar";
import JsonLd from "@/components/JsonLd";
import {
  COMPANY,
  CREDITS,
  SITE_URL,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
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
  authors: [{ name: CREDITS.adminName, url: CREDITS.agencyUrl }],
  creator: `${CREDITS.agencyName} (${CREDITS.agencyUrl})`,
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
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${plusJakarta.variable}`}
    >
      <body className="antialiased bg-[#070708] text-white font-sans selection:bg-gold-400 selection:text-black">
        <JsonLd data={getLocalBusinessSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileActionBar />
      </body>
    </html>
  );
}
