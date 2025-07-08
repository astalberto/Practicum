import { zLocation } from "../schema/location.schema";
import { t } from "../trpc"
import { z } from 'zod';

export const workerRouter = t.router({
    registerAsWorker: t.procedure
        .input(z.object({
      userId: z.string(),
      bio: z.string(),
       location: zLocation, //objeto de tipo ubicacion/Location
      skills: z.array(z.string())
    }))
    .mutation(async ({ input, ctx }) => {
      /*const location = await ctx.db.ubicacion.create({
        data: { id: uuid(), ...input.location }
      });*/

      /*const worker = await ctx.db.trabajador.create({
        data: {
          id_usuario: input.userId,
          biografia: input.bio,
          disponibilidad: true,
          id_ubicacion: location.id
        }
      });*/

      /*await ctx.db.trabajador_servicio.createMany({
        data: input.skills.map(serviceId => ({
          id_trabajador: worker.id_usuario,
          id_servicio: serviceId
        }))
      });*/

      return /*worker*/"Trabajador registrado";
    }),
    updateWorker: t.procedure
    .input(z.object({
      userId: z.string(),
      bio: z.string(),
      availability: z.boolean(),
      locationId: z.string(),
      newSkills: z.array(z.string())
    }))
    .mutation(async ({ input, ctx }) => {
        /*
      await ctx.db.trabajador.update({
        where: { id_usuario: input.userId },
        data: {
          biografia: input.bio,
          disponibilidad: input.availability,
          id_ubicacion: input.locationId
        }
      });

      await ctx.db.trabajador_servicio.deleteMany({
        where: { id_trabajador: input.userId }
      });

      return ctx.db.trabajador_servicio.createMany({
        data: input.newSkills.map(id => ({
          id_trabajador: input.userId,
          id_servicio: id
        }))
      });*/
    }),
})