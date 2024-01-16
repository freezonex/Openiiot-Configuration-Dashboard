"use client";
import React, { useState } from "react";
import {
  Alert,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";

function page() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const router = useRouter();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAddSite = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setAlertOpen(true);
      return;
    }
  };
  const handleBack = () => {
    router.push("/tenants");
  };
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": { backgroundColor: "darkgray" },
        }}
        onClick={handleBack}
      >
        back
      </Button>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Create New Tenant
      </Typography>
      <TextField
        autoFocus
        margin="dense"
        id="enter-site-url"
        label="Tenant Name"
        type="text"
        value={name}
        onChange={handleNameChange}
        fullWidth
        variant="standard"
      />
      {alertOpen && name.trim() === "" && (
        <Alert severity="error">Site URL cannot be empty.</Alert>
      )}
      <TextField
        autoFocus
        margin="dense"
        id="enter-site-description"
        label="Description"
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        fullWidth
        variant="standard"
      />
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": { backgroundColor: "darkgray" },
          }}
          onClick={handleAddSite}
        >
          create
        </Button>
      </Box>
    </Box>
  );
}

export default page;
