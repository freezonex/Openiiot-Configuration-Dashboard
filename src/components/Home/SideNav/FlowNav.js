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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserContext from "@/utils/user-context";

export default function FlowNav() {
  const [open, setOpen] = React.useState(true);
  const { user } = React.useContext(UserContext);
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
          {user.role !== "Viewer" && (
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              href="/flows/create"
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Create Flow" />
            </ListItemButton>
          )}
          <ListItemButton sx={{ pl: 4 }} component={Link} href="/flows">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Flows" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
