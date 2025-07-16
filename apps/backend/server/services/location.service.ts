import {
    createUbicacionRepo,
    findUbicacionByIdRepo,
    updateUbicacionRepo,
    deleteUbicacionRepo,
    getAllUbicacionRepo,
  } from "../repository/location.repository";
  import {
    CreateUbicacionInput,
    UpdateUbicacionInput,
    DeleteUbicacionInput,
    GetUbicacionInput,
  } from "../schema/location.schema";
import { PaginationSchemaInput } from "../schema/pagination.schema";
  
  export const createUbicacion = async (data: CreateUbicacionInput) => {
    return createUbicacionRepo(data);
  };
  
  export const getUbicacion = async ({ id }: GetUbicacionInput) => {
    return findUbicacionByIdRepo(id);
  };
  
  export const updateUbicacion = async (data: UpdateUbicacionInput) => {
    return updateUbicacionRepo(data.id, data);
  };
  
  export const deleteUbicacion = async (data: DeleteUbicacionInput) => {
    return deleteUbicacionRepo(data.id);
  };
  
  export const getAllUbicacionPaginated = async (input: PaginationSchemaInput) => {
    return getAllUbicacionRepo(input);
  }; 