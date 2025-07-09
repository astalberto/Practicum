import { z } from "zod";

export const paginationSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  orderBy: z
    .object({
      id: z.enum(["asc", "desc"]).optional(),
      nombre: z.enum(["asc", "desc"]).optional(),
      createdAt: z.enum(["asc", "desc"]).optional(),
    })
    .optional(), 
});

export type PaginationSchemaInput = z.infer<typeof paginationSchema>;
