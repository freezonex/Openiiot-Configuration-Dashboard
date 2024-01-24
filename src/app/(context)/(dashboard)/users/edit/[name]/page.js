"use client";
import React from "react";
import UserForm from "@/components/Home/UserDashboard/UserForm";
import { useParams } from "next/navigation";
function page() {
  const { name } = useParams();
  return <UserForm isEdit={true} userName={name} />;
}

export default page;
