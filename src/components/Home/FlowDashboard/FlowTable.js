"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Cookies from "js-cookie";
import { httpToBackend } from "@/utils/http";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

export default function FlowTable({
  refresh,
  onSelectionChange,
  selectedRowIds,
}) {
  const [rows, setRows] = useState([]);
  const router = useRouter();
  console.log(selectedRowIds);
  const deleteFlow = useCallback(
    (id) => () => {
      console.log(id, typeof id);
      const token = Cookies.get("isv_token");

      if (token) {
        httpToBackend
          .post("flow/delete", { id })
          .then((res) => {
            console.log(res);
            setRows((currentRows) =>
              currentRows.filter((row) => row.id !== id)
            );
          })
          .catch((error) => {
            console.error("Error deleting flow:", error);
          });
      } else {
        router.push("/login");
      }
    },
    []
  );
  const [selectionModel, setSelectionModel] = useState(selectedRowIds);

  useEffect(() => {
    setSelectionModel(selectedRowIds);
  }, [selectedRowIds]);
  useEffect(() => {
    onSelectionChange(selectionModel);
  }, [selectionModel, onSelectionChange]);
  const handleSelectionModelChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
  };

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: 120 },
      { field: "description", headerName: "Description", width: 180 },
      { field: "type", headerName: "Type", width: 90 },
      { field: "num_edges", headerName: "No. of Edges", width: 120 },
      { field: "num_cores", headerName: "No. of Cores", width: 120 },
      { field: "num_apps", headerName: "No. of Apps", width: 120 },
      {
        field: "update_time",
        headerName: "Update time",
        type: "dateTime",
        width: 180,
      },
      {
        field: "create_time",
        headerName: "Create time",
        type: "dateTime",
        width: 180,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteFlow(params.id)}
          />,
        ],
      },
    ],
    [deleteFlow]
  );

  const fetchFlows = useCallback(async () => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("flow/get")
        .then((res) => {
          const flows = res.data.data;
          setRows(createRows(flows)); // 直接更新状态
        })
        .catch((error) => {
          console.error("Error fetching flow data:", error);
        });
    } else {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    fetchFlows();
  }, [fetchFlows, refresh]);

  function createRows(flows) {
    const newRows = flows.map((flow) => ({
      id: flow.id.toString(),
      name: flow.name,
      description: flow.description,
      type: flow.flow_type,
      num_edges: flow.edge_ids.length,
      num_cores: flow.core_ids.length,
      num_apps: flow.app_ids.length,
      create_time: new Date(flow.create_time),
      update_time: new Date(flow.update_time),
    }));
    return newRows;
  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </div>
  );
}
