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
import { BlackButton } from "@/components/Utils/BlackButton";

const userRoles = [
  { value: "SuperAdmin" },
  { value: "Admin" },
  { value: "Editor" },
  { value: "Viewer" },
];
function UserForm({ isEdit, userName }) {
  const [formValues, setFormValues] = useState({
    id: "",
    username: "",
    description: "",
    password: "",
    password_confirm: "",
    role: "",
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (
      isRequiredFieldEmpty() ||
      formValues.password !== formValues.password_confirm
    ) {
      setAlertOpen(true);
      return;
    } else {
      setAlertOpen(false);
      console.log(user);
      const body = {
        username: formValues.username,
        password: formValues.password,
        description: formValues.description,
        tenant_id: user.tenant_id,
        role: formValues.role,
        auth_id: user.name,
        source: "Self created",
      };
      console.log(body);
      httpToBackend
        .post("/user/add", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/users"))
        .catch((error) => {
          console.error("Create User failed", error);
        });
    }
  };
  const handleUpdateUser = (event) => {
    event.preventDefault();
    if (isRequiredFieldEmpty()) {
      setAlertOpen(true);
      return;
    } else {
      setAlertOpen(false);
      console.log(user);
      const body = {
        id: formValues.id,
        username: formValues.username,
        description: formValues.description,
        role: formValues.role,
      };
      console.log(body);
      httpToBackend
        .post("/user/update", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/users"))
        .catch((error) => {
          console.error("Update User failed", error);
        });
    }
  };
  const handleBack = () => {
    router.push("/users");
  };

  const isRequiredFieldEmpty = () => {
    const requiredFields = isEdit
      ? ["username", "role"]
      : ["username", "password", "password_confirm", "role"];
    return requiredFields.some((fieldName) => {
      const fieldValue = formValues[fieldName];
      return fieldValue.trim() === "";
    });
  };
  useEffect(() => {
    if (isEdit) {
      console.log(user);
      httpToBackend
        .get("/user/get", {
          params: { username: userName },
        })
        .then((res) => {
          console.log(res);
          const currentUser = res.data.data[0];
          console.log(currentUser);
          setFormValues({
            id: currentUser.id.toString(),
            username: currentUser.username,
            description: currentUser.description,
            role: currentUser.role,
          });
        })
        .catch((error) => {
          console.error("Get User failed", error);
        });
    }
  }, []);
  return (
    <Box>
      <BlackButton onClick={handleBack}>back</BlackButton>
      {isEdit ? (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Edit User Info
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Create New User
        </Typography>
      )}
      {alertOpen && isRequiredFieldEmpty() && (
        <Alert sx={{ mb: 1 }} severity="error">
          Please fill in all the required fields.
        </Alert>
      )}
      {alertOpen && formValues.password !== formValues.password_confirm && (
        <Alert severity="error">Passwords do not match.</Alert>
      )}
      <TextField
        autoFocus
        required
        margin="dense"
        id="username"
        name="username"
        label="User Name"
        type="text"
        value={formValues.username}
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
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formValues.password}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="password_confirm"
        name="password_confirm"
        label="Comfirm Your Password"
        type="password"
        value={formValues.password_confirm}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />

      <TextField
        required
        id="role"
        name="role"
        margin="dense"
        select
        label="Select Role"
        defaultValue=""
        value={formValues.role}
        onChange={handleValueChange}
        helperText="Please select the type of your edge site"
        variant="standard"
      >
        {userRoles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        {isEdit ? (
          <BlackButton onClick={handleUpdateUser}>update</BlackButton>
        ) : (
          <BlackButton onClick={handleAddUser}>create</BlackButton>
        )}
      </Box>
    </Box>
  );
}

export default UserForm;
