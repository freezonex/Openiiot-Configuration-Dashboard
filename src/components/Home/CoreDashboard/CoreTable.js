"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Cookies from "js-cookie";
import { httpToBackend } from "@/utils/http";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

export default function CoreTable({ refresh }) {
  const [rows, setRows] = useState([]);
  const router = useRouter();

  const deleteCore = useCallback(
    (id) => () => {
      console.log(id, typeof id);
      const token = Cookies.get("isv_token");

      if (token) {
        httpToBackend
          .post("core/delete", { id })
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
        //router.push("/login");
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
            onClick={deleteCore(params.id)}
          />,
        ],
      },
    ],
    [deleteCore]
  );

  const fetchCores = useCallback(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("core/get")
        .then((res) => {
          console.log(res);
          const cores = res.data.data;
          console.log(cores);
          setRows(createRows(cores)); // 直接更新状态
        })
        .catch((error) => {
          console.error("Error fetching core data:", error);
        });
    } else {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    fetchCores();
    console.log("refresh clicked");
  }, [fetchCores, refresh]);

  function createRows(cores) {
    const newRows = cores.map((core) => ({
      id: core.id.toString(),
      name: core.name,
      description: core.description,
      type: core.type,
      url: core.url,
      create_time: new Date(core.create_time),
      update_time: new Date(core.update_time),
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
      />
    </div>
  );
}
