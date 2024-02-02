"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SideNav from "@/components/Home/SideNav/SideNav";
import TopBar from "@/components/Home/TopBar";
import FlowProvider from "../../../utils/flow-provider";
import { useRouter } from "next/navigation";
import UserContext from "@/utils/user-context";
import Cookies from "js-cookie";
import { getCurrentUser } from "@/utils/http";

const DRAWER_WIDTH = 340;

export default function Layout({ children }) {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const authToken = Cookies.get("isv_token");
    if (authToken) {
      setUser(getCurrentUser());
    } else {
      router.push("/login");
    }
  }, []);
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
