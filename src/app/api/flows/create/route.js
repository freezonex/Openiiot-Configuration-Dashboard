import { NextResponse } from "next/server";
import prisma from "@/db";
//create a fow
export const POST = async (req) => {
  const { flowInfo, edgeInfo, coreInfo, dashboardInfo } = await req.json();

  try {
    const result = await prisma.flow.create({
      data: {
        name: flowInfo.name,
        description: flowInfo.description,
        edges: {
          create: edgeInfo.list.map((edge) => ({
            edge: {
              create: {
                type: edge.type,
                description: edge.description,
                url: edge.url,
              },
            },
          })),
        },
        core: coreInfo
          ? {
              create: {
                mqttUrl: coreInfo.mqtt_url,
                tsdbUrl: coreInfo.tsdb_url,
                s3Url: coreInfo.s3_url,
              },
            }
          : undefined,
        dashboard: dashboardInfo
          ? {
              create: {
                grafanaUrl: dashboardInfo.grafana_url,
                odmUrl: dashboardInfo.odm_url,
                biUrl: dashboardInfo.bi_url,
              },
            }
          : undefined,
      },
      include: {
        edges: {
          include: {
            edge: true,
          },
        },
        core: true,
        dashboard: true,
      },
    });
    return NextResponse.json({
      success: true,
      errorMessage: "flow created",
      data: result,
    });
  } catch (error) {
    console.error("Request error", error);
  }
};
