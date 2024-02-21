"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import FlowNav from "./FlowNav";
import { FlowContext } from "@/utils/flow-provider";
import UserContext from "@/utils/user-context";
import { logout } from "@/utils/http";
import EdgeNav from "./EdgeNav";
import TenantNav from "./TenantNav";
import UserNav from "./UserNav";
import CoreNav from "./CoreNav";
import AppNav from "./AppNav";

const PLACEHOLDER_LINKS = [
  { text: "Logout", icon: LogoutIcon, href: "/login" },
];

function SideNav() {
  const [data, setData] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refresh, setRefresh } = useContext(FlowContext);
  const { user } = useContext(UserContext);
  console.log(user);
  useEffect(() => {}, [user, refresh]);
  const handleNavToEdgePool = () => {
    console.log("nav");
  };

  const handleLogout = async () => {
    logout(router);
  };
  return (
    <React.Fragment>
      {user.role === "SuperAdmin" && <TenantNav />}
      {(user.role === "SuperAdmin" || user.role === "Admin") && (
        <UserNav></UserNav>
      )}
      <EdgeNav></EdgeNav>
      <CoreNav></CoreNav>
      <AppNav></AppNav>
      <FlowNav data={data}></FlowNav>
      <Divider sx={{ mt: "auto" }} />
      <List>
        {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={text === "Logout" ? handleLogout : handleNavToEdgePool}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

export default SideNav;
