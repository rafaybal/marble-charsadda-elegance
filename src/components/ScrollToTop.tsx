
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    
    // Add a slight delay before scrolling for animation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
      // Reset the clicked state after animation completes
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }, 100);
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 p-3 rounded-full z-50 shadow-lg transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        ${isHovered ? "bg-gold-600 shadow-xl" : "bg-gold-500"}
        ${isClicked ? "scale-90" : "scale-100"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp 
        className={`h-6 w-6 text-white transition-transform duration-500 ${isHovered ? "animate-bounce" : ""}`} 
      />
      <span className={`absolute inset-0 rounded-full bg-gold-400 opacity-30 ${isHovered ? "animate-ping" : "opacity-0"}`}></span>
      <span className={`absolute -inset-1 rounded-full bg-gold-300 opacity-0 ${isHovered ? "animate-pulse opacity-20" : ""}`}></span>
    </button>
  );
};

export default ScrollToTop;
