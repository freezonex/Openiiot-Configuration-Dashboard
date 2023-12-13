"use client";
import React, { useState } from "react";
import {
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  TextField,
  Tooltip,
  Divider,
  Chip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { httpToSupos } from "@/utils/http";

function TdengineDrawer(props) {
  const { open, tdengineUrl, drawerWidth } = props;
  const [execSqlValue, setExecSqlValue] = useState("");
  const [querySqlValue, setQuerySqlValue] = useState("");
  const [sqlResponse, setSqlResponse] = useState("");
  const handleSubmitSql = async (event) => {
    const { name } = event.target;
    console.log(name);
    const data = {
      dsn: {
        host: tdengineUrl,
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
        .post("/tdengine/batchexec", data, {
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

  return (
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
          <Tooltip
            title="If you want to execute sql in a batch way, do split the query by ; correctly"
            arrow
            placement="top"
          >
            <InfoOutlinedIcon color="primary" sx={{ marginRight: 1 }} />
          </Tooltip>
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
  );
}

export default TdengineDrawer;
