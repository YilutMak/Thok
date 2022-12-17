-- CreateTable
CREATE TABLE "Exp" (
    "id" SERIAL NOT NULL,
    "exp" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Exp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingPTs" (
    "id" SERIAL NOT NULL,
    "trainingPts" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "TrainingPTs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Custom" (
    "id" SERIAL NOT NULL,
    "outline" TEXT NOT NULL,
    "fill" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Custom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exp" ADD CONSTRAINT "Exp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPTs" ADD CONSTRAINT "TrainingPTs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Custom" ADD CONSTRAINT "Custom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
