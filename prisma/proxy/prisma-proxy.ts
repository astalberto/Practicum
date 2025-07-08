import { FindManyPaginated, makeFindManyPaginated } from "./find-many.proxy";
import { ProxyFunctions } from "./types";

/**
 * Tipo para un modelo Prisma extendido con métodos personalizados
 */
type ProxyPrismaModel<F extends ProxyFunctions> = F & FindManyPaginated<F>;

/**
 * Crea un modelo Prisma extendido con métodos personalizados
 */
export function ProxyPrismaModel<F extends ProxyFunctions>(
  model: F
): ProxyPrismaModel<F> {
  Reflect.set(model, "findManyPaginated", makeFindManyPaginated(model));
  return model as ProxyPrismaModel<F>;
}
