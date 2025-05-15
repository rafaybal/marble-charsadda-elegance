
import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import ContactSocialLinks from "./ContactSocialLinks";
import ContactMap from "./ContactMap";
import ContactInfoItem from "./ContactInfoItem";

const ContactInfo = () => {
  return (
    <div>
      <div className="bg-marble-50 p-8 rounded-xl shadow-lg mb-8">
        <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
        <div className="space-y-6">
          <ContactInfoItem icon={MessageSquare} label="WhatsApp">
            <a href="https://wa.me/+923469655623" className="font-medium hover:text-gold-600 transition-colors">
              +92 346 965 5623
            </a>
          </ContactInfoItem>

          <ContactInfoItem icon={Phone} label="Phone">
            <a href="tel:+923469655623" className="font-medium hover:text-gold-600 transition-colors">
              +92 346 965 5623
            </a>
          </ContactInfoItem>

          <ContactInfoItem icon={Mail} label="Email">
            <a href="mailto:ziaratwhite8@gmail.com" className="font-medium hover:text-gold-600 transition-colors">
              ziaratwhite8@gmail.com
            </a>
          </ContactInfoItem>

          <ContactInfoItem icon={MapPin} label="Address">
            <p className="font-medium">
              Subhan Khwar Industrial State, <br />
              PO and Tehsil Shabqadar, <br />
              District Charsadda, Pakistan
            </p>
          </ContactInfoItem>
        </div>
        
        <ContactSocialLinks />
      </div>

      <ContactMap />
    </div>
  );
};

export default ContactInfo;
