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

import { httpToSupos } from "@/utils/http";

const drawerWidth = 320;

function page() {
  const { id } = useParams();
  const [flow, setFlow] = useState({});
  const [edges, setEdges] = useState([]);
  const [core, setCore] = useState({});
  const [dashboard, setDashboard] = useState({});

  const [open, setOpen] = useState(false);
  const [execSqlValue, setExecSqlValue] = useState("");
  const [querySqlValue, setQuerySqlValue] = useState("");
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

  const handleSubmitSql = async (event) => {
    const { name } = event.target;
    console.log(name);
    const data = {
      dsn: {
        host: core.tsdbUrl,
        username: "root",
        password: "taosdata",
      },
    };
    if (name == "querySql") {
      data.sql = querySqlValue;
      await httpToSupos
        .post("/tdengine/query", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setSqlResponse(sqlResponse + JSON.stringify(res.data) + "\n\n");
        });
    } else if (name == "execSql") {
      data.sql = execSqlValue;
      await httpToSupos
        .post("/tdengine/exec", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setSqlResponse(sqlResponse + JSON.stringify(res.data) + "\n\n");
        });
    }
  };

  const handleClearTextBox = () => {
    setExecSqlValue("");
    setQuerySqlValue("");
    setSqlResponse("");
  };

  const handleQueryChange = (event) => {
    const { name } = event.target;
    if (name == "query") {
      setQuerySqlValue(event.target.value);
    } else if (name === "exec") {
      setExecSqlValue(event.target.value);
    }
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
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
              Tdengine Console Pannel
            </Typography>
          </ListItem>
          <ListItem>
            <TextField
              name="exec"
              label="Input EXEC SQL"
              multiline
              rows={8}
              value={execSqlValue}
              onChange={handleQueryChange}
              sx={{ width: "100%" }}
            />
          </ListItem>
          <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              name="execSql"
              variant="outlined"
              sx={{ marginRight: 2 }}
              onClick={handleSubmitSql}
            >
              Submit
            </Button>
          </ListItem>
          <ListItem>
            <TextField
              name="query"
              label="Input QUERY SQL"
              multiline
              rows={8}
              value={querySqlValue}
              onChange={handleQueryChange}
              sx={{ width: "100%" }}
            />
          </ListItem>
          <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              name="querySql"
              variant="outlined"
              sx={{ marginRight: 2 }}
              onClick={handleSubmitSql}
            >
              Submit
            </Button>
          </ListItem>
          <Divider sx={{ margin: 2 }}>
            <Chip label="Response" />
          </Divider>
          <ListItem>
            <TextField
              name="response"
              label="Returned Response"
              multiline
              rows={20}
              value={sqlResponse}
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%" }}
            />
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              onClick={handleClearTextBox}
              sx={{ width: "100%" }}
            >
              Clear
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default page;
