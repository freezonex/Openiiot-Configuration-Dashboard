"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Cookies from "js-cookie";
import { httpToBackend, logout } from "@/utils/http";
import SearchIcon from "@mui/icons-material/Search";

import { useRouter } from "next/navigation";
import EdgeTable from "../EdgeDashboard/EdgeTable";
import CoreTable from "../CoreDashboard/CoreTable";
import AppTable from "../AppDashboard/AppTable";

function FlowDetails({ id }) {
  //   const [refresh, setRefresh] = useState({});
  const [flow, setFlow] = useState({});
  const router = useRouter();
  //   const handleSelectFlow = (flowIds) => {
  //     setFlows(flowIds);
  //   };
  //   const refreshTable = () => {
  //     setRefresh({});
  //   };
  const fetchFlow = useCallback(async () => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("flow/get", { params: { id: id } })
        .then((res) => {
          console.log(res);
          const flow = res.data.data[0];
          setFlow(flow);
        })
        .catch((error) => {
          console.error("Error fetching flow data:", error);
        });
    } else {
      logout();
    }
  }, [router]);

  useEffect(() => {
    fetchFlow();
  }, [fetchFlow]);
  return (
    <Box sx={{ width: "100%" }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1, mb: 1 }}>
        <Link underline="hover" color="inherit" href="/flows">
          Flows
        </Link>
        <Typography color="text.primary">{flow.name}</Typography>
      </Breadcrumbs>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 1 }}>
        Flow Name: {flow.name}
      </Typography>
      <Typography variant="body2" component="div" sx={{ flexGrow: 1, mb: 1 }}>
        Description: {flow.description}
      </Typography>
      <Typography variant="body2" component="div" sx={{ flexGrow: 1, mb: 1 }}>
        Flow Type: {flow.flow_type}
      </Typography>
      <Typography variant="body2" component="div" sx={{ flexGrow: 1, mb: 1 }}>
        Last Modified By: {flow.last_modified_by}
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 1 }}>
        Edges:
      </Typography>
      <EdgeTable
        onSelectionChange={() => {}}
        enableSelection={false}
        filteredRows={flow.edge_ids}
      ></EdgeTable>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mt: 1, mb: 1 }}
      >
        Cores:
      </Typography>
      <CoreTable
        onSelectionChange={() => {}}
        enableSelection={false}
        filteredRows={flow.core_ids}
      ></CoreTable>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mt: 1, mb: 1 }}
      >
        Apps:
      </Typography>
      <AppTable
        onSelectionChange={() => {}}
        enableSelection={false}
        filteredRows={flow.app_ids}
      ></AppTable>
      <Box sx={{ width: "50%", mt: 2, mb: 2 }}></Box>
    </Box>
  );
}

export default FlowDetails;
