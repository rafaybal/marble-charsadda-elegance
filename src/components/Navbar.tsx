
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
            <span className="font-serif text-2xl text-gold-600 font-bold">Mohmand</span>
            <span className="font-serif text-2xl ml-1">Marble</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-gold-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-gold-600 focus:outline-none"
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
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute top-full left-0 w-full">
          <div className="container-custom space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 font-medium hover:text-gold-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
