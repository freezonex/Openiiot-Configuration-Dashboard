"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FlowOverview from "@/components/Home/Overview";
import { Divider } from "@mui/material";

const OverviewLayout = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetch("/api/flows")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);
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
