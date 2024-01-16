"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SideNav from "@/components/Home/SideNav/SideNav";
import TopBar from "@/components/Home/TopBar";
import FlowProvider from "../../utils/flow-provider";
import { httpToBackend, login } from "@/utils/http";

import Cookies from "js-cookie";
import UserContext from "@/utils/user-context";
import { useRouter } from "next/navigation";
import { checkOrCreateUser } from "@/utils/actions";
const DRAWER_WIDTH = 340;

export default function Layout({ children }) {
  const [user, setUser] = useState(null);

  const router = useRouter();
  //get user info from supos, fetch or create user in localdb to maintain the related flow info
  useEffect(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("user/current")
        .then((res) => {
          console.log(res);

          //here cannot setUser and use user in the later part because setUser is async !!
          const userInfo = {
            name: res.data.data.username,
            role: res.data.data.role,
            tenant_id: res.data.data.tenant_id,
          };
          console.log(userInfo);
          //checkOrCreateUser(userInfo.name, userInfo.role);
          return userInfo;
        })
        .then((data) => setUser(data))
        .catch((error) => {
          console.error("Error fetching user data:", error);
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
      </UserContext.Provider>
    </React.Fragment>
  );
}
