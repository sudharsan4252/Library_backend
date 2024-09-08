/*
  Warnings:

  - Made the column `createdAt` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Book_data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Book_data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `City` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `City` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Country` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Country` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `State` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `State` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Book_data" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Country" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "State" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
