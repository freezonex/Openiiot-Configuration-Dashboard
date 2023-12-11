"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SideNav from "@/components/Home/SideNav";
import TopBar from "@/components/Home/TopBar";
import FlowProvider from "../../utils/flow-provider";
import { httpToSupos, login } from "@/utils/http";

import Cookies from "js-cookie";
import UserContext from "@/utils/user-context";
import { useRouter } from "next/navigation";

const DRAWER_WIDTH = 240;
async function checkOrCreateUser(user) {
  console.log("check or create user");
  const res = await fetch("/api/user/" + user.name + "/" + user.role).then(
    (res) => res.json()
  );
  console.log(res);

  return res.data;
}
export default function Layout({ children }) {
  const [user, setUser] = useState(null);

  const router = useRouter();
  //get user info from supos, fetch or create user in localdb to maintain the related flow info
  useEffect(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToSupos
        .get("user/current")
        .then((res) => {
          const userInfoArray = res.data.data
            .split("-")
            .map((str) => str.trim());
          //here cannot setUser and use user in the later part because setUser is async !!
          const userInfo = { name: userInfoArray[0], role: userInfoArray[1] };
          console.log(userInfo);
          return checkOrCreateUser(userInfo);
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
