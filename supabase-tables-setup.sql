
-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create table for message dialog submissions
CREATE TABLE IF NOT EXISTS message_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create table for callback request submissions
CREATE TABLE IF NOT EXISTS callback_requests (
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

-- Add anonymous access policies (if you want to allow form submissions without auth)
CREATE POLICY "Allow anonymous inserts" 
ON contact_submissions FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" 
ON message_submissions FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" 
ON callback_requests FOR INSERT 
TO anon 
WITH CHECK (true);
