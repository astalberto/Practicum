import { t } from "../trpc"
import { z } from 'zod';

export const ratingsRouter = t.router({
  rateWorker: t.procedure
    .input(z.object({
      jobId: z.string(),
      clientId: z.string(),
      workerId: z.string(),
      score: z.number().min(1).max(5),
      comment: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      /*await ctx.db.calificacion_trabajador.create({
        data: {
          id: uuid(),
          trabajo_id: input.jobId,
          cliente_id: input.clientId,
          trabajador_id: input.workerId,
          puntuacion: input.score,
          comentario: input.comment,
          fecha: new Date()
        }
      });

      const avg = await ctx.db.calificacion_trabajador.aggregate({
        where: { trabajador_id: input.workerId },
        _avg: { puntuacion: true }
      });

      return ctx.db.trabajador.update({
        where: { id_usuario: input.workerId },
        data: { calificacion_promedio: avg._avg.puntuacion ?? 0 }
      });*/
    }),
})