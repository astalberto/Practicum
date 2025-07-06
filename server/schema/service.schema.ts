import { z } from "zod";

export const createServiceSchema = z.object({
  id: z.string().uuid().optional(),
  nombre: z.string(),
  descripcion: z.string(),
});

export type CreateServiceInput = z.infer<typeof createServiceSchema>;

export const getServiceSchema = z.object({
  nombre: z.string(),
});

export type GetServiceInput = z.infer<typeof getServiceSchema>;

export const updateServiceSchema = z.object({
  id: z.string().uuid(),
  nombre: z.string(),
  descripcion: z.string(),
});

export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;

export const deleteServiceSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteServiceInput = z.infer<typeof deleteServiceSchema>;

export const paginationSchema = z.object({
  page: z.number().min(1).optional(),
  limit: z.number().min(1).optional(),
});