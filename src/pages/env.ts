import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
            PUBLIC_SUPABASE_ANON_KEY: !!process.env.PUBLIC_SUPABASE_ANON_KEY,
        }),
        { headers: { 'Content-Type': 'application/json' } }
    );
};