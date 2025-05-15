
import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import ContactSocialLinks from "./ContactSocialLinks";
import ContactMap from "./ContactMap";

const ContactInfo = () => {
  return (
    <div>
      <div className="bg-marble-50 p-8 rounded-xl shadow-lg mb-8">
        <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center mr-4">
              <MessageSquare className="h-5 w-5 text-gold-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a href="https://wa.me/+923469655623" className="font-medium hover:text-gold-600 transition-colors">
                +92 346 965 5623
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center mr-4">
              <Phone className="h-5 w-5 text-gold-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:+923469655623" className="font-medium hover:text-gold-600 transition-colors">
                +92 346 965 5623
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center mr-4">
              <Mail className="h-5 w-5 text-gold-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:fayazkhan@hotmail.com" className="font-medium hover:text-gold-600 transition-colors">
                fayazkhan@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center mr-4">
              <MapPin className="h-5 w-5 text-gold-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">
                Subhan Khwar Industrial State, <br />
                PO and Tehsil Shabqadar, <br />
                District Charsadda, Pakistan
              </p>
            </div>
          </div>
        </div>
        
        <ContactSocialLinks />
      </div>

      <ContactMap />
    </div>
  );
};

export default ContactInfo;
