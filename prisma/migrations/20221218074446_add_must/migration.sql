/*
  Warnings:

  - Made the column `userId` on table `Exp` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exp" DROP CONSTRAINT "Exp_userId_fkey";

-- AlterTable
ALTER TABLE "Exp" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Exp" ADD CONSTRAINT "Exp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
