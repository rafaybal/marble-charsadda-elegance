import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroContent from "./hero/HeroContent";
import MessageDialog from "./hero/MessageDialog";
import ContactDialog from "./hero/ContactDialog";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";
import { submitMessageForm, submitCallbackForm } from "@/services/supabaseService";
import { sendEmail, createContactEmailContent, createCallbackEmailContent } from "@/services/emailService";

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
  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Store submission in database
      const dbResult = await submitMessageForm(messageForm);
      
      // 2. Send email notification
      const emailParams = createContactEmailContent({
        name: messageForm.name,
        email: messageForm.email,
        message: messageForm.message,
      });
      const emailResult = await sendEmail(emailParams);
      
      // Log results
      console.log("Database submission result:", dbResult);
      console.log("Email sending result:", emailResult);
      
      // Show success message
      toast({
        title: "Message Sent Successfully",
        description: "Thank you! We'll get back to you soon.",
        duration: 5000,
      });
      
      // Close dialog and reset form
      setShowMessageDialog(false);
      setMessageForm({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Store submission in database
      const dbResult = await submitCallbackForm(contactForm);
      
      // 2. Send email notification
      const emailParams = createCallbackEmailContent({
        name: contactForm.name,
        phone: contactForm.phone,
        inquiry: contactForm.inquiry,
      });
      const emailResult = await sendEmail(emailParams);
      
      // Log results
      console.log("Database submission result:", dbResult);
      console.log("Email sending result:", emailResult);
      
      // Show success message
      toast({
        title: "Callback Request Sent",
        description: "Thank you! We'll call you back soon.",
        duration: 5000,
      });
      
      // Close dialog and reset form
      setShowContactDialog(false);
      setContactForm({ name: "", phone: "", inquiry: "" });
      
    } catch (error) {
      console.error("Error sending contact request:", error);
      toast({
        title: "Error Sending Request",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
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
