
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextarea?: boolean;
  className?: string;
};

const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  isTextarea = false,
  className = "",
}: FormInputProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {isTextarea ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          className="border-gray-300 focus:border-gold-400 focus:ring-gold-400 min-h-[150px]"
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="border-gray-300 focus:border-gold-400 focus:ring-gold-400"
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormInput;
