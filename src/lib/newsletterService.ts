import { supabase } from "./supabaseClient";

export async function suscribirNewsletter(email: string) {
    try {
        if (!email) throw new Error('El correo electrónico es obligatorio')

        // 🚀 Insertar el registro
        const { error } = await supabase.from('newsletter').insert([{ email }])

        if (error) {
            // Error de duplicado (correo ya registrado)
            if (error.code === '23505') {
                throw new Error('Este correo ya está suscrito 💌')
            }
            throw error
        }

        return { success: true, message: '¡Gracias por suscribirte a MiNido!' }
    } catch (err) {
        console.error('Error al suscribirse:', err)
        return { success: false, message: (err as Error).message }
    }
}