"use client";
import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import FlowOverview from "@/components/Home/Overview";
import { Divider } from "@mui/material";
import { FlowContext } from "@/app/flow-provider";

const OverviewLayout = () => {
  const [data, setData] = useState([]);
  let { refresh, setRefresh } = useContext(FlowContext);
  useEffect(() => {
    fetch("/api/flows")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, [refresh]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {data.map(({ name, description, _count, core, dashboard }) => (
        <React.Fragment>
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
