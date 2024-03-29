"use client";
import React, { useEffect, useState } from "react";
import TenantTable from "./TenantTable";
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

function OverviewLayout() {
  const [refresh, setRefresh] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
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
          Tenants
        </Typography>
        <IconButton color="inherit">
          <RefreshIcon onClick={refreshTable} />
        </IconButton>
        <IconButton color="inherit" component={Link} href="/tenants/create">
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

      <TenantTable refresh={refresh} searchTerm={searchTerm} />
    </Box>
  );
}

export default OverviewLayout;
