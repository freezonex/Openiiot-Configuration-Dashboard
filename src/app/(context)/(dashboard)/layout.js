"use client";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SideNav from "@/components/Home/SideNav/SideNav";
import TopBar from "@/components/Home/TopBar";
import FlowProvider from "../../../utils/flow-provider";

const DRAWER_WIDTH = 240;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ThemeRegistry>
        <FlowProvider>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <SideNav />
          </Drawer>
          <TopBar></TopBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${DRAWER_WIDTH}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </FlowProvider>
      </ThemeRegistry>
    </React.Fragment>
  );
}
