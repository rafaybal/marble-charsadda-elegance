
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
  console.log("Received request to send-email function");
  
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  
  try {
    const { to, subject, body } = await req.json();
    
    console.log(`Processing email request to: ${to}, subject: ${subject}`);
    
    // Validate inputs
    if (!to || !subject || !body) {
      console.error("Missing required fields");
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
    
    console.log(`SMTP Configuration: Host: ${smtpHost}, Port: ${smtpPort}, From: ${fromEmail}, Username: ${smtpUsername.substring(0, 3)}...`);
    
    if (!smtpHost || !smtpUsername || !smtpPassword) {
      console.error("Missing SMTP configuration");
      return new Response(
        JSON.stringify({ 
          error: "Email server not configured properly. Check Supabase secrets.",
          details: "Make sure SMTP_HOST, SMTP_USERNAME, and SMTP_PASSWORD are set in Supabase secrets."
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }
    
    // Initialize SMTP client
    const client = new SmtpClient();
    
    console.log("Connecting to SMTP server...");
    try {
      // Connect to SMTP server with detailed error handling
      await client.connectTLS({
        host: smtpHost,
        port: smtpPort,
        username: smtpUsername,
        password: smtpPassword,
      });
    } catch (connectError) {
      console.error("SMTP connection error:", connectError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to connect to SMTP server",
          details: connectError.message
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }
    
    console.log("Sending email...");
    try {
      // Send email
      await client.send({
        from: fromEmail,
        to: to,
        subject: subject,
        content: body,
      });
    } catch (sendError) {
      console.error("Email sending error:", sendError);
      await client.close();
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email",
          details: sendError.message
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }
    
    console.log("Closing SMTP connection");
    // Close connection
    await client.close();
    
    console.log("Email sent successfully");
    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { 
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
    
  } catch (error) {
    console.error("Error in send-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email",
        stack: error.stack || "No stack trace available"
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
