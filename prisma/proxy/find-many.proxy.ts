import { Paginated } from "../../server/utils/paginated";
import { PaginationData, ProxyFunctions } from "./types";

const dateFields = ["createdAt", "updatedAt", "fecha"];

export type FindManyPaginated<F extends ProxyFunctions> = {
  findManyPaginated: (
    data?: Omit<Parameters<F["findMany"]>[0], "take" | "skip">,
    pagination?: PaginationData
  ) => Promise<Paginated<Awaited<ReturnType<F["findMany"]>>[0]>>;
};

export function makeFindManyPaginated(model: ProxyFunctions) {
  return new Proxy(model.findMany, {
    apply: async (target, thisArg, [data, paginationInfo]) => {
      const page = paginationInfo?.page ?? 1;
      const limit = paginationInfo?.limit ?? 10;

      const searchField = (paginationInfo as any)?.searchField?.trim();
      const searchValue = (paginationInfo as any)?.searchValue?.trim();
      const searchOperator = (paginationInfo as any)?.searchOperator ?? "contains";

      const orderBy = (paginationInfo as any)?.orderBy;
      const order = (paginationInfo as any)?.order;

      const query = {
        ...(data || {}),
        take: limit === 0 ? undefined : limit,
        skip: limit === 0 ? undefined : (page - 1) * limit,
      };

      if (orderBy && order) {
        query.orderBy = [{ [orderBy]: order }];
      }

      if (searchField && searchValue) {
        query.where = {
          ...(query.where || {}),
          [searchField]: {
            [searchOperator]: searchValue,
          },
        };
        if (dateFields.includes(searchField)) {
          // Si es campo de tipo fecha, se busca por año
          const year = parseInt(searchValue);
          if (!isNaN(year)) {
            query.where[searchField] = {
              gte: new Date(`${year}-01-01T00:00:00.000Z`),
              lt: new Date(`${year + 1}-01-01T00:00:00.000Z`),
            };
          }
        } else {
          // Si es campo tipo texto
          query.where[searchField] = {
            [searchOperator]: searchValue,
            mode: "insensitive",
          };
        }
      }

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