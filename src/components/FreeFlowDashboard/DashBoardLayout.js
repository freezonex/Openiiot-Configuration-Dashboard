import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";

const DashboardLayout = () => {
  const [formData, setFormData] = useState({
    oodm_url: "",
    grafana_url: "",
    bi_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: add logic here
    console.log("Form Data:", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: "80%" }} margin="normal">
          <FormGroup>
            <Typography>OODM</Typography>
            <TextField
              label="url"
              name="oodm_url"
              value={formData.oodm_url}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Typography sx={{ mt: 2 }}>Grafana</Typography>
            <TextField
              label="url"
              name="grafana_url"
              value={formData.grafana_url}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Typography sx={{ mt: 2 }}>BI</Typography>
            <TextField
              label="url"
              name="bi_url"
              value={formData.bi_url}
              onChange={handleChange}
              margin="normal"
            />
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Confirm
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default DashboardLayout;
