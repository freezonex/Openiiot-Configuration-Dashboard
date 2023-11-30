import React from "react";
import { TextField, Typography, Box } from "@mui/material";

const Core = (props) => {
  const { core } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Typography>MQTT Broker</Typography>
      <TextField name="mqtt_url" value={core.mqttUrl} margin="normal" />
      <Typography sx={{ mt: 2 }}>Time Series Database</Typography>
      <TextField name="tsdbUrl" value={core.tsdbUrl} margin="normal" />
      <Typography sx={{ mt: 2 }}>S3</Typography>
      <TextField name="s3_url" value={core.s3Url} margin="normal" />
    </Box>
  );
};

export default Core;
