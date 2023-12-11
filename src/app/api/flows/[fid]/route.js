import { NextResponse } from "next/server";
import prisma from "@/db";

//GET an flow detail
export const GET = async (req, { params }) => {
  const { fid } = params;
  console.log(fid);
  const flow = await prisma.flow.findUnique({
    where: { id: Number(fid) },
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
    errorMessage: "get successful",
    data: flow,
  });
};

//Delete an flow
export const DELETE = async (req, { params }) => {
  const { fid } = params;
  await prisma.flowEdgeMap.deleteMany({
    where: { flowId: Number(fid) },
  });
  await prisma.flow.delete({
    where: { id: Number(fid) },
  });
  await prisma.edge.deleteMany({
    where: {
      belongsTo: {
        none: {},
      },
    },
  });
  await prisma.core.deleteMany({
    where: {
      belongsTo: {
        none: {},
      },
    },
  });
  await prisma.dashboard.deleteMany({
    where: {
      belongsTo: {
        none: {},
      },
    },
  });
  return NextResponse.json({
    success: true,
    errorMessage: "delete successful",
  });
};
