import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente para server-side
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente para browser (maneja cookies automáticamente)
export const createClientBrowser = () =>
  createBrowserClient(supabaseUrl, supabaseAnonKey)
