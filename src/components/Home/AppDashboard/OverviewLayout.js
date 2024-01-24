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
import AppTable from "./AppTable";

function OverviewLayout() {
  const [refresh, setRefresh] = useState({});
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSelectApp = (appIds) => {
    setApps(appIds);
  };
  const refreshTable = () => {
    setRefresh({});
  };
  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Apps
        </Typography>
        <IconButton color="inherit" onClick={refreshTable}>
          <RefreshIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="/apps/create">
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

      <AppTable
        refresh={refresh}
        onSelectionChange={handleSelectApp}
        selectedRowIds={apps}
        searchTerm={searchTerm}
      />
    </Box>
  );
}

export default OverviewLayout;
