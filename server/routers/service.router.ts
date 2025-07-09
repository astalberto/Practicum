import { t } from "../trpc";
import {
  createServiceSchema,
  getServiceSchema,
  updateServiceSchema,
  deleteServiceSchema,
} from "../schema/service.schema";
import {
  createService,
  getService,
  updateService,
  deleteService,
} from "../services/service.service";
import { paginationSchema } from "../schema/pagination.schema";
import { getAllServicePaginated } from "../services/service.service";

export const serviceRouter = t.router({
  createService: t.procedure
    .input(createServiceSchema)
    .mutation(async ({ input }) => createService(input)),

  getService: t.procedure
    .input(getServiceSchema)
    .query(async ({ input }) => getService(input)),

  updateService: t.procedure
    .input(updateServiceSchema)
    .mutation(async ({ input }) => updateService(input)),

  deleteService: t.procedure
    .input(deleteServiceSchema)
    .mutation(async ({ input }) => deleteService(input)),

  getAllServicePaginated: t.procedure
    .input(paginationSchema)
    .query(async ({ input }) => {
      return getAllServicePaginated(input);
    }),
});
