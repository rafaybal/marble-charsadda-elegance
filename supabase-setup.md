
# Supabase Setup Guide for Ziarat White Website

## Database Tables Setup

Run these SQL queries in the Supabase SQL Editor to create the necessary tables:

```sql
-- Create table for contact form submissions
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create table for message dialog submissions
CREATE TABLE message_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create table for callback request submissions
CREATE TABLE callback_requests (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  inquiry TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create RLS policies to secure your tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE message_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE callback_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated inserts to all tables
CREATE POLICY "Allow authenticated inserts" 
ON contact_submissions FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts" 
ON message_submissions FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts" 
ON callback_requests FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Policy to allow authenticated reads from all tables
CREATE POLICY "Allow authenticated reads" 
ON contact_submissions FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated reads" 
ON message_submissions FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated reads" 
ON callback_requests FOR SELECT 
TO authenticated 
USING (true);
```

## Environment Variables Setup

1. In your Lovable project settings, set the following environment variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase project's anon/public key

2. In your Supabase project, set up the following secrets for the Edge Function:
   - `SMTP_HOST`: Your SMTP server hostname (e.g., smtp.gmail.com)
   - `SMTP_PORT`: Your SMTP server port (typically 587 for TLS)
   - `SMTP_USERNAME`: Your SMTP username/email
   - `SMTP_PASSWORD`: Your SMTP password or app password
   - `FROM_EMAIL`: The email address to send from (e.g., no-reply@ziaratwhite.com)

## Edge Function Deployment

1. Navigate to the Edge Functions section in your Supabase dashboard
2. Create a new function named "send-email"
3. Copy the code from `supabase/functions/send-email/index.ts` and deploy it
4. Test the function to ensure it works correctly

## Additional Notes

- For Gmail, you'll need to use an App Password instead of your regular password
- Make sure your SMTP provider allows sending emails from your application
- For production, consider using a transactional email service like SendGrid, Mailgun, or Amazon SES
- Ensure your Supabase project has enough credits for Edge Function execution
