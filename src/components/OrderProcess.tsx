
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Check, Truck, Package, CreditCard, Image, ShoppingCart } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [customSizeDetails, setCustomSizeDetails] = useState("");

  const handleStepHover = (index: number) => {
    setActiveStep(index);
  };

  const handleStepLeave = () => {
    setActiveStep(null);
  };

  const handleCustomSizeRequest = () => {
    if (customSizeDetails.trim()) {
      toast({
        title: "Custom Size Request Received",
        description: "Our team will get back to you within 24 hours with a quote.",
        duration: 5000,
      });
      setCustomSizeDetails("");
    } else {
      toast({
        title: "Please provide details",
        description: "Please describe your custom size requirements.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const steps = [
    {
      number: "01",
      title: "Select Your Marble",
      description: "Browse our collection and choose the perfect marble type for your project.",
      icon: <ShoppingCart className="h-10 w-10 text-gold-500" />
    },
    {
      number: "02",
      title: "Specify Dimensions",
      description: "Provide us with the measurements you need, or request our assistance for custom sizes.",
      icon: <Image className="h-10 w-10 text-gold-500" />
    },
    {
      number: "03",
      title: "Get a Quote",
      description: "Receive a transparent quote with all costs clearly detailed, including delivery.",
      icon: <CreditCard className="h-10 w-10 text-gold-500" />
    },
    {
      number: "04",
      title: "Confirm Order",
      description: "Review your order details and make payment through our secure methods.",
      icon: <Check className="h-10 w-10 text-gold-500" />
    },
    {
      number: "05",
      title: "Track Delivery",
      description: "Track your order as we carefully package and deliver it to your location.",
      icon: <Truck className="h-10 w-10 text-gold-500" />
    }
  ];

  return (
    <section id="order" className="section-padding bg-marble-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="parallax-bg" data-speed="0.05" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832&auto=format&fit=crop')",
          backgroundSize: "cover",
          height: "120%",
          top: "-10%"
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-4 animated-fade-down">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gradient">How to Order</h2>
          </div>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6 animated-scale-in"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md animated-fade-up">
            Our simple ordering process makes it easy to get the premium marble you desire.
            Follow these steps or contact us for personalized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16 stagger-animation">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`border-none hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                activeStep === index ? 'scale-105 z-10' : ''
              }`}
              onMouseEnter={() => handleStepHover(index)}
              onMouseLeave={handleStepLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-marble-50 to-white opacity-80"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 to-gold-500 transform origin-left transition-transform duration-700" 
                style={{ transform: activeStep === index ? 'scaleX(1)' : 'scaleX(0)' }}></div>
                
              <CardContent className="p-6 text-center relative z-10">
                <div className={`inline-block rounded-full bg-gold-100 p-4 mb-4 transform transition-all duration-500 ${
                  activeStep === index ? 'scale-110 rotate-3 bg-gold-200' : ''
                }`}>
                  {step.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  activeStep === index ? 'text-gold-600' : 'text-gold-500'
                }`}>{step.number}</div>
                <h3 className="text-xl font-serif font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                <div className={`w-10 h-10 absolute -right-5 top-1/2 transform -translate-y-1/2 flex items-center justify-center ${
                  index === steps.length - 1 ? 'hidden' : ''
                }`}>
                  <ArrowRight className={`text-gold-500 transition-opacity duration-500 ${
                    activeStep === index ? 'opacity-100' : 'opacity-30'
                  }`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover-lift animated-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-gradient">Need Custom Sizes?</h3>
              <p className="text-gray-600">
                We understand that every project is unique. Our expert team can help you determine 
                the perfect dimensions for your space and requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-gold-500 mr-2 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-gold-700 transition-colors duration-300">Precise measurements by our experienced team</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-gold-500 mr-2 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-gold-700 transition-colors duration-300">Custom cutting to your exact specifications</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-gold-500 mr-2 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-gold-700 transition-colors duration-300">Professional advice on optimal sizing</span>
                </li>
              </ul>

              <Textarea 
                placeholder="Describe your custom size requirements here..."
                className="focus:ring-gold-400 resize-none"
                value={customSizeDetails}
                onChange={(e) => setCustomSizeDetails(e.target.value)}
              />

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-gold-400 hover:bg-gold-500 text-white hover-lift button-glow"
                  onClick={handleCustomSizeRequest}
                >
                  Request Custom Size <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gold-400 text-gold-700 hover:bg-gold-100 hover-shine"
                  onClick={() => window.location.href = "#contact"}
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Chat with Us
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1565876427310-a526cd99db1c?q=80&w=2670&auto=format&fit=crop" 
                alt="Custom marble sizing" 
                className="w-full h-full object-cover hover-shine" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-20 animated-fade-up">
        <div className="bg-marble-800 text-white rounded-2xl overflow-hidden shadow-xl gold-border-gradient">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 shadow-text">Shipping & Delivery</h3>
              <div className="w-16 h-1 bg-gold-400 mb-6"></div>
              <div className="space-y-6">
                <div className="transform transition-all duration-500 hover:translate-x-2">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Package className="mr-2 h-5 w-5 text-gold-400" />
                    <span>Delivery Timeframe</span>
                  </h4>
                  <p className="text-marble-100">
                    Standard delivery within 2-3 business days across major cities in Pakistan.
                    Remote areas may require additional time.
                  </p>
                </div>
                <div className="transform transition-all duration-500 hover:translate-x-2">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-gold-400" />
                    <span>Shipping Charges</span>
                  </h4>
                  <p className="text-marble-100">
                    Shipping costs are calculated based on weight, dimensions, and delivery location.
                    All charges are transparent and included in your quote.
                  </p>
                </div>
                <div className="transform transition-all duration-500 hover:translate-x-2">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Truck className="mr-2 h-5 w-5 text-gold-400" />
                    <span>Order Tracking</span>
                  </h4>
                  <p className="text-marble-100">
                    Track your order in real-time with our dedicated tracking system.
                    Receive updates via WhatsApp or SMS.
                  </p>
                </div>
                <div className="transform transition-all duration-500 hover:translate-x-2">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Package className="mr-2 h-5 w-5 text-gold-400" />
                    <span>Safe Packaging</span>
                  </h4>
                  <p className="text-marble-100">
                    All marble is carefully packaged to prevent any damage during transit,
                    ensuring your order arrives in perfect condition.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] overflow-hidden group">
              <AspectRatio ratio={16/9} className="h-full">
                <img 
                  src="/public/lovable-uploads/e5d5aabe-2944-420c-987f-00958b9adfa1.png" 
                  alt="Shipping containers at port" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marble-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white shadow-text">
                  <p className="text-sm font-semibold opacity-80">Global shipping network ensures timely delivery</p>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
