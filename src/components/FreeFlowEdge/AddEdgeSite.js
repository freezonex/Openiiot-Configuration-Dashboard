import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
const edgeTypes = [
  { value: "NodeRed" },
  { value: "Rest API" },
  { value: "PG/Mysql" },
];
function AddEdgeSite(props) {
  const { open, handleClose, handleAddSite, alertOpen } = props;
  const [siteAddress, setSiteAddress] = useState("");
  const [siteType, setSiteType] = useState("NodeRed");
  const [siteDescription, setSiteDescription] = useState("");

  const handleTypeSelect = (event) => {
    setSiteType(event.target.value);
  };
  const handleUrlChange = (event) => {
    setSiteAddress(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setSiteDescription(event.target.value);
  };
  const onAddClick = () => {
    handleAddSite(siteAddress, siteType, siteDescription);
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Add Another Edge Site</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new edge site, please select the type and enter your url if
          applicable.
        </DialogContentText>
        <TextField
          id="select-edge-site-type"
          select
          label="Select"
          defaultValue="NodeRed"
          value={siteType}
          onChange={handleTypeSelect}
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
          margin="dense"
          id="enter-site-url"
          label="Site Address"
          type="url"
          value={siteAddress}
          onChange={handleUrlChange}
          fullWidth
          variant="standard"
        />
        {alertOpen && siteAddress.trim() === "" && (
          <Alert severity="error">Site Address cannot be empty.</Alert>
        )}
        <TextField
          autoFocus
          margin="dense"
          id="enter-site-description"
          label="Description"
          type="text"
          value={siteDescription}
          onChange={handleDescriptionChange}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onAddClick}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEdgeSite;
