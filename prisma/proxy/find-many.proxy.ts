import { Paginated } from "../../server/utils/paginated";// puedes moverlo o definirlo tú
import { PaginationData, ProxyFunctions } from "./types";

/**
 * Tipo del método findManyPaginated
 */
export type FindManyPaginated<F extends ProxyFunctions> = {
  findManyPaginated: (
    data?: Omit<Parameters<F["findMany"]>[0], "take" | "skip">,
    pagination?: PaginationData
  ) => Promise<Paginated<Awaited<ReturnType<F["findMany"]>>[0]>>;
};

/**
 * Crea el método findManyPaginated para un modelo Prisma
 */
export function makeFindManyPaginated(model: ProxyFunctions) {
  return new Proxy(model.findMany, {
    apply: async (target, thisArg, [data, paginationInfo]) => {
      const page = paginationInfo?.page ?? 1;
      const limit = paginationInfo?.limit ?? 10;

      const query = {
        ...(data || {}),
        take: limit === 0 ? undefined : limit,
        skip: limit === 0 ? undefined : (page - 1) * limit,
      };

      const [total, docs] = await Promise.all([
        model.count({ where: query.where }),
        target.apply(thisArg, [query]),
      ]);

      const totalPages = Math.ceil(total / limit);

      return {
        data: docs,
        total,
        limit,
        page,
        totalPages: totalPages === Infinity ? 1 : totalPages,
      };
    },
  });
}
