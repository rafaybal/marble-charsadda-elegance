
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Award, MapPin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeroContentProps {
  isVisible: boolean;
  loaded: boolean;
  setShowMessageDialog: (show: boolean) => void;
  setShowContactDialog: (show: boolean) => void;
}

const HeroContent = ({ 
  isVisible, 
  loaded,
  setShowMessageDialog,
  setShowContactDialog
}: HeroContentProps) => {
  const { toast } = useToast();

  return (
    <div className="container-custom relative z-10 text-white text-center px-4">
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
  );
};

export default HeroContent;
