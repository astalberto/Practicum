/*
  Warnings:

  - You are about to drop the column `trabajadorId` on the `Servicio` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_trabajadorId_fkey";

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "trabajadorId";

-- CreateTable
CREATE TABLE "_TrabajadorServicios" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TrabajadorServicios_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TrabajadorServicios_B_index" ON "_TrabajadorServicios"("B");

-- AddForeignKey
ALTER TABLE "_TrabajadorServicios" ADD CONSTRAINT "_TrabajadorServicios_A_fkey" FOREIGN KEY ("A") REFERENCES "Servicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrabajadorServicios" ADD CONSTRAINT "_TrabajadorServicios_B_fkey" FOREIGN KEY ("B") REFERENCES "Trabajador"("id") ON DELETE CASCADE ON UPDATE CASCADE;
