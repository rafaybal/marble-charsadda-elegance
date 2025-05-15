
import React from "react";
import ContactContainer from "./contact/ContactContainer";

const Contact = () => {
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

        <ContactContainer />
      </div>
    </section>
  );
};

export default Contact;
