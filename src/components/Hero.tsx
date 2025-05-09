
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (parallaxRef.current) {
        // Parallax effect for background
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    // Set visible with a slight delay to trigger animations
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center z-0 parallax-bg"
        style={{
          backgroundImage: "url('public/lovable-uploads/57493d78-b5a8-4201-96f1-ea23e62d43b4.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 animated-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 animated-fade-down" style={{animationDelay: "0.3s"}}>
            Premium Mohmand Marble—<br className="hidden md:block" />
            <span className="text-gold-300 animated-fade-up" style={{animationDelay: "0.6s"}}>Delivered Across Pakistan</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto animated-fade-up" style={{animationDelay: "0.8s"}}>
            Discover the timeless elegance and unparalleled quality of authentic Mohmand marble, 
            sourced directly from Pakistan's finest mines.
          </p>
          
          {/* CTA Section with new background image */}
          <div className={`relative mt-12 p-6 rounded-lg overflow-hidden transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {/* New luxury marble interior image as background */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ 
              backgroundImage: "url('public/lovable-uploads/57493d78-b5a8-4201-96f1-ea23e62d43b4.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "brightness(0.9)"
            }}></div>
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-6 text-white drop-shadow-md">Transform Your Space With Premium Marble</h3>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center stagger-animation backdrop-blur-sm p-4 rounded-lg bg-black bg-opacity-15">
                <Button 
                  className="bg-gold-400 hover:bg-gold-500 text-white shadow-lg hover:shadow-xl hover-shine"
                  size="lg"
                >
                  Shop Now <ArrowRight className="ml-2 h-5 w-5 animated-float" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white border hover:bg-white/20 hover-lift"
                >
                  <MessageSquare className="mr-2 h-5 w-5" /> Message Us
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white border hover:bg-white/20 hover-lift"
                >
                  <Phone className="mr-2 h-5 w-5" /> Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-gold-300 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
