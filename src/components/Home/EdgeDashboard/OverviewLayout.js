import React from "react";
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

function OverviewLayout() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Edges
        </Typography>
        <IconButton color="inherit">
          <RefreshIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="/edges/create">
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
        />
      </Box>

      <EdgeTable />
    </Box>
  );
}

export default OverviewLayout;