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

function AddFlow(props) {
  const { open, handleClose, handleAddFlow, alertOpen } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onAddClick = async (e) => {
    e.preventDefault();

    handleAddFlow(name, description);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Add A New Flow</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new flow, please name it in your preferrable way. Fill in the
          description to make it recognizable.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="enter-site-url"
          label="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          fullWidth
          variant="standard"
        />
        {alertOpen && name.trim() === "" && (
          <Alert severity="error">Flow name cannot be empty.</Alert>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onAddClick}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddFlow;
