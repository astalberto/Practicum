import { z } from "zod";

export const createServiceSchema = z.object({
  serviceId: z.string().uuid().optional(),
  serviceName: z.string(),
  serviceDescription: z.string(),
});

export const getServiceSchema = z.object({
  serviceName: z.string(),
});

export const updateServiceSchema = z.object({
  serviceId: z.string().uuid(),
  serviceName: z.string(),
});

export const deleteServiceSchema = z.object({
  serviceId: z.string().uuid(),
});
