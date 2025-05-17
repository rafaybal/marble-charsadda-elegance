
import { createClient } from '@supabase/supabase-js';
import { supabase as configuredSupabase } from "@/integrations/supabase/client";

export const supabase = configuredSupabase;

// Type definitions for our form data
export interface ContactFormData {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface MessageFormData {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface CallbackFormData {
  id?: number;
  name: string;
  phone: string;
  inquiry: string;
  created_at?: string;
}

// Store contact form submission in database
export async function submitContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ 
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject,
        message: formData.message,
        created_at: new Date().toISOString()
      }]);
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}

// Store message form submission
export async function submitMessageForm(formData: MessageFormData) {
  try {
    const { data, error } = await supabase
      .from('message_submissions')
      .insert([{ 
        name: formData.name,
        email: formData.email,
        message: formData.message,
        created_at: new Date().toISOString()
      }]);
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting message form:', error);
    return { success: false, error };
  }
}

// Store callback request form submission
export async function submitCallbackForm(formData: CallbackFormData) {
  try {
    const { data, error } = await supabase
      .from('callback_requests')
      .insert([{ 
        name: formData.name,
        phone: formData.phone,
        inquiry: formData.inquiry,
        created_at: new Date().toISOString()
      }]);
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting callback form:', error);
    return { success: false, error };
  }
}
