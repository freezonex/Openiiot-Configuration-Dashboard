import { NextResponse } from "next/server";
import prisma from "@/db";

//GET an flow detail
export const GET = async (req, { params }) => {
  const { name } = params;
  console.log(name);
  const user = await prisma.user.findUnique({
    where: { name: name },
  });
  return NextResponse.json({
    success: true,
    errorMessage: "get successful",
    data: user,
  });
};
