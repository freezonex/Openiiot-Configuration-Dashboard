import { NextResponse } from "next/server";
import prisma from "@/db";
//get all edgesites
export const GET = async () => {
  const data = await prisma.edge.findMany({});

  return NextResponse.json({
    success: true,
    errorMessage: "",
    data: {
      list: data,
    },
  });
};

//Create an edge site
export const POST = async (req) => {
  const data = await req.json();

  await prisma.edge.create({
    data,
  });
  return NextResponse.json({
    success: true,
    errorMessage: "edge created",
    data: {},
  });
};
