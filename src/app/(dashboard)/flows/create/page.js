"use client";
import React, { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import EdgeLayout from "@/components/FreeFlowEdge/EdgeLayout";

import CoreLayout from "@/components/FreeFlowCore/CoreLayout";
import DashboardLayout from "@/components/FreeFlowDashboard/DashBoardLayout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FlowContext } from "@/utils/flow-provider";
import UserContext from "@/utils/user-context";

const steps = ["FreeFlow Edge", "FreeFlow Core", "Dashboard"];

const Flow = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const searchParams = useSearchParams();
  const [flowInfo, setFlowInfo] = useState({
    name: searchParams.get("name"),
    description: searchParams.get("description"),
  });
  const [edges, setEdges] = useState([]);
  const [coreData, setCoreData] = useState({});
  const [dashboardData, setDashboardData] = useState({});
  const { setRefresh } = useContext(FlowContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (flowInfo.id) {
      console.log(flowInfo.id);
      handleNext();
    }
  }, [flowInfo]);
  const handleAddEdge = (siteAddress, siteType, siteDescription) => {
    setEdges([
      ...edges,
      { url: siteAddress, type: siteType, description: siteDescription },
    ]);
  };

  const handleDeleteEdge = (siteAddress) => {
    setEdges(edges.filter((edge) => edge.url != siteAddress));
  };

  const handleConfirmCoreData = (data) => {
    setCoreData(data);
  };

  const handleConfirmDashboardData = (data) => {
    setDashboardData(data);
  };

  const handleFinish = async (event) => {
    event.preventDefault();
    const body = {
      flowInfo,
      userInfo: user,
      edgeInfo: { list: edges },
      coreInfo: coreData,
      dashboardInfo: dashboardData,
    };
    console.log(body);

    const response = await fetch("/api/flows/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setFlowInfo({ ...flowInfo, id: result.data.id });
      setRefresh({});
    } else {
      console.error("Failed to create the flow");
    }
  };

  const isStepOptional = (step) => {
    return step === 2;
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
        <Typography variant="h6" gutterBottom>
          Create a new Flow
        </Typography>
        <Stepper sx={{ width: "100%" }} activeStep={activeStep}>
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
              <EdgeLayout
                edgeList={edges}
                handleAddEdge={handleAddEdge}
                handleDeleteEdge={handleDeleteEdge}
              />
            )}
            {activeStep === 1 && (
              <CoreLayout
                handleConfirmCoreData={handleConfirmCoreData}
                core={{}}
              />
            )}
            {activeStep === 2 && (
              <DashboardLayout
                handleConfirmDashboardData={handleConfirmDashboardData}
              />
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
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
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
export default Flow;
