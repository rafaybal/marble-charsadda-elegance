
import React from "react";

const HeroScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a 
        href="#about" 
        className="text-white hover:text-gold-300 transition-colors duration-300 block group"
        aria-label="Scroll to About section"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2 group-hover:border-gold-300 transition-colors">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse group-hover:bg-gold-300 transition-colors"></div>
        </div>
        <div className="text-center mt-2 text-xs font-light tracking-wider opacity-70">SCROLL</div>
      </a>
    </div>
  );
};

export default HeroScrollIndicator;
