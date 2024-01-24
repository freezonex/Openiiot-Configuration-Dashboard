import React from "react";
import Loading from "./loading";
import { Suspense } from "react";
import FlowDetails from "@/components/Home/FlowDashboard/FlowDetails";

async function page({ params, searchParams }) {
  const id = params.id;

  //return <div></div>;
  return (
    <Suspense>
      <FlowDetails id={id}></FlowDetails>
    </Suspense>
  );
}

export default page;
