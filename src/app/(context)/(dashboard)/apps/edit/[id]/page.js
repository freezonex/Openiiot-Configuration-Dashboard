"use client";
import React from "react";
import { useParams } from "next/navigation";
import AppForm from "@/components/Home/AppDashboard/AppForm";
function page() {
  const { id } = useParams();
  return <AppForm isEdit={true} appId={id} />;
}

export default page;
