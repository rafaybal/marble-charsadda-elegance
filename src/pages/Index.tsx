
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import OrderProcess from "../components/OrderProcess";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import useScrollReveal from "../hooks/useScrollReveal";

const Index = () => {
  // Initialize scroll animations
  useScrollReveal();

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80 // Offset for fixed header
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <OrderProcess />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
