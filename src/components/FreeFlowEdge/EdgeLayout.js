import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Unstable_Grid2";
import EdgeCard from "@/components/FreeFlowEdge/EdgeCard";
import AddIcon from "@mui/icons-material/Add";

import AddEdgeSite from "./AddEdgeSite";
import SideNav from "../Home/SideNav";

export default function EdgeLayout(props) {
  const { handleAddEdge, edgeList, handleDeleteEdge } = props;
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [query, setQuery] = useState({});

  // useEffect(() => {
  //   fetch("/api/edges", { method: "GET" })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setListItems(res.data.list);
  //     });
  // }, [query]);
  const handleOpenAdd = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddSite = (siteAddress, siteType, siteDescription) => {
    if (siteAddress.trim() === "") {
      setAlertOpen(true);
      return;
    }
    handleAddEdge(siteAddress, siteType, siteDescription);

    setOpen(false);
    setQuery({});
  };

  const handleDeleteItem = (siteAddress, siteDescription) => {
    handleDeleteEdge(siteAddress, siteDescription);

    setQuery({});
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      <Grid xs={3}>
        <Box
          sx={{
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddIcon varient="outlined" onClick={handleOpenAdd}></AddIcon>
          <AddEdgeSite
            open={open}
            handleClose={handleClose}
            handleAddSite={handleAddSite}
            alertOpen={alertOpen}
          ></AddEdgeSite>
        </Box>
      </Grid>
      {edgeList.map((item, index) => {
        return (
          <Grid key={item.url} xs={3}>
            <Box>
              <EdgeCard
                sx={{ height: 300 }}
                text={item.description}
                url={item.url}
                handleDeleteItem={handleDeleteItem}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
