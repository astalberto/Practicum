import {
  createServiceRepo,
  findServiceByNameRepo,
  updateServiceRepo,
  deleteServiceRepo,
  getAllServiceRepo,
} from "../repository/service.repository";

export const createService = async ({
  serviceId,
  serviceName,
  serviceDescription,
}: {
  serviceId?: string;
  serviceName: string;
  serviceDescription: string;
}) => {
  return createServiceRepo({
    id: serviceId,
    nombre: serviceName,
    descripcion: serviceDescription,
  });
};

export const getService = async (serviceName: string) => {
  return findServiceByNameRepo(serviceName);
};

export const updateService = async ({
  serviceId,
  serviceName,
}: {
  serviceId: string;
  serviceName: string;
}) => {
  return updateServiceRepo(serviceId, serviceName);
};

export const deleteService = async (serviceId: string) => {
  return deleteServiceRepo(serviceId);
};
export const getAllService = async() => {
  return getAllServiceRepo();
};
