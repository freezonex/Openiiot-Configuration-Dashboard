import { NextResponse } from "next/server";
import prisma from "@/db";
//Create a new user based on current user using SupOS
export const POST = async (req) => {
  const { name, role } = await req.json();

  const user = await prisma.user.create({
    data: {
      name: name,
      role: role,
    },
  });

  // Return the user instance
  return NextResponse.json({
    success: true,
    errorMessage: "",
    data: user,
  });
};
