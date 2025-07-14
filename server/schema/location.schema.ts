import { z } from "zod";

export const zLocation = z.object({
  ciudad: z.string(),
  provincia: z.string(),
  calle1: z.string(),
  calle2: z.string(),
  numeroCasa: z.string(),
  referencia: z.string(),
  latitud: z.number(),
  longitud: z.number()
});

export const createUbicacionSchema = z.object({
  latitud: z.number(),
  longitud: z.number(),
  numeroCasa: z.string(),
  referencia: z.string(),
  calle1: z.string(),
  calle2: z.string(),
  provincia: z.string(),
  ciudad: z.string(),
});
export type CreateUbicacionInput = z.infer<typeof createUbicacionSchema>;

export const getUbicacionSchema = z.object({
  id: z.number().int(),
});
export type GetUbicacionInput = z.infer<typeof getUbicacionSchema>;

export const updateUbicacionSchema = z.object({
  id: z.number().int(),
  latitud: z.number(),
  longitud: z.number(),
  numeroCasa: z.string(),
  referencia: z.string(),
  calle1: z.string(),
  calle2: z.string(),
  provincia: z.string(),
  ciudad: z.string(),
});
export type UpdateUbicacionInput = z.infer<typeof updateUbicacionSchema>;

export const deleteUbicacionSchema = z.object({
  id: z.number().int(),
});
export type DeleteUbicacionInput = z.infer<typeof deleteUbicacionSchema>; 