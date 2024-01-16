"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { httpToBackend } from "@/utils/http";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const columns = [
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
];

export default function EdgeTable() {
  const [rows, setRows] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("edge/get")
        .then((res) => {
          console.log(res);
          const users = res.data.data;
          console.log(users);
          return createRows(users);
        })
        .then((data) => setRows(data))
        .catch((error) => {
          console.error("Error fetching user data:", error);
          router.push("/login");
        });
    } else {
      //router.push("/login");
    }
  }, []);
  function createRows(edges) {
    const newRows = edges.map((edge) => ({
      id: edge.id,
      name: edge.name,
      description: edge.description,
      type: edge.type,
      url: edge.url,
      create_time: new Date(edge.create_time),
      update_time: new Date(edge.update_time),
      // ... 这里可以添加更多需要的字段
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
