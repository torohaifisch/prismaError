-- CreateTable
CREATE TABLE "Observation" (
    "observationId" SERIAL NOT NULL,
    "text" VARCHAR(1000) NOT NULL,

    CONSTRAINT "Observation_pkey" PRIMARY KEY ("observationId")
);
