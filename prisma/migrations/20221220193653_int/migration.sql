/*
  Warnings:

  - Changed the type of `color` on the `Color10` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `color` on the `Color25` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `color` on the `Color50` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Color10" DROP COLUMN "color",
ADD COLUMN     "color" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Color25" DROP COLUMN "color",
ADD COLUMN     "color" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Color50" DROP COLUMN "color",
ADD COLUMN     "color" INTEGER NOT NULL;
