import { createClient } from '@supabase/supabase-js'

// Compatibilidad SSR y cliente
const supabaseUrl =
    import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey =
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
    console.error('❌ Variable PUBLIC_SUPABASE_URL no está definida.')
}
if (!supabaseAnonKey) {
    console.error('❌ Variable PUBLIC_SUPABASE_ANON_KEY no está definida.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)