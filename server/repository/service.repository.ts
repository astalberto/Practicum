import { prisma } from "./index";

export const createServiceRepo = async (data: {
  id?: string;
  nombre: string;
  descripcion: string;
}) => {
  return prisma.servicio.create({
    data: {
      ...(data.id ? { id: data.id } : {}),
      nombre: data.nombre,
      descripcion: data.descripcion,
    },
  });
};

export const findServiceByNameRepo = async (serviceName: string) => {
  return prisma.servicio.findFirst({
    where: { nombre: { contains: serviceName } },
  });
};

export const updateServiceRepo = async (id: string, nombre: string) => {
  return prisma.servicio.update({
    where: { id },
    data: { nombre },
  });
};

export const deleteServiceRepo = async (id: string) => {
  return prisma.servicio.delete({
    where: { id },
  });
};
export const getAllServiceRepo = async () => {
  return prisma.servicio.findMany()
};
