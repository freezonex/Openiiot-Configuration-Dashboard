"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";

import {
  TextField,
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Alert,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { FlowContext } from "@/utils/flow-provider";
import UserContext from "@/utils/user-context";
import EdgeTable from "../EdgeDashboard/EdgeTable";
import CoreTable from "../CoreDashboard/CoreTable";
import AppTable from "../AppDashboard/AppTable";
import { httpToBackend } from "@/utils/http";

const steps = ["FreeFlow Edge", "FreeFlow Core", "Dashboard"];

const FlowCreate = ({ isEdit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [edges, setEdges] = useState([]);
  const [cores, setCores] = useState([]);
  const [apps, setApps] = useState([]);

  const { setRefresh } = useContext(FlowContext);
  const { user } = useContext(UserContext);
  useEffect(() => {});
  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSelectEdge = (edgeIds) => {
    setEdges(edgeIds);
  };
  const handleSelectCore = useCallback((coreIds) => {
    setCores(coreIds);
  }, []);
  const handleSelectApp = useCallback((AppIds) => {
    setApps(AppIds);
  }, []);

  const handleFinish = async (event) => {
    event.preventDefault();
    const body = {
      name: formValues.name,
      description: formValues.description,
      tenant_id: user.tenant_id,
      flow_type: "nondemo",
      edge_ids: edges,
      core_ids: cores,
      app_ids: apps,
    };
    console.log(body);
    httpToBackend
      .post("/flow/add", body)
      .then((res) => {
        console.log(res);
        return res.data.id.toString();
      })
      .then((id) => {
        console.log(id);
      });
  };

  const isStepOptional = (step) => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  console.log(formValues, edges, cores, apps);
  const handleReset = () => {
    setActiveStep(0);
  };

  const handleDone = () => {
    router.push(`/flows/${flowInfo.id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": { backgroundColor: "darkgray" },
          }}
          onClick={() => {
            router.push("/flows");
          }}
        >
          back
        </Button>
        {isEdit ? (
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
            Edit Flow Info
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
            Create New Flow
          </Typography>
        )}
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Flow Name"
          type="text"
          value={formValues.name}
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
        <Stepper sx={{ width: "100%", mt: 5 }} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Alert severity="success" sx={{ mt: 5, mg: 5 }}>
            All steps completed - you&apos;re finished
          </Alert>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleDone}> Done </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ flex: "1", flexDirection: "column", width: "100%" }}>
            <Typography sx={{ mt: 2, mb: 1 }} variant="h6">
              Step {activeStep + 1} {steps[activeStep]}
            </Typography>
            {activeStep === 0 && (
              <Box>
                <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                  Selet edges from the table.
                </Typography>
                <EdgeTable
                  onSelectionChange={handleSelectEdge}
                  selectedRowIds={edges}
                />
              </Box>
            )}
            {activeStep === 1 && (
              <Box>
                <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                  Selet cores from the table.
                </Typography>
                <CoreTable
                  onSelectionChange={handleSelectCore}
                  selectedRowIds={cores}
                />
              </Box>
            )}
            {activeStep === 2 && (
              <Box>
                <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                  Selet apps from the table.
                </Typography>
                <AppTable
                  onSelectionChange={handleSelectApp}
                  selectedRowIds={apps}
                />
              </Box>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              p: 2,
              justifyContent: "space-between",
            }}
          >
            {activeStep !== 0 && (
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { backgroundColor: "darkgray" },
                }}
              >
                Back
              </Button>
            )}

            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "darkgray" },
              }}
              onClick={
                activeStep === steps.length - 1 ? handleFinish : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
export default FlowCreate;
