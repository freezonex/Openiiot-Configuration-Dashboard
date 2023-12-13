"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import EdgeCard from "@/components/FreeFlowEdge/EdgeCard";
import EdgeLayout from "../FreeFlowEdge/EdgeLayout";
function Edge(props) {
  const { edgeList, isEdit, updateEdgeData } = props;
  const [updateData, setUpdateData] = useState(edgeList);
  const handleAddEdge = (siteAddress, siteType, siteDescription) => {
    setUpdateData([
      ...updateData,
      { url: siteAddress, type: siteType, description: siteDescription },
    ]);
  };
  const handleDeleteEdge = (siteAddress, siteDescription) => {
    setUpdateData(
      updateData.filter((edge) => {
        return edge.url != siteAddress || edge.description != siteDescription;
      })
    );
  };

  if (isEdit) {
    return (
      <React.Fragment>
        <EdgeLayout
          edgeList={updateData}
          handleAddEdge={handleAddEdge}
          handleDeleteEdge={handleDeleteEdge}
        ></EdgeLayout>
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => {
            console.log("update clicked");
            updateEdgeData(updateData);
          }}
        >
          update
        </Button>
      </React.Fragment>
    );
  } else {
    return (
      <Grid container rowSpacing={3} columnSpacing={3}>
        {updateData.map((item, index) => {
          return (
            <Grid key={item.url} xs={3}>
              <EdgeCard
                sx={{ height: 300 }}
                text={item.description}
                url={item.url}
                id={item.id}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Edge;
