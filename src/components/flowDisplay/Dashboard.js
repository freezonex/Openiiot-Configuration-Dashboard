"use client";
import React, { useState } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";

const Dashboard = (props) => {
  const { dashboard, isEdit, updateDashboardData } = props;
  const [updateData, setUpdateData] = useState(dashboard);
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
        minHeight: "100%",
      }}
    >
      <Typography>Grafana</Typography>
      <TextField
        name="grafanaUrl"
        InputProps={{
          readOnly: isEdit ? false : true,
        }}
        value={updateData.grafanaUrl}
        onChange={handleChange}
        margin="normal"
      />
      <Typography sx={{ mt: 2 }}>OODM</Typography>
      <TextField
        name="odmUrl"
        InputProps={{
          readOnly: isEdit ? false : true,
        }}
        value={updateData.odmUrl}
        onChange={handleChange}
        margin="normal"
      />
      <Typography sx={{ mt: 2 }}>BI</Typography>
      <TextField
        name="biUrl"
        InputProps={{
          readOnly: isEdit ? false : true,
        }}
        value={updateData.biUrl}
        onChange={handleChange}
        margin="normal"
      />
      {isEdit && (
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => {
            console.log("update clicked");
            updateDashboardData(updateData);
          }}
        >
          update
        </Button>
      )}
    </Box>
  );
};

export default Dashboard;
