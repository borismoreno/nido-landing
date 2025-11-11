import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { suscribirNewsletter } from '../lib/newsletterService';

export const newsLetterActions = {
    newsletter: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email('Correo inválido'),
            nombre: z.string().optional()
        }),
        handler: async ({ email, nombre }) => {
            const { success, message } = await suscribirNewsletter(email, nombre);
            return { success, message }
        }
    }),
}