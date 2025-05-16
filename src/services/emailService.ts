
import { supabase } from './supabaseService';

interface EmailParams {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail({ to, subject, body }: EmailParams) {
  try {
    // Check if Supabase is configured correctly
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase is not properly configured for email sending.');
      return { 
        success: false, 
        error: 'Email service not configured. Please check Supabase connection.' 
      };
    }

    // Call the Supabase Edge Function for sending emails
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: JSON.stringify({
        to,
        subject,
        body,
      }),
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Helper function to create email content for contact form
export function createContactEmailContent(formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const { name, email, phone, subject = 'New Contact Form Submission', message } = formData;
  
  return {
    to: "ziaratwhite8@gmail.com",
    subject: `Website Contact: ${subject}`,
    body: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
      
      This message was sent from your website contact form.
    `
  };
}

// Helper function to create email content for callback request
export function createCallbackEmailContent(formData: {
  name: string;
  phone: string;
  inquiry: string;
}) {
  const { name, phone, inquiry } = formData;
  
  return {
    to: "ziaratwhite8@gmail.com",
    subject: `Website Callback Request`,
    body: `
      Name: ${name}
      Phone: ${phone}
      
      Inquiry:
      ${inquiry}
      
      This person has requested a callback from your website.
    `
  };
}
