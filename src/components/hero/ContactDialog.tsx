
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ContactDialogProps {
  showDialog: boolean;
  setShowDialog: (show: boolean) => void;
  contactForm: {
    name: string;
    phone: string;
    inquiry: string;
  };
  handleContactChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
}

const ContactDialog = ({
  showDialog,
  setShowDialog,
  contactForm,
  handleContactChange,
  handleContactSubmit
}: ContactDialogProps) => {
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">Contact Us</DialogTitle>
          <DialogDescription>
            Leave your details and we'll call you back shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input 
                id="contact-name" 
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                placeholder="Your name" 
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel"
                value={contactForm.phone}
                onChange={handleContactChange}
                placeholder="Your phone number" 
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="inquiry">Inquiry Type</Label>
              <Textarea 
                id="inquiry" 
                name="inquiry"
                value={contactForm.inquiry}
                onChange={handleContactChange}
                placeholder="What would you like to know about our products?" 
                className="min-h-[80px]"
                required
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-gold-500 hover:bg-gold-600">
              Request Call Back
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
