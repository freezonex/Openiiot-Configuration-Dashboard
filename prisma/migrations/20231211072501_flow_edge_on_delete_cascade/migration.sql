-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FlowEdgeMap" (
    "flowId" INTEGER NOT NULL,
    "edgeId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("flowId", "edgeId"),
    CONSTRAINT "FlowEdgeMap_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "Flow" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "FlowEdgeMap_edgeId_fkey" FOREIGN KEY ("edgeId") REFERENCES "Edge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FlowEdgeMap" ("assignedAt", "edgeId", "flowId") SELECT "assignedAt", "edgeId", "flowId" FROM "FlowEdgeMap";
DROP TABLE "FlowEdgeMap";
ALTER TABLE "new_FlowEdgeMap" RENAME TO "FlowEdgeMap";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
