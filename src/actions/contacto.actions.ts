import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { guardarContacto } from '../lib/contactService';

export const contactoActions = {
    addContactoForm: defineAction({
        accept: 'form',
        input: z.object({
            nombre: z.string(),
            email: z.string().email(),
            mensaje: z.string()
        }),
        handler: async (input) => {
            return await guardarContacto(input)
        }
    })
}