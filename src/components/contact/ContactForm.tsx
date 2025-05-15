
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      // Send form data through a server-side endpoint
      // This uses the browser's built-in mailto functionality as a fallback
      // In a production environment, you would use a proper email service
      
      const mailtoLink = `mailto:fayazkhan@hotmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
      )}`;
      
      // Log the data being sent
      console.log("Sending email with form data:", formData);
      
      // Open the default email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      toast({
        title: "Message Action Required",
        description: "Please send the email that opened in your email client to complete the process.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-marble-50 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input 
              id="name" 
              placeholder="Your name" 
              className="border-gray-300 focus:border-gold-400 focus:ring-gold-400"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Your email" 
              className="border-gray-300 focus:border-gold-400 focus:ring-gold-400"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
          <Input 
            id="phone" 
            placeholder="Your phone number" 
            className="border-gray-300 focus:border-gold-400 focus:ring-gold-400"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <Input 
            id="subject" 
            placeholder="Message subject" 
            className="border-gray-300 focus:border-gold-400 focus:ring-gold-400"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <Textarea 
            id="message" 
            placeholder="Your message" 
            className="border-gray-300 focus:border-gold-400 focus:ring-gold-400 min-h-[150px]"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        
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
