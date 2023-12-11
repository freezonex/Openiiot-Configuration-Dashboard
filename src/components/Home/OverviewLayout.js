"use client";
import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import FlowOverview from "@/components/Home/Overview";
import { Divider } from "@mui/material";
import { FlowContext } from "@/utils/flow-provider";

const OverviewLayout = ({ flowData }) => {
  // const { refresh } = useContext(FlowContext);
  // useEffect(() => {
  //   fetch("/api/flows")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     });
  // }, [refresh]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {flowData.map(({ id, name, description, _count, core, dashboard }) => (
        <React.Fragment key={id}>
          <FlowOverview
            flowName={name}
            flowDescription={description}
            edgeCount={_count.edges}
            core={core}
            dashboard={dashboard}
          />
          <Divider sx={{ mt: 2 }} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default OverviewLayout;
