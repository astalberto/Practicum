import {
  createServiceRepo,
  findServiceByNameRepo,
  updateServiceRepo,
  deleteServiceRepo,
  getAllServiceRepo ,
} from "../repository/service.repository";
import { PaginationSchemaInput } from "../schema/pagination.schema";
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

export const getAllServicePaginated = async (input: PaginationSchemaInput) => {
  return getAllServiceRepo(input);
};
