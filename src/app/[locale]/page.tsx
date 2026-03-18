import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Areas />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
