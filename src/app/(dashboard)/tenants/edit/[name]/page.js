"use client";
import React from "react";
import TenantForm from "@/components/Home/TenantDashboard/TenantForm";
import { useParams } from "next/navigation";
function page() {
  const { name } = useParams();
  return <TenantForm isEdit={true} tenantName={name} />;
}

export default page;
