import { createClient } from '@supabase/supabase-js';

// The credentials will be provided via environment variables.
// If they are missing (e.g., during setup), we'll provide dummy values to prevent app crashes,
// but Supabase features will not work until real keys are provided.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
