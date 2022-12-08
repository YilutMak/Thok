-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "exp" INTEGER NOT NULL,
    "lv" INTEGER NOT NULL,
    "borders" TEXT NOT NULL,
    "colors" TEXT NOT NULL,
    "trainingPTs" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "punctuation" BOOLEAN NOT NULL,
    "number" BOOLEAN NOT NULL,
    "wpm" INTEGER NOT NULL,
    "acc" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "raw" INTEGER NOT NULL,
    "characters" INTEGER NOT NULL,
    "passage" TEXT NOT NULL,
    "error" TEXT NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "punctuation" BOOLEAN NOT NULL,
    "number" BOOLEAN NOT NULL,
    "wpm" INTEGER NOT NULL,
    "acc" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "raw" INTEGER NOT NULL,
    "characters" INTEGER NOT NULL,
    "passage" TEXT NOT NULL,
    "error" TEXT NOT NULL,

    CONSTRAINT "Trials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trials" ADD CONSTRAINT "Trials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
