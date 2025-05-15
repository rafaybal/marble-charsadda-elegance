
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setScrolled(window.scrollY > 50);
      
      // Determine active section for highlighting in navbar
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;  // offset for highlighting
      
      sections.forEach(section => {
        // Use type assertions to fix TypeScript errors
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Order", href: "#order" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" }
  ];
  
  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300", 
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center">
            <span className="font-serif text-2xl text-gold-600 font-bold">Ziarat</span>
            <span className="font-serif text-2xl ml-1">White</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative ${
                  isActive 
                    ? 'text-gold-600' 
                    : 'hover:text-gold-600'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold-400 transform scale-x-0 transition-transform duration-300 ${
                  isActive ? 'scale-x-100' : ''
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-gold-600 focus:outline-none transition-transform duration-300"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom space-y-2 py-4 stagger-animation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`block py-2 font-medium transition-colors ${
                  isActive ? 'text-gold-600' : 'hover:text-gold-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
