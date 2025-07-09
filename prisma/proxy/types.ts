export type SortOrder = "asc" | "desc";

export type PaginationData = {
  page?: number;
  limit?: number;
  orderBy?: Record<string, SortOrder>;
};

export type ProxyFunctions = {
  findMany: (params: unknown, pagination?: PaginationData) => Promise<any>;
  count: (params: unknown) => Promise<number>;
};
