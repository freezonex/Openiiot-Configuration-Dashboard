"use client";
import React, { useState } from "react";
import { Alert, TextField, Typography, Box, Button } from "@mui/material";

import { httpToSupos } from "@/utils/http";

const Core = (props) => {
  const { core, handleDrawerToggle } = props;
  const [isConnected, setIsConnected] = useState(false);

  const handleTestConnection = async () => {
    const data = {
      //extract this
      dsn: {
        host: core.tsdbUrl,
        username: "root",
        password: "taosdata",
      },
    };
    await httpToSupos
      .post("/tdengine/testconnection", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setIsConnected(res.data.successful);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flexGrow: 1,
      }}
    >
      <Typography>MQTT Broker</Typography>
      <TextField
        name="mqtt_url"
        InputProps={{
          readOnly: true,
        }}
        value={core.mqttUrl}
        margin="normal"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="body1">Time Series Database</Typography>
        <Button
          variant="outlined"
          color="success"
          sx={{ ml: "auto" }}
          onClick={handleTestConnection}
        >
          Test Connection
        </Button>
        <Button
          variant="outlined"
          color="success"
          sx={{ ml: 1 }}
          onClick={handleDrawerToggle}
        >
          Console
        </Button>
      </Box>
      <TextField
        name="tsdbUrl"
        InputProps={{
          readOnly: true,
        }}
        value={core.tsdbUrl}
        margin="normal"
      />
      {isConnected ? (
        <Alert severity="success" sx={{ mg: 5 }}>
          Tdengine is successfully connected
        </Alert>
      ) : (
        <Alert severity="error" sx={{ mg: 5 }}>
          Tdengine is not connected
        </Alert>
      )}
      <Typography sx={{ mt: 2 }}>S3</Typography>
      <TextField
        name="s3_url"
        InputProps={{
          readOnly: true,
        }}
        value={core.s3Url}
        margin="normal"
      />
    </Box>
  );
};

export default Core;
