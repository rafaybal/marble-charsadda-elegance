
import { supabase } from './supabaseService';

interface EmailParams {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail({ to, subject, body }: EmailParams) {
  try {
    console.log('Attempting to send email to:', to);
    
    // Check if Supabase is configured correctly
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase is not properly configured. Emails will not be sent until environment variables are set.');
      return { 
        success: false, 
        error: 'Email service not configured. Please set up Supabase environment variables.' 
      };
    }

    // Log the attempt with more details
    console.log('Invoking send-email edge function with params:', { to, subject });
    
    // Call the Supabase Edge Function for sending emails
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: JSON.stringify({
        to,
        subject,
        body,
      }),
    });

    if (error) {
      console.error('Error from send-email function:', error);
      throw error;
    }
    
    console.log('Email sent successfully, response:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error sending email'
    };
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
    to: "ziaratwhite8@gmail.com", // Your email address
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
    to: "ziaratwhite8@gmail.com", // Your email address
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
