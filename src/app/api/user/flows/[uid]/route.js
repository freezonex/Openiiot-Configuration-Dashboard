import { NextResponse } from "next/server";
import prisma from "@/db";

//GET all the flows belong to user (id = uid)
export const GET = async (req, { params }) => {
  const { uid } = params;
  console.log(uid);
  const flows = await prisma.flow.findMany({
    where: { userId: Number(uid) },
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
    errorMessage: "get successful",
    data: flows,
  });
};
