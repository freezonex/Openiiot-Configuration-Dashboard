import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import EdgeCard from "@/components/FreeFlowEdge/EdgeCard";

function Edge(props) {
  const { edgeList } = props;

  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {edgeList.map((item, index) => {
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

export default Edge;
