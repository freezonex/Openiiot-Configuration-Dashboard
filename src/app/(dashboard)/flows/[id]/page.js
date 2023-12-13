"use client";
import React, { useEffect, useState } from "react";
import { Box, Divider, Chip, Typography } from "@mui/material";
import { useParams } from "next/navigation";

import Edge from "@/components/flowDisplay/Edge";
import Core from "@/components/flowDisplay/Core";
import Dashboard from "@/components/flowDisplay/Dashboard";
import theme from "@/components/ThemeRegistry/theme";
import TdengineDrawer from "@/components/flowDisplay/TdengineDrawer";

const drawerWidth = 320;

function page() {
  const { id } = useParams();
  const [flow, setFlow] = useState({});
  const [edges, setEdges] = useState([]);
  const [core, setCore] = useState({});
  const [dashboard, setDashboard] = useState({});

  const [open, setOpen] = useState(false);

  const mainContentStyle = {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: `${open ? drawerWidth : 0}px`,
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

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
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          flexShrink: 0,
          ...mainContentStyle,
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
        <Core core={core} handleDrawerToggle={handleDrawerToggle} />

        <Divider>
          <Chip label="FreeflowDashboard" />
        </Divider>
        <Dashboard dashboard={dashboard}></Dashboard>
      </Box>
      <TdengineDrawer
        open={open}
        tdengineUrl={core.tsdbUrl}
        drawerWidth={drawerWidth}
      ></TdengineDrawer>
    </Box>
  );
}

export default page;
