import { supabase } from './supabaseClient'

export interface Contacto {
    nombre: string
    email: string
    mensaje: string
    empresa?: string
}

export async function guardarContacto({ nombre, email, mensaje, empresa }: Contacto) {
    try {
        if (!nombre || !email || !mensaje) {
            throw new Error('Todos los campos son obligatorios')
        }
        if (empresa) {
            throw new Error('Detección de bot')
        }

        const { error } = await supabase.from('contactos').insert([{ nombre, email, mensaje }])

        if (error) throw error

        return { success: true, message: 'Mensaje enviado correctamente 💌' }
    } catch (err) {
        console.error('Error al guardar contacto:', err)
        return { success: false, message: (err as Error).message }
    }
}
