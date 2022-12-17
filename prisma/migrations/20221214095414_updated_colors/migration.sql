/*
  Warnings:

  - You are about to drop the column `lv` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Borders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Borders" DROP CONSTRAINT "Borders_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lv";

-- DropTable
DROP TABLE "Borders";
