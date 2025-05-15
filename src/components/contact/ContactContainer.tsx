
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useToast } from "@/hooks/use-toast";

const ContactContainer = () => {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <ContactInfo />
      <ContactForm toast={toast} />
    </div>
  );
};

export default ContactContainer;
