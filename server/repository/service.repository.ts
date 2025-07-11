import { prisma } from "./index";
import { ProxyPrismaModel } from "../../prisma/proxy/prisma-proxy";
import { Prisma, Servicio } from "@prisma/client";
import { PaginationData } from "../../prisma/proxy/types";

export const createServiceRepo = async (
  data: Prisma.ServicioCreateInput,
): Promise<Servicio> => {
  return prisma.servicio.create({
    data,
  });
};

export const findServiceByNameRepo = async (
  serviceName: string,
): Promise<Servicio | null> => {
  return prisma.servicio.findFirst({
    where: {
      nombre: {
        contains: serviceName,
      },
    },
  });
};

export const updateServiceRepo = async (
  id: string,
  data: Prisma.ServicioUpdateInput,
): Promise<Servicio> => {
  return prisma.servicio.update({
    where: { id },
    data,
  });
};

export const deleteServiceRepo = async (id: string) => {
  return prisma.servicio.delete({
    where: { id },
  });
};

const ServicioModel = ProxyPrismaModel({
  findMany: (params) => prisma.servicio.findMany(params as any),
  count: (params) => prisma.servicio.count(params as any),
});

export const getAllServiceRepo = async (
  pagination: PaginationData = {},
) => {
  return ServicioModel.findManyPaginated({}, pagination);
};

