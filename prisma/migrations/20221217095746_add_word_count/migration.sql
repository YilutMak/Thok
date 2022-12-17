/*
  Warnings:

  - Added the required column `wordCount` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wordCount` to the `Trials` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `acc` on the `Trials` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Trials` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "wordCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trials" ADD COLUMN     "wordCount" INTEGER NOT NULL,
DROP COLUMN "acc",
ADD COLUMN     "acc" DOUBLE PRECISION NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;
