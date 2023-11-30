import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";

const CoreLayout = (props) => {
  const { handleConfirmCoreData } = props;
  const [formData, setFormData] = useState({
    mqtt_url: "",
    tsdb_url: "",
    s3_url: "",
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
    handleConfirmCoreData(formData);
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
            <Typography>MQTT Broker</Typography>
            <TextField
              label="url"
              name="mqtt_url"
              value={formData.mqtt_url}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Typography sx={{ mt: 2 }}>Time Series Database</Typography>
            <TextField
              label="url"
              name="tsdb_url"
              value={formData.tsdb_url}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Typography sx={{ mt: 2 }}>S3</Typography>
            <TextField
              label="url"
              name="s3_url"
              value={formData.s3_url}
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

export default CoreLayout;
