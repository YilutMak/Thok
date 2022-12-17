/*
  Warnings:

  - You are about to drop the column `raw` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the column `raw` on the `Trials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Training" DROP COLUMN "raw";

-- AlterTable
ALTER TABLE "Trials" DROP COLUMN "raw";
