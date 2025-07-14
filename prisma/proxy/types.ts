export type SortOrder = "asc" | "desc";

export type PaginationData = {
  page?: number;
  limit?: number;
  orderBy?: string;
  order?: "asc" | "desc";
  searchField?: string;
  searchOperator?: "contains" | "startsWith" | "endsWith" | "equals";
  searchValue?: string;
};

export type ProxyFunctions = {
  findMany: (params: unknown, pagination?: PaginationData) => Promise<any>;
  count: (params: unknown) => Promise<number>;
};
