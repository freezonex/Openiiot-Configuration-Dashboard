"use client";
import React, { useState } from "react";
import { Box, Divider, Chip, Typography, TextField } from "@mui/material";

import Edge from "./Edge";
import Core from "./Core";
import Dashboard from "@/components/flowDisplay/Dashboard";
import theme from "@/components/ThemeRegistry/theme";
import { updateCore } from "@/utils/actions";

function EditDisplay(props) {
  const { flow } = props;
  console.log(flow);

  const updateCoreData = async (updateData) => {
    console.log("update...");
    console.log(updateData);
    const result = await updateCore(updateData);
    console.log(result);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <TextField
          value={flow.name}
          label="Flow Name"
          sx={{ width: "20vw", marginRight: 5 }}
        ></TextField>
        <TextField
          value={flow.description}
          label="Flow description"
          sx={{ width: "70vw" }}
        ></TextField>
      </Box>
      <Divider>
        <Chip label="FreeflowEdge" />
      </Divider>
      <Edge edgeList={flow.edges.map((item) => item.edge)} isEdit={true}></Edge>

      <Divider>
        <Chip label="FreeflowCore" />
      </Divider>
      <Core core={flow.core} isEdit={true} updateCoreData={updateCoreData} />

      <Divider>
        <Chip label="FreeflowDashboard" />
      </Divider>
      <Dashboard dashboard={flow.dashboard}></Dashboard>
    </Box>
  );
}

export default EditDisplay;
