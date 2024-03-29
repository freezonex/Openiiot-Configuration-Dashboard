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

const appTypes = [{ value: "Grafana" }, { value: "ODM" }, { value: "BI" }];
function AppForm({ isEdit, appId }) {
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
    router.push("/apps");
  };
  const isRequiredFieldEmpty = () => {
    const requiredFields = ["name", "type", "url"];
    return requiredFields.some((fieldName) => {
      const fieldValue = formValues[fieldName];
      return fieldValue.trim() === "";
    });
  };
  const handleAddApp = (event) => {
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
        .post("/app/add", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/apps"))
        .catch((error) => {
          console.error("Create Core failed", error);
        });
    }
  };
  const handleUpdateApp = (event) => {
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
        .post("/app/update", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/apps"))
        .catch((error) => {
          console.error("Update Edge failed", error);
        });
    }
  };
  useEffect(() => {
    if (isEdit) {
      httpToBackend
        .get("/app/get", { params: { id: appId } })
        .then((res) => {
          console.log(res);
          const app = res.data.data[0];
          console.log(app);
          setFormValues({
            id: app.id.toString(),
            name: app.name,
            description: app.description,
            url: app.url,
            type: app.type,
            username: app.username,
            password: app.password,
          });
        })
        .catch((error) => {
          console.error("Get App failed", error);
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
          Update App Component
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Create New App Component
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
        {appTypes.map((option) => (
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
        {isEdit ? (
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "darkgray" },
            }}
            onClick={handleUpdateApp}
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
            onClick={handleAddApp}
          >
            create
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default AppForm;
