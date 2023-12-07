"use client";
import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SideNav from "@/components/Home/SideNav";
import FlowProvider from "../../utils/flow-provider";
import { httpToSupos, login } from "@/utils/http";

import Cookies from "js-cookie";
import UserContext from "@/utils/user-context";
import { useRouter } from "next/navigation";

const DRAWER_WIDTH = 240;

export default function Layout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToSupos
        .get("user/current")
        .then((res) => {
          console.log(res.data.data);
          setUser(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUser(null);
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <React.Fragment>
      <UserContext.Provider
        value={{
          user: user,
          setUser,
          isLoggedIn: !!user,
        }}
      >
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <DashboardIcon
                sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
              />
              <Typography variant="h6" noWrap component="div" color="black">
                Openiiot Configuration Board
              </Typography>
            </Toolbar>
          </AppBar>
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
      </UserContext.Provider>
    </React.Fragment>
  );
}
