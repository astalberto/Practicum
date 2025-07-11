import { z } from "zod";

export const paginationSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  orderBy: z.enum(["createdAt", "nombre"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
  searchField: z.enum(["createdAt", "nombre"]).optional(),
  searchOperator: z.enum(["contains", "startsWith", "endsWith", "equals"]).optional(),
  searchValue: z.string().optional(),
});

export type PaginationSchemaInput = z.infer<typeof paginationSchema>;
