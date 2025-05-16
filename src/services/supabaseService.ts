import { createClient } from '@supabase/supabase-js';

// Check if environment variables are available and provide fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate required configuration
if (!supabaseUrl) {
  console.error('Missing VITE_SUPABASE_URL environment variable. Please check your Supabase connection.');
}

if (!supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_ANON_KEY environment variable. Please check your Supabase connection.');
}

// Create Supabase client with validation
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co', // Placeholder to prevent hard crashes
  supabaseAnonKey || 'placeholder-key' // Placeholder to prevent hard crashes
);

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
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase is not properly configured. Please check your environment variables.');
    return { success: false, error: 'Database connection not configured' };
  }
  
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
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase is not properly configured. Please check your environment variables.');
    return { success: false, error: 'Database connection not configured' };
  }
  
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
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase is not properly configured. Please check your environment variables.');
    return { success: false, error: 'Database connection not configured' };
  }
  
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
