"use client";
import React, { useContext, useState } from "react";
import EdgeTable from "./EdgeTable";
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
import UserContext from "@/utils/user-context";

function OverviewLayout() {
  const [refresh, setRefresh] = useState({});
  const [edges, setEdges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(UserContext);
  const handleSelectEdge = (edgeIds) => {
    setEdges(edgeIds);
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
          Edges
        </Typography>
        <IconButton color="inherit" onClick={refreshTable}>
          <RefreshIcon />
        </IconButton>
        {user.role !== "Viewer" && (
          <IconButton color="inherit" component={Link} href="/edges/create">
            <AddIcon />
          </IconButton>
        )}
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

      <EdgeTable
        refresh={refresh}
        onSelectionChange={handleSelectEdge}
        selectedRowIds={edges}
        enableSlection={true}
        searchTerm={searchTerm}
      />
    </Box>
  );
}

export default OverviewLayout;
