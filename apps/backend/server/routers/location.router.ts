import { t } from "../trpc";
import {
  createUbicacionSchema,
  getUbicacionSchema,
  updateUbicacionSchema,
  deleteUbicacionSchema,
} from "@schema/location.schema"; 
import { paginationSchema } from "@schema/pagination.schema";
import {
  createUbicacion,
  getUbicacion,
  updateUbicacion,
  deleteUbicacion,
  getAllUbicacionPaginated,
} from "@services/location.service"; 

export const locationRouter = t.router({
  createUbicacion: t.procedure
    .input(createUbicacionSchema)
    .mutation(async ({ input }) => createUbicacion(input)),

  getUbicacion: t.procedure
    .input(getUbicacionSchema)
    .query(async ({ input }) => getUbicacion(input)),

  updateUbicacion: t.procedure
    .input(updateUbicacionSchema)
    .mutation(async ({ input }) => updateUbicacion(input)),

  deleteUbicacion: t.procedure
    .input(deleteUbicacionSchema)
    .mutation(async ({ input }) => deleteUbicacion(input)),

  getAllUbicacionPaginated: t.procedure
    .input(paginationSchema)
    .query(async ({ input }) => getAllUbicacionPaginated(input)),
}); 