import { t } from "../trpc"
import { z } from 'zod';

export const userRouter = t.router({
    UpdateUser: t.procedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      phone: z.string()
    }))
    .mutation(({ input, ctx }) => {
      /*return ctx.db.usuario.update({
        where: { id: input.id },
        data: {
          nombre: input.name,
          correo: input.email,
          contraseña: input.password,
          telefono: input.phone
        }
      });*/
    }),
});
