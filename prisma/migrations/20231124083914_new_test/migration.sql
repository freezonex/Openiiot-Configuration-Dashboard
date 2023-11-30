-- CreateTable
CREATE TABLE "Flow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "coreId" INTEGER NOT NULL,
    "dashboardId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Flow_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "Core" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flow_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FlowEdgeMap" (
    "flowId" INTEGER NOT NULL,
    "edgeId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("flowId", "edgeId"),
    CONSTRAINT "FlowEdgeMap_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "Flow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FlowEdgeMap_edgeId_fkey" FOREIGN KEY ("edgeId") REFERENCES "Edge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Edge" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL DEFAULT 'Nodered',
    "description" TEXT,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Core" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mqtt_url" TEXT NOT NULL,
    "tsdb_url" TEXT NOT NULL,
    "s3_url" TEXT
);

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grafana_url" TEXT NOT NULL,
    "odm_url" TEXT,
    "bi_url" TEXT
);
