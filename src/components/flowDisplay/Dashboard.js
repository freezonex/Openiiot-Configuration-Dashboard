import React from "react";
import { TextField, Typography, Box } from "@mui/material";

const Dashboard = (props) => {
  const { dashboard } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Typography>Grafana</Typography>
      <TextField
        name="mqtt_url"
        InputProps={{
          readOnly: true,
        }}
        value={dashboard.grafanaUrl}
        margin="normal"
      />
      <Typography sx={{ mt: 2 }}>OODM</Typography>
      <TextField
        name="tsdbUrl"
        InputProps={{
          readOnly: true,
        }}
        value={dashboard.odmUrl}
        margin="normal"
      />
      <Typography sx={{ mt: 2 }}>BI</Typography>
      <TextField
        name="s3_url"
        InputProps={{
          readOnly: true,
        }}
        value={dashboard.biUrl}
        margin="normal"
      />
    </Box>
  );
};

export default Dashboard;
