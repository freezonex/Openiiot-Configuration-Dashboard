"use client";
import React, { useState } from "react";
import { Alert, TextField, Typography, Box, Button } from "@mui/material";

import { httpToSupos } from "@/utils/http";

const Core = (props) => {
  const { isEdit, core, handleDrawerToggle, updateCoreData } = props;
  const [isConnected, setIsConnected] = useState(null);
  const [updateData, setUpdateData] = useState(core);
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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({
      ...updateData,
      [name]: value,
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
        name="mqttUrl"
        InputProps={{
          readOnly: isEdit ? false : true,
        }}
        value={updateData.mqttUrl}
        onChange={handleChange}
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
        {!isEdit && (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </Box>
      <TextField
        name="tsdbUrl"
        InputProps={{
          readOnly: isEdit ? false : true,
        }}
        value={updateData.tsdbUrl}
        onChange={handleChange}
        margin="normal"
      />
      {isConnected != null &&
        (isConnected === true ? (
          <Alert severity="success" sx={{ mg: 5 }}>
            Tdengine is successfully connected
          </Alert>
        ) : (
          <Alert severity="error" sx={{ mg: 5 }}>
            Tdengine is not connected
          </Alert>
        ))}
      <Typography sx={{ mt: 2 }}>S3</Typography>
      <TextField
        name="s3Url"
        InputProps={{
          readOnly: isEdit ? false : true,
        }}
        onChange={handleChange}
        value={updateData.s3Url}
        margin="normal"
      />
      {isEdit && (
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => {
            console.log("update clicked");
            updateCoreData(updateData);
          }}
        >
          update
        </Button>
      )}
    </Box>
  );
};

export default Core;
