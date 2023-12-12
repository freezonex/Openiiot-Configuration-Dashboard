"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { useParams } from "next/navigation";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Edge from "@/components/flowDisplay/Edge";
import Core from "@/components/flowDisplay/Core";
import Dashboard from "@/components/flowDisplay/Dashboard";
import theme from "@/components/ThemeRegistry/theme";

const drawerWidth = 320;

function page() {
  const { id } = useParams();
  const [flow, setFlow] = useState({});
  const [edges, setEdges] = useState([]);
  const [core, setCore] = useState({});
  const [dashboard, setDashboard] = useState({});

  const [open, setOpen] = useState(false);
  const [sqlValue, setSqlValue] = useState("");
  const [sqlResponse, setSqlResponse] = useState("");

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

      <Drawer
        sx={{
          width: { drawerWidth },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
          },
        }}
        variant="persistent"
        open={open}
        anchor="right"
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
              Tdengine Console Pannel
            </Typography>
          </ListItem>
          <ListItem>
            <TextField
              id="outlined-multiline-static"
              label="Input SQL"
              multiline
              rows={20}
              value={sqlValue}
              defaultValue="SELECT * FROM ${db}.${table}"
            />
          </ListItem>
          <ListItem>
            <Button variant="outlined" sx={{ marginRight: 2 }}>
              Submit
            </Button>
            <Button variant="outlined">Clear</Button>
          </ListItem>
          <Divider sx={{ margin: 2 }}></Divider>
          <ListItem>
            <TextField
              id="outlined-multiline-static-readonly"
              label="Returned Response"
              multiline
              rows={20}
              value={sqlResponse}
              InputProps={{
                readOnly: true,
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default page;
