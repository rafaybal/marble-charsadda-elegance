
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
// Provide dummy values for development when env vars are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Check if we're using real or placeholder values
const usingPlaceholderValues = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;
if (usingPlaceholderValues) {
  console.warn(
    'Using placeholder Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY ' +
    'environment variables in your Lovable project settings. Forms and emails will not work until this is configured.'
  );
}

// Create Supabase client with provided or dummy values to prevent runtime errors
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  if (usingPlaceholderValues) {
    console.warn('Supabase is not properly configured. Form data will not be stored.');
    return { 
      success: false, 
      error: 'Database connection not configured. Please set up Supabase environment variables.' 
    };
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
  if (usingPlaceholderValues) {
    console.warn('Supabase is not properly configured. Form data will not be stored.');
    return { 
      success: false, 
      error: 'Database connection not configured. Please set up Supabase environment variables.' 
    };
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
  if (usingPlaceholderValues) {
    console.warn('Supabase is not properly configured. Form data will not be stored.');
    return { 
      success: false, 
      error: 'Database connection not configured. Please set up Supabase environment variables.' 
    };
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
