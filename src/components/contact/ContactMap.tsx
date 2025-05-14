
import React from "react";

const ContactMap = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg h-80">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.420942189574!2d71.36139947469323!3d34.20274701630306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8d86e59b176cf%3A0xbb905e3caf72b4fa!2sCharsadda%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715246820753!5m2!1sen!2s" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Mohmand Marble Location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
