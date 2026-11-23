import type { Metadata } from "next";
import Hero from "@/components/Hero";
import DailyRoutes from "@/components/DailyRoutes";
import Fleet from "@/components/Fleet";
import Tourism from "@/components/Tourism";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import GuidesPreview from "@/components/GuidesPreview";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DailyRoutes />
      <Fleet />
      <Tourism />
      <Services />
      <About />
      <FAQ />
      <Testimonials />
      <GuidesPreview />
      <Contact />
    </main>
  );
}
