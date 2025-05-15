
import React from "react";
import { LucideIcon } from "lucide-react";

type ContactInfoItemProps = {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
};

const ContactInfoItem = ({ icon: Icon, label, children }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center mr-4">
        <Icon className="h-5 w-5 text-gold-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoItem;
