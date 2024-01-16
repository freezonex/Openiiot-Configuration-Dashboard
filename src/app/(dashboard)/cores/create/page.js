"use client";
import React, { useState, useContext } from "react";
import {
  Alert,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { httpToBackend } from "@/utils/http";
import UserContext from "@/utils/user-context";

const coreTypes = [{ value: "MQTT Broker" }, { value: "TDengine" }];
function page() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    url: "",
    type: "",
    username: "",
    password: "",
  });
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState(false);
  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBack = () => {
    router.push("/cores");
  };
  const isRequiredFieldEmpty = () => {
    const requiredFields = ["name", "type", "url"];
    return requiredFields.some((fieldName) => {
      const fieldValue = formValues[fieldName];
      return fieldValue.trim() === "";
    });
  };
  const handleAddCore = (event) => {
    event.preventDefault();
    if (isRequiredFieldEmpty()) {
      setAlertOpen(true);
      return;
    } else {
      setAlertOpen(false);
      console.log(user);
      const body = {
        name: formValues.name,
        description: formValues.description,
        tenant_id: user.tenant_id,
        url: formValues.url,
        username: formValues.username,
        password: formValues.password,
        type: formValues.type,
      };
      console.log(body);
      httpToBackend
        .post("/core/add", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/cores"))
        .catch((error) => {
          console.error("Create Core failed", error);
        });
    }
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
        Create New Core Component
      </Typography>
      {alertOpen && isRequiredFieldEmpty() && (
        <Alert severity="error">Please fill in all the required fields.</Alert>
      )}
      <TextField
        id="type"
        name="type"
        select
        required
        label="Select"
        value={formValues.type}
        onChange={handleValueChange}
        helperText="Please select the type of your edge site"
        variant="standard"
      >
        {coreTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="name"
        label="Name"
        type="text"
        value={formValues.name}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="url"
        name="url"
        label="Core URL"
        type="url"
        value={formValues.url}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        margin="dense"
        id="description"
        name="description"
        label="Description"
        type="text"
        value={formValues.description}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="username"
        name="username"
        label="User Name (Core component)"
        type="text"
        value={formValues.username}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="password"
        name="password"
        label="Password (Core component)"
        type="password"
        value={formValues.password}
        onChange={handleValueChange}
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
        <Button onClick={handleAddCore}>create</Button>
      </Box>
    </Box>
  );
}

export default page;
