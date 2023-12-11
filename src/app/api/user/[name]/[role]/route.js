import { NextResponse } from "next/server";
import prisma from "@/db";

//GET an flow detail
export const GET = async (req, { params }) => {
  const { name, role } = params;
  console.log(name);
  const user = await prisma.user.upsert({
    where: {
      name: name,
    },
    update: {
      name: name,
    },
    create: {
      name: name,
      role: role,
    },
  });
  return NextResponse.json({
    success: true,
    errorMessage: "get successful",
    data: user,
  });
};
