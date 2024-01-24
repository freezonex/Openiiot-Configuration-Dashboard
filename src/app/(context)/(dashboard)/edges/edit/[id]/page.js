"use client";
import React from "react";
import { useParams } from "next/navigation";
import EdgeForm from "@/components/Home/EdgeDashboard/EdgeForm";
function page() {
  const { id } = useParams();
  return <EdgeForm isEdit={true} edgeId={id} />;
}

export default page;
