
import { useEffect, useState } from "react";
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
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  
  // Initialize enhanced scroll animations with options
  useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
    once: true,
    delay: 100,
    duration: 1000
  });

  // Smooth scrolling for anchor links with enhanced behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let anchor: HTMLAnchorElement | null = null;
      
      // Check if the clicked element is an anchor or has an anchor parent
      if (target.tagName === 'A') {
        anchor = target as HTMLAnchorElement;
      } else if (target.closest('a')) {
        anchor = target.closest('a') as HTMLAnchorElement;
      }
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          // Get navbar height dynamically if possible, fallback to 80px
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.clientHeight : 80;
          
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - navbarHeight
          });
          
          // Update URL without page reload
          window.history.pushState(null, '', anchor.getAttribute('href'));
        }
      }
    };

    // Show a welcome toast when page loads
    setTimeout(() => {
      setPageLoaded(true);
      toast({
        title: "Welcome to Premium Marble",
        description: "Explore our collection of high-quality marble products",
        duration: 5000,
      });
    }, 1000);

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  // Add parallax effect to sections
  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      
      document.querySelectorAll('.parallax-bg').forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const yPos = -(scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
