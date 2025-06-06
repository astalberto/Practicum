import { t } from "../trpc"
import { z } from 'zod';

export const jobRouter = t.router({
    createJob: t.procedure
    .input(z.object({
      clientId: z.string(),
      serviceId: z.string(),
      description: z.string(),
      scheduledDate: z.string(),
      address: z.string(),
      estimatedCost: z.number()
    }))
    .mutation(({ input, ctx }) => {
      /*return ctx.db.trabajo.create({
        data: {
          id: uuid(),
          cliente_id: input.clientId,
          servicio_id: input.serviceId,
          descripcion: input.description,
          estado: 'PENDIENTE',
          fecha_solicitud: new Date(),
          fecha_programada: new Date(input.scheduledDate),
          direccion: input.address,
          costo_estimado: input.estimatedCost
        }
      });*/
    }),

  acceptJob: t.procedure
    .input(z.object({ jobId: z.string(), workerId: z.string() }))
    .mutation(({ input, ctx }) => {
      /*return ctx.db.trabajo.update({
        where: { id: input.jobId },
        data: {
          trabajador_id: input.workerId,
          estado: 'EN_PROGRESO'
        }
      });*/
    }),

  completeJob: t.procedure
    .input(z.object({ jobId: z.string() }))
    .mutation(({ input, ctx }) => {
      /*return ctx.db.trabajo.update({
        where: { id: input.jobId },
        data: { estado: 'COMPLETADO' }
      });*/
    }),

  cancelJob: t.procedure
    .input(z.object({ jobId: z.string() }))
    .mutation(({ input, ctx }) => {
      /*return ctx.db.trabajo.update({
        where: { id: input.jobId },
        data: { estado: 'CANCELADO' }
      });*/
    }),
})