/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "coreId" INTEGER,
    "dashboardId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Flow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Flow_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "Core" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Flow_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Flow" ("coreId", "created_at", "dashboardId", "description", "id", "name", "userId") SELECT "coreId", "created_at", "dashboardId", "description", "id", "name", "userId" FROM "Flow";
UPDATE "new_Flow" SET "userId" = 1;
DROP TABLE "Flow";
ALTER TABLE "new_Flow" RENAME TO "Flow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
