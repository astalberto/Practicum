import {
  createServiceRepo,
  findServiceByNameRepo,
  updateServiceRepo,
  deleteServiceRepo,
  getAllServiceRepo,
} from "../repository/service.repository";
import { PaginationData } from "../../prisma/proxy/types";
import { CreateServiceInput, UpdateServiceInput, DeleteServiceInput } from "../schema/service.schema";

export const createService = async (data: CreateServiceInput) => {
  return createServiceRepo(data);
};

export const getService = async ({ nombre }: { nombre: string }) => {
  return findServiceByNameRepo(nombre);
};


export const updateService = async (data: UpdateServiceInput) => {
  return updateServiceRepo(data.id, {
    nombre: data.nombre,
    descripcion: data.descripcion,
  });
};

export const deleteService = async (data: DeleteServiceInput) => {
  return deleteServiceRepo(data.id);
};

export const getAllService = async (pagination: PaginationData) => {
  return getAllServiceRepo(pagination);
};

