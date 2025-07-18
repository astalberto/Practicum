import { createService } from "@services/service.service"
import { Servicio } from "@prisma/client";
import * as repo from "@db/repository/service.repository"



jest.mock("@db/repository/service.repository", () => ({
    createServiceRepo: jest.fn(),
}));

describe("createService", () => {
    const mockService: Servicio = {
        id: "1",
        nombre: "Test",
        descripcion: "Descripción de prueba",
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    it("Service Created Correclty", async () => {
        (repo.createServiceRepo as jest.Mock).mockResolvedValue(mockService);

        const input = { nombre: "Test", descripcion: "Descripción de prueba" };
        const result = await createService(input);

        expect(repo.createServiceRepo).toHaveBeenCalledWith(input);
        expect(result).toEqual(mockService);
    });
});