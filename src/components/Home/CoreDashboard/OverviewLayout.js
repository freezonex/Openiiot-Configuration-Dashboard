"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import CoreTable from "./CoreTable";
import theme from "@/components/ThemeRegistry/theme";
import TdengineDrawer from "@/components/Home/CoreDashboard/TdengineDrawer";

const drawerWidth = 350;

function OverviewLayout() {
  const [refresh, setRefresh] = useState({});
  const [cores, setCores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [openTdengineDrawer, setOpenTdengineDrawer] = useState(false);
  const [TdengineUrl, setTdengineUrl] = useState("");
  const mainContentStyle = {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: `${openTdengineDrawer ? drawerWidth : 0}px`,
  };
  const handleDrawerOpenStatus = () => {
    setOpenTdengineDrawer(!openTdengineDrawer);
    console.log(openTdengineDrawer);
  };
  const handleSelectCore = (coreIds) => {
    setCores(coreIds);
  };
  const getTdengineUrl = (url) => {
    setTdengineUrl(url);
  };
  const refreshTable = () => {
    setRefresh({});
  };
  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <Box sx={{ width: "100%", ...mainContentStyle }}>
      <Box sx={{ ...mainContentStyle }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cores
          </Typography>
          <IconButton color="inherit" onClick={refreshTable}>
            <RefreshIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} href="/cores/create">
            <AddIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Box sx={{ width: "50%", mt: 2, mb: 2 }}>
          <TextField
            fullWidth
            id="search"
            type="search"
            label="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearchChange}
          />
        </Box>

        <CoreTable
          refresh={refresh}
          onSelectionChange={handleSelectCore}
          setlectedRowIds={cores}
          handleOpenDrawer={handleDrawerOpenStatus}
          getTdengineUrl={getTdengineUrl}
          searchTerm={searchTerm}
        />
      </Box>
      <TdengineDrawer
        open={openTdengineDrawer}
        drawerWidth={drawerWidth}
        tdengineUrl={TdengineUrl}
        handleDrawerOpenStatus={handleDrawerOpenStatus}
      />
    </Box>
  );
}

export default OverviewLayout;
