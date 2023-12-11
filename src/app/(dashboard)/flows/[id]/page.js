"use client";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Edge from "@/components/flowDisplay/Edge";
import Core from "@/components/flowDisplay/Core";
import Dashboard from "@/components/flowDisplay/Dashboard";

function page() {
  const { id } = useParams();
  const [flow, setFlow] = useState({});
  const [edges, setEdges] = useState([]);
  const [core, setCore] = useState({});
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    fetch("/api/flows/" + id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setFlow({
          name: res.data.name,
          description: res.data.description,
          id: res.data.id,
        });
        setEdges(res.data.edges.map((edgeFlowMap) => edgeFlowMap.edge));
        setCore(res.data.core);
        setDashboard(res.data.dashboard);
      });
  }, [id]);
  console.log(flow);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {flow.name}
      </Typography>
      <Typography variant="body" gutterBottom>
        {flow.description}
      </Typography>
      <Divider>
        <Chip label="FreeflowEdge" />
      </Divider>
      <Edge edgeList={edges}></Edge>
      <Divider>
        <Chip label="FreeflowCore" />
      </Divider>
      <Core core={core} />
      <Divider>
        <Chip label="FreeflowDashboard" />
      </Divider>
      <Dashboard dashboard={dashboard}></Dashboard>
    </Box>
  );
}

export default page;
