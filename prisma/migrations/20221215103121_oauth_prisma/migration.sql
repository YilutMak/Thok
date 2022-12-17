/*
  Warnings:

  - You are about to drop the column `exp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fill` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `outline` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `trainingPTs` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "exp",
DROP COLUMN "fill",
DROP COLUMN "outline",
DROP COLUMN "trainingPTs";
