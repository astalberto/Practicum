/*
  Warnings:

  - You are about to drop the column `contraseña` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `contrasena` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "contraseña",
ADD COLUMN     "contrasena" TEXT NOT NULL;
