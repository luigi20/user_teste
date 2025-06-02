/*
  Warnings:

  - You are about to drop the column `dataEHora` on the `users` table. All the data in the column will be lost.
  - Added the required column `data` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "dataEHora",
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;
