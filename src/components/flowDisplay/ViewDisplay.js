"use client";
import React, { useState } from "react";
import { Box, Divider, Chip, Typography } from "@mui/material";

import Edge from "@/components/flowDisplay/Edge";
import Core from "@/components/flowDisplay/Core";
import Dashboard from "@/components/flowDisplay/Dashboard";
import theme from "@/components/ThemeRegistry/theme";
import TdengineDrawer from "../Home/CoreDashboard/TdengineDrawer";

const drawerWidth = 320;

function ViewDisplay(props) {
  const { flow } = props;
  const [open, setOpen] = useState(false);
  console.log(flow);
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
        <Edge edgeList={flow.edges.map((item) => item.edge)}></Edge>
        <Divider>
          <Chip label="FreeflowCore" />
        </Divider>
        <Core core={flow.core} handleDrawerToggle={handleDrawerToggle} />

        <Divider>
          <Chip label="FreeflowDashboard" />
        </Divider>
        <Dashboard dashboard={flow.dashboard}></Dashboard>
      </Box>
      <TdengineDrawer
        open={open}
        tdengineUrl={flow.core.tsdbUrl}
        drawerWidth={drawerWidth}
      ></TdengineDrawer>
    </Box>
  );
}

export default ViewDisplay;
