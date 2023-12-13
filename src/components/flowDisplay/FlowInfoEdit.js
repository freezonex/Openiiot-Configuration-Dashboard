"use client";
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function FlowInfoEdit(props) {
  const { info, updateFlowInfoData } = props;
  const [updateData, setUpdateData] = useState(info);
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          name="name"
          value={updateData.name}
          onChange={handleChange}
          label="Flow Name"
          sx={{ width: "20vw", marginRight: 5 }}
        ></TextField>
        <TextField
          name="description"
          value={updateData.description}
          onChange={handleChange}
          label="Flow description"
          sx={{ width: "70vw" }}
        ></TextField>
      </Box>
      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={() => {
          console.log("update clicked");
          updateFlowInfoData(updateData);
        }}
      >
        update
      </Button>
    </Box>
  );
}

export default FlowInfoEdit;
