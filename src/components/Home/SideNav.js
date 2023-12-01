"use client";
import React, { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import AddFlow from "./AddFlow";
import { FlowContext } from "@/app/flow-provider";

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

function SideNav() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  // const [refresh, setRefresh] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refresh, setRefresh } = useContext(FlowContext);

  useEffect(() => {
    fetch("/api/flows")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [refresh]);

  const handleClose = () => {
    setOpen(false);
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleAddFlow = async (name, description) => {
    if (name.trim() === "") {
      setAlertOpen(true);
      return;
    }
    // try {
    //   const body = {
    //     name: name,
    //     description: description,
    //   };
    //   const response = await fetch("/api/flows/create", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   const result = await response.json();

    // } catch (error) {
    //   console.log(error);
    // }
    router.push(
      "/flows/create?" +
        createQueryString("name", name) +
        "&" +
        createQueryString("description", description)
    );

    setOpen(false);
  };

  const handleDeleteFlow = async (id) => {
    try {
      await fetch("/api/flows/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(router.push("/"));
    } catch (error) {
      console.log(error);
    }
    router.push("/");
    setRefresh({});
  };
  return (
    <React.Fragment>
      <List>
        <ListItem key={"/"} disablePadding>
          <ListItemButton component={Link} href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Flows"></ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddIcon />
          </ListItemButton>
        </ListItem>
        <AddFlow
          open={open}
          handleClose={handleClose}
          alertOpen={alertOpen}
          handleAddFlow={handleAddFlow}
        ></AddFlow>
        {data.map(({ name, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton component={Link} href={"/flows/" + id}>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
            <ListItemIcon>
              <EditIcon></EditIcon>
              <DeleteIcon onClick={() => handleDeleteFlow(id)}></DeleteIcon>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: "auto" }} />
      <List>
        {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
