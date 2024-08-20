-- CreateTable
CREATE TABLE "Objective" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT,
    "priority" TEXT NOT NULL DEFAULT 'low',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);
