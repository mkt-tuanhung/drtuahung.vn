import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import Technique from "@/components/Technique";
import Compliance from "@/components/Compliance";
import Commitments from "@/components/Commitments";
import Philosophy from "@/components/Philosophy";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Leadership />
      <Services />
      <Technique />
      <Compliance />
      <Commitments />
      <Philosophy />
      <Gallery />
      <Footer />
      <StickyCTA />
    </main>
  );
}
