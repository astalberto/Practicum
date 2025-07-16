import {
  createUserRepo,
  findUserByIdRepo,
  updateUserRepo,
  deleteUserRepo,
  getAllUserRepo,
} from "../repository/user.repository";
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  GetUserInput,
} from "../schema/user.schema";
import { PaginationSchemaInput } from "../schema/pagination.schema";

export const createUser = async (data: CreateUserInput) => {
  return createUserRepo(data);
};

export const getUser = async ({ id }: GetUserInput) => {
  return findUserByIdRepo(id);
};

export const updateUser = async (data: UpdateUserInput) => {
  return updateUserRepo(data.id, data);
};

export const deleteUser = async (data: DeleteUserInput) => {
  return deleteUserRepo(data.id);
};

export const getAllUserPaginated = async (input: PaginationSchemaInput) => {
  return getAllUserRepo(input);
};
