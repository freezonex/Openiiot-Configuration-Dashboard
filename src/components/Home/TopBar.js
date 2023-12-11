"use client";
import React, { useContext, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import UserContext from "@/utils/user-context";
import Link from "next/link";

function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useContext(UserContext);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <DashboardIcon
          sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
        />
        <Typography
          variant="h6"
          noWrap
          component="div"
          color="black"
          sx={{ flexGrow: 1 }}
        >
          Openiiot Configuration Board
        </Typography>

        {user && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="#444"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ zIndex: 2100 }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} href="/user">
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/user">
                My account
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
