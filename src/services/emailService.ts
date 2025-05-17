
import { supabase } from '@/integrations/supabase/client';

interface EmailParams {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail({ to, subject, body }: EmailParams) {
  try {
    console.log('Attempting to send email to:', to);
    
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
  
  // Create a detailed email body with all form data
  const formattedBody = `
    ===== NEW CONTACT FORM SUBMISSION =====
    
    SENDER INFORMATION:
    -------------------
    Name: ${name}
    Email: ${email}
    Phone: ${phone || 'Not provided'}
    
    MESSAGE DETAILS:
    ---------------
    Subject: ${subject}
    
    Message:
    ${message}
    
    -------------------
    Sent from: Website Contact Form
    Date: ${new Date().toLocaleString()}
  `;
  
  return {
    to: "ziaratwhite8@gmail.com", // Your email address
    subject: `Website Contact: ${subject}`,
    body: formattedBody
  };
}

// Helper function to create email content for callback request
export function createCallbackEmailContent(formData: {
  name: string;
  phone: string;
  inquiry: string;
}) {
  const { name, phone, inquiry } = formData;
  
  // Create a detailed email body with all form data
  const formattedBody = `
    ===== NEW CALLBACK REQUEST =====
    
    CALLER INFORMATION:
    ------------------
    Name: ${name}
    Phone: ${phone}
    
    INQUIRY DETAILS:
    ---------------
    ${inquiry}
    
    ------------------
    Sent from: Website Callback Form
    Date: ${new Date().toLocaleString()}
    
    IMPORTANT: This person has requested a callback from your website.
    Please call them as soon as possible.
  `;
  
  return {
    to: "ziaratwhite8@gmail.com", // Your email address
    subject: `URGENT: Callback Request from ${name}`,
    body: formattedBody
  };
}

// Added new helper function for the message dialog form
export function createMessageDialogEmailContent(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;
  
  // Create a detailed email body with all form data
  const formattedBody = `
    ===== NEW MESSAGE SUBMISSION =====
    
    SENDER INFORMATION:
    ------------------
    Name: ${name}
    Email: ${email}
    
    MESSAGE:
    -------
    ${message}
    
    ------------------
    Sent from: Website Message Dialog
    Date: ${new Date().toLocaleString()}
  `;
  
  return {
    to: "ziaratwhite8@gmail.com", // Your email address
    subject: `Website Message from ${name}`,
    body: formattedBody
  };
}
