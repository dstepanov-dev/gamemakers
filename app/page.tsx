import { AmbientBackground } from "@/components/AmbientBackground";
import { ContactCTA } from "@/components/ContactCTA";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModalProvider } from "@/components/ModalContext";
import { Platforms } from "@/components/Platforms";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <ModalProvider>
      <AmbientBackground />
      <Header />
      <main className="relative">
        <Hero />
        <Platforms />
        <Services />
        <Technologies />
        <Gallery />
        <Studio />
        <ContactCTA />
      </main>
      <Footer />
      <ContactModal />
    </ModalProvider>
  );
}
