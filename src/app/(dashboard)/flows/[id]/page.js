import React from "react";
import { useParams, useSearchParams } from "next/navigation";

import ViewDisplay from "@/components/flowDisplay/ViewDisplay";
import EditDisplay from "@/components/flowDisplay/EditDisplay";
import { getFlowInfo } from "@/utils/actions";
import Loading from "./loading";
import { Suspense } from "react";

async function page({ params, searchParams }) {
  const id = params.id;
  const mode = searchParams.mode;
  const flow = await getFlowInfo(id);

  //return <div></div>;
  return (
    <Suspense>
      {mode === "view" && <ViewDisplay flow={flow} />}
      {mode === "edit" && <EditDisplay flow={flow} />}
    </Suspense>
  );
}

export default page;
