import React, { useState } from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Unstable_Grid2";
import EdgeCard from "@/components/FreeFlowEdge/EdgeCard";
import AddIcon from "@mui/icons-material/Add";

import AddEdgeSite from "./AddEdgeSite";
import { Alexandria } from "next/font/google";

const cardList = [
  { heading: "NodeRed", text: "Site1", url: "http://47.245.114.164:1880/" },
  { heading: "NodeRed", text: "Site2", url: "http://47.245.114.166:1880/" },
  { heading: "NodeRed", text: "Site3", url: "http://47.245.114.165:1880/" },
];

export default function EdgeLayout() {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [listItems, setListItems] = useState(cardList);

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
    const newSite = {
      heading: siteType,
      text: siteDescription,
      url: siteAddress,
    };
    setListItems([...listItems, newSite]);
    setOpen(false);
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
      {listItems.map((item, index) => {
        return (
          <Grid key={item.url} xs={3}>
            <Box>
              <EdgeCard
                sx={{ height: 300 }}
                heading={item.heading}
                text={item.text}
                url={item.url}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
