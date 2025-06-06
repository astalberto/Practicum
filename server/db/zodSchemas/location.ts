import { z } from 'zod';

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