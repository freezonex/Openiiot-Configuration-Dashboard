import * as React from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FlowNav({ data }) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleEditFlow = (id) => {
    router.push(`/flows/${id}?mode=${encodeURIComponent("edit")}`);
  };

  const handleDeleteFlow = async (id) => {
    try {
      await fetch("/api/flows/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(router.push("/flows"));
    } catch (error) {
      console.log(error);
    }
    router.push("/flows");
    setRefresh({});
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton component={Link} href="/flows" onClick={handleClick}>
        <ListItemText primary="Flow Management" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.map(({ name, id }) => {
            const href = `/flows/${id}?mode=${encodeURIComponent("view")}`;
            return (
              <ListItem key={id} disablePadding sx={{ pl: 4 }}>
                <ListItemButton component={Link} href={href}>
                  <ListItemIcon>
                    <AccountTreeIcon />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
                <ListItemIcon>
                  <EditIcon onClick={() => handleEditFlow(id)}></EditIcon>
                  <DeleteIcon onClick={() => handleDeleteFlow(id)}></DeleteIcon>
                </ListItemIcon>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
