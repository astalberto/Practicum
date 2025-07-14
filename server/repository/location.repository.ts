import { prisma } from "./index";
import { ProxyPrismaModel } from "../../prisma/proxy/prisma-proxy";
import { Prisma, Ubicacion } from "@prisma/client";
import { PaginationData } from "../../prisma/proxy/types";

export const createUbicacionRepo = async (
  data: Prisma.UbicacionCreateInput,
): Promise<Ubicacion> => {
  return prisma.ubicacion.create({ data });
};

export const findUbicacionByIdRepo = async (
  id: number,
): Promise<Ubicacion | null> => {
  return prisma.ubicacion.findUnique({ where: { id } });
};

export const updateUbicacionRepo = async (
  id: number,
  data: Prisma.UbicacionUpdateInput,
): Promise<Ubicacion> => {
  return prisma.ubicacion.update({ where: { id }, data });
};

export const deleteUbicacionRepo = async (id: number) => {
  return prisma.ubicacion.delete({ where: { id } });
};

const UbicacionModel = ProxyPrismaModel({
  findMany: (params) => prisma.ubicacion.findMany(params as any),
  count: (params) => prisma.ubicacion.count(params as any),
});

export const getAllUbicacionRepo = async (
  pagination: PaginationData = {},
) => {
  return UbicacionModel.findManyPaginated({}, pagination);
}; 