
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Award, MapPin, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    
    // Create mailto link with the new email
    const mailtoLink = `mailto:ziaratwhite8@gmail.com?subject=${encodeURIComponent(`Message from ${messageForm.name}`)}&body=${encodeURIComponent(
      `Name: ${messageForm.name}\nEmail: ${messageForm.email}\n\n${messageForm.message}`
    )}`;
    
    // Open the default email client
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Message Action Required",
      description: `Please send the email that opened in your email client to complete the process.`,
      duration: 5000,
    });
    
    setShowMessageDialog(false);
    setMessageForm({ name: "", email: "", message: "" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with the new email
    const mailtoLink = `mailto:ziaratwhite8@gmail.com?subject=${encodeURIComponent(`Contact Request from ${contactForm.name}`)}&body=${encodeURIComponent(
      `Name: ${contactForm.name}\nPhone: ${contactForm.phone}\nInquiry: ${contactForm.inquiry}`
    )}`;
    
    // Open the default email client
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Contact Request Received",
      description: `Please send the email that opened in your email client to complete the process.`,
      duration: 5000,
    });
    
    setShowContactDialog(false);
    setContactForm({ name: "", phone: "", inquiry: "" });
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
      
      <div className="container-custom relative z-10 text-white text-center px-4">
        {/* Main content with enhanced animations */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative elements */}
          <div className="flex justify-center items-center mb-6 gap-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
            <Star className="h-5 w-5 text-gold-400 animate-pulse" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 animated-fade-down shadow-text" style={{animationDelay: "0.3s"}}>
            Premium Ziarat White—<br className="hidden md:block" />
            <span className="text-gold-300 animated-fade-up relative inline-block" style={{animationDelay: "0.6s"}}>
              Delivered Across Pakistan
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto animated-fade-up text-marble-50" style={{animationDelay: "0.8s"}}>
            Discover the timeless elegance and unparalleled quality of authentic Ziarat White marble, 
            sourced directly from Pakistan's finest mines.
          </p>
          
          {/* Enhanced features badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 stagger-animation">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="h-4 w-4 text-gold-400" />
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-gold-400" />
              <span className="text-sm">Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-gold-400" />
              <span className="text-sm">5-Star Service</span>
            </div>
          </div>
          
          {/* CTA Section with enhanced visuals */}
          <div className={`relative mt-12 p-8 rounded-lg overflow-hidden transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {/* CTA background with improved styling */}
            <div className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black/40 before:z-10" style={{ 
              backgroundImage: "url('/lovable-uploads/57493d78-b5a8-4201-96f1-ea23e62d43b4.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/20 to-black/40 z-20"></div>
            </div>
            
            <div className="relative z-30">
              <h3 className="text-2xl font-serif mb-6 text-white drop-shadow-md">Transform Your Space With Premium Marble</h3>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center stagger-animation backdrop-blur-sm p-6 rounded-lg bg-black/15">
                {/* Shop Now Button - Scrolls to Products section */}
                <Button 
                  className="bg-gold-400 hover:bg-gold-500 text-white shadow-lg hover:shadow-xl hover-shine group relative overflow-hidden"
                  size="lg"
                  onClick={() => {
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                      toast({
                        title: "Explore Our Products",
                        description: "Browse our premium marble collection",
                        duration: 3000,
                      });
                    }
                  }}
                >
                  <span className="relative z-10">Shop Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 animated-float relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
                
                {/* Message Us Button - Opens Message Dialog */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white border hover:bg-white/20 hover-lift group"
                  onClick={() => setShowMessageDialog(true)}
                >
                  <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> 
                  <span>Message Us</span>
                </Button>
                
                {/* Contact Us Button - Opens Contact Dialog */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white border hover:bg-white/20 hover-lift group"
                  onClick={() => setShowContactDialog(true)}
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> 
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with animation */}
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
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold-400/20 rounded-full animate-ping opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-gold-400/20 rounded-full animate-pulse opacity-20 hidden lg:block"></div>

      {/* Message Us Dialog */}
      <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Send Us a Message</DialogTitle>
            <DialogDescription>
              We'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleMessageSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={messageForm.name}
                  onChange={handleMessageChange}
                  placeholder="Your name" 
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={messageForm.email}
                  onChange={handleMessageChange}
                  placeholder="Your email address" 
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={messageForm.message}
                  onChange={handleMessageChange}
                  placeholder="How can we help you?" 
                  className="min-h-[100px]"
                  required
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-gold-500 hover:bg-gold-600">
                Send Message
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Contact Us Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Contact Us</DialogTitle>
            <DialogDescription>
              Leave your details and we'll call you back shortly.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input 
                  id="contact-name" 
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your name" 
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  placeholder="Your phone number" 
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="inquiry">Inquiry Type</Label>
                <Textarea 
                  id="inquiry" 
                  name="inquiry"
                  value={contactForm.inquiry}
                  onChange={handleContactChange}
                  placeholder="What would you like to know about our products?" 
                  className="min-h-[80px]"
                  required
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-gold-500 hover:bg-gold-600">
                Request Call Back
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
