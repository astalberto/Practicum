import { z } from 'zod';

export const createUserSchema = z.object({
  nombre: z.string(),
  correo: z.string().email(),
  contrasena: z.string(),
  tipo: z.enum(['CLIENTE', 'TRABAJADOR']).optional(),
  telefono: z.string(),
});
export type CreateUserInput = z.infer<typeof createUserSchema>;

export const getUserSchema = z.object({
  id: z.number().int(),
});
export type GetUserInput = z.infer<typeof getUserSchema>;

export const updateUserSchema = z.object({
  id: z.number().int(),
  nombre: z.string(),
  correo: z.string().email(),
  contrasena: z.string(),
  tipo: z.enum(['CLIENTE', 'TRABAJADOR']).optional(),
  telefono: z.string(),
});
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export const deleteUserSchema = z.object({
  id: z.number().int(),
});
export type DeleteUserInput = z.infer<typeof deleteUserSchema>;
