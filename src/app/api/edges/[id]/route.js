import { NextResponse } from "next/server";
import prisma from "@/db";
//Delete an edge site
export const DELETE = async (req, { params }) => {
  const { id } = params;
  console.log(id);
  const edge = await prisma.edge.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({
    success: true,
    errorMessage: "delete successful",
  });
};
