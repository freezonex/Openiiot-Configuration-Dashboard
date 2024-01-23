import React from "react";
import { useParams, useSearchParams } from "next/navigation";

import ViewDisplay from "@/components/flowDisplay/ViewDisplay";
import EditDisplay from "@/components/flowDisplay/EditDisplay";
import { getFlowInfo } from "@/utils/actions";
import Loading from "./loading";
import { Suspense } from "react";
import FlowDetails from "@/components/Home/FlowDashboard/FlowDetails";

async function page({ params, searchParams }) {
  const id = params.id;
  const mode = searchParams.mode;
  const flow = await getFlowInfo(id);

  //return <div></div>;
  return (
    <Suspense>
      <FlowDetails id={id}></FlowDetails>
    </Suspense>
  );
}

export default page;
