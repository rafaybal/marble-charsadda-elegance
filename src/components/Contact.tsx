
import React from "react";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our premium marble or need assistance with your order?
            Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm toast={toast} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
