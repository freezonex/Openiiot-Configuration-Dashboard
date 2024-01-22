"use client";
import React, { useState, useContext, useEffect } from "react";
import {
  Alert,
  Typography,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { httpToBackend } from "@/utils/http";
import { useRouter } from "next/navigation";
import UserContext from "@/utils/user-context";

function TenantForm({ isEdit, tenantName }) {
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    description: "",
    is_default: false,
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
  const handleCheckboxChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };
  const handleAddTenant = (event) => {
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
        is_default: formValues.is_default,
      };
      console.log(body);
      httpToBackend
        .post("/tenant/add", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/tenants"))
        .catch((error) => {
          console.error("Create Tenant failed", error);
        });
    }
  };
  const handleUpdateTenant = (event) => {
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
        is_default: formValues.is_default,
      };
      console.log(body);
      httpToBackend
        .post("/tenant/update", body)
        .then((res) => {
          console.log(res);
        })
        .then(router.push("/tenants"))
        .catch((error) => {
          console.error("Update Tenant failed", error);
        });
    }
  };
  useEffect(() => {
    if (isEdit) {
      httpToBackend
        .get("/tenant/get", { params: { name: tenantName } })
        .then((res) => {
          console.log(res);
          const tenant = res.data.data[0];
          console.log(tenant);
          setFormValues({
            id: tenant.id.toString(),
            name: tenant.name,
            description: tenant.description,
            is_default: tenant.is_default,
          });
        })
        .catch((error) => {
          console.error("Get Tenant failed", error);
        });
    }
  }, []);
  const isRequiredFieldEmpty = () => {
    const requiredFields = ["name"];
    return requiredFields.some((fieldName) => {
      const fieldValue = formValues[fieldName];
      return fieldValue.trim() === "";
    });
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
      {isEdit ? (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Edit Tenant Info
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Create New Tenant
        </Typography>
      )}
      {alertOpen && isRequiredFieldEmpty() && (
        <Alert severity="error">Site URL cannot be empty.</Alert>
      )}
      <TextField
        autoFocus
        required
        margin="dense"
        id="enter-site-url"
        name="name"
        label="Tenant Name"
        type="text"
        value={formValues.name}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        margin="dense"
        id="enter-site-description"
        label="Description"
        name="description"
        type="text"
        value={formValues.description}
        onChange={handleValueChange}
        fullWidth
        variant="standard"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formValues.is_default}
            onChange={handleCheckboxChange}
            name="is_default"
          />
        }
        label="Is Default"
        sx={{ mt: 1, justifyContent: "flex-end" }}
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
            onClick={handleUpdateTenant}
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
            onClick={handleAddTenant}
          >
            create
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default TenantForm;
