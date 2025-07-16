import { prisma } from "./index";
import { ProxyPrismaModel } from "../../prisma/proxy/prisma-proxy"; 
import { Prisma, Usuario } from "@prisma/client";
import { PaginationData } from "../../prisma/proxy/types";

export const createUserRepo = async (
  data: Prisma.UsuarioCreateInput,
): Promise<Usuario> => {
  return prisma.usuario.create({ data });
};

export const findUserByIdRepo = async (
  id: number,
): Promise<Usuario | null> => {
  return prisma.usuario.findUnique({ where: { id } });
};

export const updateUserRepo = async (
  id: number,
  data: Prisma.UsuarioUpdateInput,
): Promise<Usuario> => {
  return prisma.usuario.update({ where: { id }, data });
};

export const deleteUserRepo = async (id: number) => {
  return prisma.usuario.delete({ where: { id } });
};

const UsuarioModel = ProxyPrismaModel({
  findMany: (params) => prisma.usuario.findMany(params as any),
  count: (params) => prisma.usuario.count(params as any),
});

export const getAllUserRepo = async (
  pagination: PaginationData = {},
) => {
  return UsuarioModel.findManyPaginated({}, pagination);
};
