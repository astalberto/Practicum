import { TRPCError } from "@trpc/server";
import { t } from "../trpc"
import { z } from 'zod';

export const authRouter = t.router({
  signUp: t.procedure
    .input(z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      phone: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      return ({ //ctx.db.usuario.create()
        data: {
          id: '1',//dato temporal hasta que la base de datos se establesca,
          nombre: input.name,
          correo: input.email,
          contraseña: input.password,
          tipo: 'CLIENTE',
          telefono: input.phone
        }
      });
    }),
  signIn: t.procedure
    .input(z.object({
      email: z.string().email(),
      password: z.string()
    }))
    .query(async ({ input, ctx }) => {
      return /*ctx.db.usuario.findFirst({
        where: {
          correo: input.email,
          contraseña: input.password
        }
      });*/
    }),

})