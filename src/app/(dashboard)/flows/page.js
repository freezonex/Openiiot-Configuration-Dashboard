import React from "react";
import OverviewLayout from "@/components/Home/OverviewLayout";
import UserContext from "@/utils/user-context";

// async function getFlowData(uid) {
//   const res = await fetch("http://localhost:3000/api/user/flows" + uid);
//   if (!res.ok) {
//     throw new Error("Failed to fetch flow info");
//   }
//   const data = await res.json();
//   return data;
// }

export default async function HomePage() {
  return <OverviewLayout />;
}
