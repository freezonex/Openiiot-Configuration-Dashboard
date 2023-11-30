-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coreId" INTEGER,
    "dashboardId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Flow_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "Core" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Flow_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Flow" ("coreId", "created_at", "dashboardId", "description", "id", "name") SELECT "coreId", "created_at", "dashboardId", "description", "id", "name" FROM "Flow";
DROP TABLE "Flow";
ALTER TABLE "new_Flow" RENAME TO "Flow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
