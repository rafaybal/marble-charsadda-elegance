import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const OrderProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Select Your Marble",
      description: "Browse our collection and choose the perfect marble type for your project.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Specify Dimensions",
      description: "Provide us with the measurements you need, or request our assistance for custom sizes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.01M6 12h.01M6 18h.01M12 6h.01M12 12h.01M12 18h.01M18 6h.01M18 12h.01M18 18h.01" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Get a Quote",
      description: "Receive a transparent quote with all costs clearly detailed, including delivery.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Confirm Order",
      description: "Review your order details and make payment through our secure methods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Track Delivery",
      description: "Track your order as we carefully package and deliver it to your location.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
        </svg>
      )
    }
  ];

  return (
    <section id="order" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">How to Order</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple ordering process makes it easy to get the premium marble you desire.
            Follow these steps or contact us for personalized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-marble-50 border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-block rounded-full bg-gold-100 p-4 mb-4">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-gold-500 mb-2">{step.number}</div>
                <h3 className="text-xl font-serif font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-marble-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-medium">Need Custom Sizes?</h3>
              <p className="text-gray-600">
                We understand that every project is unique. Our expert team can help you determine 
                the perfect dimensions for your space and requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Precise measurements by our experienced team</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom cutting to your exact specifications</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional advice on optimal sizing</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-gold-400 hover:bg-gold-500 text-white"
                >
                  Request Custom Size <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gold-400 text-gold-700 hover:bg-gold-100"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Chat with Us
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1565876427310-a526cd99db1c?q=80&w=2670&auto=format&fit=crop" 
                alt="Custom marble sizing" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-20">
        <div className="bg-marble-800 text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">Shipping & Delivery</h3>
              <div className="w-16 h-1 bg-gold-400 mb-6"></div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">Delivery Timeframe</h4>
                  <p className="text-marble-100">
                    Standard delivery within 2-3 business days across major cities in Pakistan.
                    Remote areas may require additional time.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Shipping Charges</h4>
                  <p className="text-marble-100">
                    Shipping costs are calculated based on weight, dimensions, and delivery location.
                    All charges are transparent and included in your quote.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Order Tracking</h4>
                  <p className="text-marble-100">
                    Track your order in real-time with our dedicated tracking system.
                    Receive updates via WhatsApp or SMS.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Safe Packaging</h4>
                  <p className="text-marble-100">
                    All marble is carefully packaged to prevent any damage during transit,
                    ensuring your order arrives in perfect condition.
                  </p>
                </div>
              </div>
            </div>
            <div 
              className="bg-cover bg-center h-full min-h-[300px]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1584729183765-5be83cf96456?q=80&w=2574&auto=format&fit=crop')"
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
