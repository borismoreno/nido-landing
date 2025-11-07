import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { suscribirNewsletter } from '../lib/newsletterService';

export const server = {
    newsletter: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email('Correo inválido')
        }),
        handler: async ({ email }) => {
            const { success, message } = await suscribirNewsletter(email);
            return { success, message }
        }
    })
}