
export type PaginationData = {
  page?: number;
  limit?: number;
};


export type ProxyFunctions = {
  findMany: (params: unknown, pagination?: PaginationData) => Promise<any>;
  count: (params: unknown) => Promise<number>;
};
