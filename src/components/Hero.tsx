import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroContent from "./hero/HeroContent";
import MessageDialog from "./hero/MessageDialog";
import ContactDialog from "./hero/ContactDialog";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";

const Hero = () => {
  const { toast } = useToast();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    inquiry: ""
  });

  // Handle form input changes
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submissions
  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link and open directly in the current window
    const mailtoLink = `mailto:ziaratwhite8@gmail.com?subject=${encodeURIComponent(`Message from ${messageForm.name}`)}&body=${encodeURIComponent(
      `Name: ${messageForm.name}\nEmail: ${messageForm.email}\n\n${messageForm.message}`
    )}`;
    
    // Open in the same window to prevent navigation issues
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Please complete sending the email in your email client.",
      duration: 5000,
    });
    
    // Close dialog and reset form after a short delay
    setTimeout(() => {
      setShowMessageDialog(false);
      setMessageForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link and open directly in the current window
    const mailtoLink = `mailto:ziaratwhite8@gmail.com?subject=${encodeURIComponent(`Contact Request from ${contactForm.name}`)}&body=${encodeURIComponent(
      `Name: ${contactForm.name}\nPhone: ${contactForm.phone}\nInquiry: ${contactForm.inquiry}`
    )}`;
    
    // Open in the same window to prevent navigation issues
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Please complete sending the email in your email client.",
      duration: 5000,
    });
    
    // Close dialog and reset form after a short delay
    setTimeout(() => {
      setShowContactDialog(false);
      setContactForm({ name: "", phone: "", inquiry: "" });
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (parallaxRef.current) {
        // Enhanced parallax effect
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px) scale(${1 + scrollPosition * 0.0001})`;
      }
    };

    // Set visible with a slight delay to trigger animations
    setTimeout(() => {
      setIsVisible(true);
      setLoaded(true);
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Enhanced background with overlay gradient */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: "url('/lovable-uploads/57493d78-b5a8-4201-96f1-ea23e62d43b4.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Improved overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Main Hero Content */}
      <HeroContent 
        isVisible={isVisible} 
        loaded={loaded}
        setShowMessageDialog={setShowMessageDialog}
        setShowContactDialog={setShowContactDialog}
      />
      
      {/* Scroll Indicator */}
      <HeroScrollIndicator />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold-400/20 rounded-full animate-ping opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-gold-400/20 rounded-full animate-pulse opacity-20 hidden lg:block"></div>

      {/* Dialogs */}
      <MessageDialog 
        showDialog={showMessageDialog}
        setShowDialog={setShowMessageDialog}
        messageForm={messageForm}
        handleMessageChange={handleMessageChange}
        handleMessageSubmit={handleMessageSubmit}
      />

      <ContactDialog 
        showDialog={showContactDialog}
        setShowDialog={setShowContactDialog}
        contactForm={contactForm}
        handleContactChange={handleContactChange}
        handleContactSubmit={handleContactSubmit}
      />
    </section>
  );
};

export default Hero;
