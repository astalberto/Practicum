import { t } from "../trpc";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  deleteUserSchema,
} from "@schema/user.schema";
import { paginationSchema } from "@schema/pagination.schema";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUserPaginated,
} from "@services/user.service";

export const userRouter = t.router({
  createUser: t.procedure
    .input(createUserSchema)
    .mutation(async ({ input }) => createUser(input)),

  getUser: t.procedure
    .input(getUserSchema)
    .query(async ({ input }) => getUser(input)),

  updateUser: t.procedure
    .input(updateUserSchema)
    .mutation(async ({ input }) => updateUser(input)),

  deleteUser: t.procedure
    .input(deleteUserSchema)
    .mutation(async ({ input }) => deleteUser(input)),

  getAllUserPaginated: t.procedure
    .input(paginationSchema)
    .query(async ({ input }) => getAllUserPaginated(input)),
});
