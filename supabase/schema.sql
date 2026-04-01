-- Edusonex B2B Platform Supabase Schema

-- 1. Create the `leads` table to store incoming contacts, demo requests, and PDF downloads
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    school_name TEXT,
    source TEXT NOT NULL, -- 'iletisim_whatsapp', 'rapor_indirimi', 'ai_demo' vb.
    status TEXT DEFAULT 'yeni', -- 'yeni', 'donus_yapildi', 'iptal'
    notes TEXT
);

-- 2. Setup Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous inserts (so website visitors can submit forms without logging in)
CREATE POLICY "Allow anonymous inserts to leads" ON public.leads
    FOR INSERT 
    WITH CHECK (true);

-- 4. Allow reading/updating ONLY for authenticated admins (you)
-- (Make sure to create an authenticated user in Supabase Authentication)
CREATE POLICY "Allow full access to authenticated admins" ON public.leads
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
