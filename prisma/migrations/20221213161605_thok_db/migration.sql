/*
  Warnings:

  - You are about to drop the column `borders` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `colors` on the `User` table. All the data in the column will be lost.
  - Added the required column `fill` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outline` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "borders",
DROP COLUMN "colors",
ADD COLUMN     "fill" TEXT NOT NULL,
ADD COLUMN     "outline" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Borders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "color" TEXT NOT NULL,

    CONSTRAINT "Borders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colors" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "color" TEXT NOT NULL,

    CONSTRAINT "Colors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Borders" ADD CONSTRAINT "Borders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colors" ADD CONSTRAINT "Colors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
