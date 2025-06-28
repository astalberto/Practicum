import { PrismaClient } from "@prisma/client"
import { t } from "../trpc"
import { z } from 'zod';

export const prisma = new PrismaClient()
export const serviceRouter = t.router({
    createService: t.procedure
        .input(z.object({
            serviceId: z.string().uuid().optional(),
            serviceName: z.string(),
            serviceDescription: z.string(),
        }))
        .mutation(async ({ input }) => {
            const { serviceId, serviceName, serviceDescription } = input

            const newService = await prisma.servicio.create({
                data: {
                    // Si quieres forzar el id:
                    ...(serviceId ? { id: serviceId } : {}),
                    nombre: serviceName,
                    descripcion: serviceDescription,
                },
            })

            return newService
        }),
    returnService: t.procedure
        .input(z.object({
            serviceName: z.string()
        }))
        .query(async ({ input }) => {
            const { serviceName } = input
            const foundService = await prisma.servicio.findFirst({
                where: { nombre: { contains: serviceName } },
            })
            return foundService
        }),
    updateService: t.procedure
        .input(z.object({
            serviceName: z.string(),
            serviceId: z.string().uuid()
        }))
        .query(async ({ input }) => {
            const { serviceId, serviceName } = input
            const foundService = await prisma.servicio.update({
                where: { id: serviceId },
                data: { nombre: serviceName },
            })
            return foundService
        }),
    deleteService: t.procedure
        .input(z.object({
            serviceId: z.string().uuid()
        }))
        .query(async ({ input }) => {
            const { serviceId } = input
            const foundService = await prisma.servicio.delete({
                where: { id: serviceId },
            })
            return foundService
        }),
})