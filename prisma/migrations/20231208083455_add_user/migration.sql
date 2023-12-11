/*
  Warnings:

  - Added the required column `userId` to the `Flow` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

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
    CONSTRAINT "Flow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flow_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "Core" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Flow_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "User" ("name", "role") VALUES ('hongzhi', 'admin');
SELECT last_insert_rowid();
INSERT INTO "new_Flow" ("userId", "coreId", "created_at", "dashboardId", "description", "id", "name") SELECT last_insert_rowid(), "coreId", "created_at", "dashboardId", "description", "id", "name" FROM "Flow";
UPDATE "new_Flow" SET "userId" = 0;
DROP TABLE "Flow";
ALTER TABLE "new_Flow" RENAME TO "Flow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
