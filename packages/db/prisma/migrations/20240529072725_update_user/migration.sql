/*
  Warnings:

  - Added the required column `Authtype` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('GOOGLE', 'CREDENTIALS');

-- CreateEnum
CREATE TYPE "Accounts" AS ENUM ('Student', 'Instructor', 'Admin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "AccountType" "Accounts" NOT NULL DEFAULT 'Student',
ADD COLUMN     "Authtype" "AuthProvider" NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
