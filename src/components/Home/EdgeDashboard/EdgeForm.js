"use client";
import React, { useState, useEffect, useContext } from "react";
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

const edgeTypes = [
  { value: "NodeRed" },
  { value: "Rest API" },
  { value: "PG/Mysql" },
];
function EdgeForm({ isEdit, edgeId }) {
  const [formValues, setFormValues] = useState({
    id: "",
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
    router.push("/edges");
  };
  const isRequiredFieldEmpty = () => {
    const requiredFields = ["name", "type", "url"];
    return requiredFields.some((fieldName) => {
      const fieldValue = formValues[fieldName];
      return fieldValue.trim() === "";
    });
  };
  const handleAddSite = (event) => {
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
        .post("/edge/add", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/edges"))
        .catch((error) => {
          console.error("Create Edge failed", error);
        });
    }
  };
  const handleUpdateEdge = (event) => {
    event.preventDefault();
    if (isRequiredFieldEmpty()) {
      setAlertOpen(true);
      return;
    } else {
      setAlertOpen(false);
      console.log(user);
      const body = {
        id: formValues.id,
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
        .post("/edge/update", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/edges"))
        .catch((error) => {
          console.error("Update Edge failed", error);
        });
    }
  };
  useEffect(() => {
    if (isEdit) {
      httpToBackend
        .get("/edge/get", { params: { id: edgeId } })
        .then((res) => {
          console.log(res);
          const edge = res.data.data[0];
          console.log(edge);
          setFormValues({
            id: edge.id.toString(),
            name: edge.name,
            description: edge.description,
            url: edge.url,
            type: edge.type,
            username: edge.username,
            password: edge.password,
          });
        })
        .catch((error) => {
          console.error("Get Edge failed", error);
        });
    }
  }, []);

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
      {isEdit ? (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Edit Edge Site
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Create New Edge Site
        </Typography>
      )}
      {alertOpen && isRequiredFieldEmpty() && (
        <Alert severity="error">Please fill in all the required fields.</Alert>
      )}
      <TextField
        id="type"
        name="type"
        select
        required
        label="Select"
        defaultValue="NodeRed"
        value={formValues.type}
        onChange={handleValueChange}
        helperText="Please select the type of your edge site"
        variant="standard"
      >
        {edgeTypes.map((option) => (
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
        label="Site URL"
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
        label="User Name (Nodered)"
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
        label="Password (Nodered)"
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
        {isEdit ? (
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "darkgray" },
            }}
            onClick={handleUpdateEdge}
          >
            update
          </Button>
        ) : (
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
        )}
      </Box>
    </Box>
  );
}

export default EdgeForm;
