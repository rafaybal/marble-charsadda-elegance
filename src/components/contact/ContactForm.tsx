
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";

type ContactFormProps = {
  toast: any; // Using any for now as the toast type is complex
};

const ContactForm = ({ toast }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Directly send email using the form data
      // This will show a native email client popup with the data pre-filled
      const mailtoLink = `mailto:ziaratwhite8@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
      )}`;
      
      // Log the data being sent
      console.log("Sending email with form data:", formData);
      
      // Open email client in the same window to prevent navigation away
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Email Client Opened",
        description: "Please complete sending the email in your email client.",
        duration: 5000,
      });
      
      // Reset form after short delay to ensure the mailto has time to open
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem opening your email client. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-marble-50 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            id="name"
            label="Name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <FormInput
          id="phone"
          label="Phone Number"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        
        <FormInput
          id="subject"
          label="Subject"
          placeholder="Message subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="message"
          label="Message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          isTextarea
        />
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="consent"
            className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
            required
          />
          <label htmlFor="consent" className="text-sm text-gray-500">
            I agree to the processing of my personal data in accordance with your privacy policy
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gold-400 hover:bg-gold-500 text-white py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
