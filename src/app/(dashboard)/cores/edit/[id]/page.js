"use client";
import React from "react";
import { useParams } from "next/navigation";
import CoreForm from "@/components/Home/CoreDashboard/CoreForm";
function page() {
  const { id } = useParams();
  return <CoreForm isEdit={true} coreId={id} />;
}

export default page;
