import * as React from "react";
import OverviewLayout from "@/components/Home/OverviewLayout";

async function getFlowData() {
  const res = await fetch("http://localhost:3000/api/flows");
  if (!res.ok) {
    throw new Error("Failed to fetch flow info");
  }
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const flowData = await getFlowData();
  return <OverviewLayout flowData={flowData.data} />;
}
