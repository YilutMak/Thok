/*
  Warnings:

  - You are about to drop the `Colors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Colors" DROP CONSTRAINT "Colors_userId_fkey";

-- DropTable
DROP TABLE "Colors";

-- CreateTable
CREATE TABLE "Color10" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Color10_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color25" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Color25_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color50" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Color50_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color10_userId_key" ON "Color10"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Color25_userId_key" ON "Color25"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Color50_userId_key" ON "Color50"("userId");

-- AddForeignKey
ALTER TABLE "Color10" ADD CONSTRAINT "Color10_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Color25" ADD CONSTRAINT "Color25_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Color50" ADD CONSTRAINT "Color50_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
