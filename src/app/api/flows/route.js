import { NextResponse } from "next/server";
import prisma from "@/db";
//Get all the flows
export const GET = async () => {
  const data = await prisma.flow.findMany({
    include: {
      _count: {
        select: {
          edges: true,
        },
      },
      core: true,
      dashboard: true,
    },
  });

  return NextResponse.json({
    success: true,
    errorMessage: "",
    data,
  });
};
