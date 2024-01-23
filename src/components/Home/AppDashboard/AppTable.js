"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Cookies from "js-cookie";
import { httpToBackend } from "@/utils/http";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

export default function AppTable({
  refresh,
  onSelectionChange,
  selectedRowIds,
  enableSlection,
  filteredRows,
}) {
  const [rows, setRows] = useState([]);
  const router = useRouter();

  const deleteApp = useCallback(
    (id) => () => {
      console.log(id, typeof id);
      const token = Cookies.get("isv_token");

      if (token) {
        httpToBackend
          .post("app/delete", { id })
          .then((res) => {
            console.log(res);
            setRows((currentRows) =>
              currentRows.filter((row) => row.id !== id)
            );
          })
          .catch((error) => {
            console.error("Error deleting core:", error);
          });
      } else {
        router.push("/login");
      }
    },
    []
  );

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: 160 },
      { field: "description", headerName: "Description", width: 180 },
      { field: "url", headerName: "URL", width: 200 },
      { field: "type", headerName: "Type", width: 90 },
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
            onClick={deleteApp(params.id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              router.push(`/apps/edit/${params.row.id}`);
            }}
          />,
        ],
      },
    ],
    [deleteApp]
  );

  const fetchApps = useCallback(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("app/get")
        .then((res) => {
          console.log(res);
          const apps = res.data.data;
          console.log(apps);
          if (filteredRows && filteredRows.length > 0) {
            const filteredRowsString = filteredRows.map((id) => id.toString());
            const newRows = apps.filter((app) =>
              filteredRowsString.includes(app.id.toString())
            );
            setRows(createRows(newRows));
            console.log(newRows);
          } else {
            setRows(createRows(apps));
          }
        })
        .catch((error) => {
          console.error("Error fetching app data:", error);
        });
    } else {
      router.push("/login");
    }
  }, [router, filteredRows]);

  useEffect(() => {
    fetchApps();
    console.log("refresh clicked");
  }, [fetchApps, refresh]);
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
  function createRows(apps) {
    const newRows = apps.map((app) => ({
      id: app.id.toString(),
      name: app.name,
      description: app.description,
      type: app.type,
      url: app.url,
      create_time: new Date(app.create_time),
      update_time: new Date(app.update_time),
    }));
    return newRows;
  }
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        autoHeight={true}
        pageSizeOptions={[5, 10]}
        checkboxSelection={enableSlection}
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </div>
  );
}
