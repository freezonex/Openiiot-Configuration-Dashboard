"use client";
import React, { useState } from "react";
import { Box, Button, Divider, Chip, TextField, Alert } from "@mui/material";
import FlowInfoEdit from "./FlowInfoEdit";
import Edge from "./Edge";
import Core from "./Core";
import Dashboard from "@/components/flowDisplay/Dashboard";
import {
  updateEdge,
  updateCore,
  updateDashboard,
  updateFlowInfo,
} from "@/utils/actions";
import { useRouter } from "next/navigation";

function EditDisplay(props) {
  const { flow } = props;
  const router = useRouter();
  const updateCoreData = async (updateData) => {
    console.log("updating core...");
    await updateCore(updateData);
  };

  const updateDashboardData = async (updateData) => {
    console.log("updating dashboard...");
    await updateDashboard(updateData);
  };

  const updateFlowInfoData = async (updateData) => {
    console.log("updating flow info...");
    await updateFlowInfo(updateData);
  };
  const updateEdgeData = async (updateData) => {
    console.log("updating edge...");
    const currentEdge = flow.edges;
    const exisitingEdges = updateData
      .filter((edge) => edge.id)
      .map((edge) => edge.id);
    const edgeToRemove = currentEdge.filter((e) => {
      console.log(e.edge.id, exisitingEdges.includes(e.edge.id));
      return !exisitingEdges.includes(e.edge.id);
    });
    console.log(currentEdge, exisitingEdges, "edgeToRemove", edgeToRemove);
    await updateEdge(updateData, flow.id, flow.edges);
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
      <Alert severity="warning">
        Once you have finished changing the values in one section, press UPDATE
        button to make it works. Otherwise, no change will be made.
      </Alert>

      <Divider sx={{ mb: 2, mt: 2 }}>
        <Chip label="Freeflow Info" />
      </Divider>
      <FlowInfoEdit
        info={{ id: flow.id, name: flow.name, description: flow.description }}
        updateFlowInfoData={updateFlowInfoData}
      />
      <Divider sx={{ mb: 2, mt: 2 }}>
        <Chip label="FreeflowEdge" />
      </Divider>
      <Edge
        edgeList={flow.edges.map((item) => item.edge)}
        isEdit={true}
        updateEdgeData={updateEdgeData}
      ></Edge>

      <Divider sx={{ mb: 2, mt: 2 }}>
        <Chip label="FreeflowCore" />
      </Divider>
      <Core core={flow.core} isEdit={true} updateCoreData={updateCoreData} />

      <Divider sx={{ mb: 2, mt: 2 }}>
        <Chip label="FreeflowDashboard" />
      </Divider>
      <Dashboard
        dashboard={flow.dashboard}
        isEdit={true}
        updateDashboardData={updateDashboardData}
      ></Dashboard>
      <Button
        sx={{ mt: 5 }}
        variant="contained"
        onClick={() => {
          router.push(`/flows/${flow.id}?mode=view`);
        }}
      >
        Finsh and go back
      </Button>
    </Box>
  );
}

export default EditDisplay;
