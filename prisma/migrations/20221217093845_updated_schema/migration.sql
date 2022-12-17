/*
  Warnings:

  - Changed the type of `acc` on the `Training` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Training` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Training" DROP COLUMN "acc",
ADD COLUMN     "acc" INTEGER NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;
