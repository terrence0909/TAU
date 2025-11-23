import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="certifications"><Certifications /></section>
      <section id="projects"><Projects /></section>
      <section id="cv"><CV /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Index;