/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Colors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Custom` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Exp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `TrainingPTs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Colors_userId_key" ON "Colors"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Custom_userId_key" ON "Custom"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Exp_userId_key" ON "Exp"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingPTs_userId_key" ON "TrainingPTs"("userId");
