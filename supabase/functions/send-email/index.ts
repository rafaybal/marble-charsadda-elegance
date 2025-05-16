
// Follow these steps to deploy this Edge Function:
// 1. Navigate to your Supabase project in the dashboard
// 2. Go to Edge Functions section
// 3. Create a new function named "send-email"
// 4. Copy and paste this code
// 5. Set up SMTP credentials in your Supabase secret variables

import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  
  try {
    const { to, subject, body } = await req.json();
    
    // Validate inputs
    if (!to || !subject || !body) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    // Get SMTP credentials from environment variables
    const smtpHost = Deno.env.get("SMTP_HOST") || "";
    const smtpPort = Number(Deno.env.get("SMTP_PORT") || "587");
    const smtpUsername = Deno.env.get("SMTP_USERNAME") || "";
    const smtpPassword = Deno.env.get("SMTP_PASSWORD") || "";
    const fromEmail = Deno.env.get("FROM_EMAIL") || "noreply@ziaratwhite.com";
    
    // Initialize SMTP client
    const client = new SmtpClient();
    
    // Connect to SMTP server
    await client.connectTLS({
      host: smtpHost,
      port: smtpPort,
      username: smtpUsername,
      password: smtpPassword,
    });
    
    // Send email
    await client.send({
      from: fromEmail,
      to: to,
      subject: subject,
      content: body,
    });
    
    // Close connection
    await client.close();
    
    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { 
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
    
  } catch (error) {
    console.error("Error sending email:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
