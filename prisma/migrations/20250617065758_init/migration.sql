-- CreateTable
CREATE TABLE "tasks_table" (
    "id" TEXT NOT NULL,
    "task_title" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "task_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tasks_table_pkey" PRIMARY KEY ("id")
);
