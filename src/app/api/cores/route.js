import { NextResponse } from "next/server";
import prisma from "@/db";
//get all cores
export const GET = async () => {
  const data = await prisma.core.findMany({
    include: {
      belongsTo: true,
    },
  });

  return NextResponse.json({
    success: true,
    errorMessage: "",
    data: {
      list: data,
    },
  });
};
