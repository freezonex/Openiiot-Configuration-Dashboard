"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import Cookies from "js-cookie";
import { httpToBackend } from "@/utils/http";
import { useRouter } from "next/navigation";

const columns = [
  { field: "name", headerName: "Name", width: 160 },
  { field: "description", headerName: "Description", width: 180 },
  { field: "is_default", headerName: "IsDefault", type: "boolean", width: 120 },
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

export default function TenantTable() {
  const [rows, setRows] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("tenant/get")
        .then((res) => {
          const tenants = res.data.data;
          return createRows(tenants);
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

  function createRows(tenants) {
    const newRows = tenants.map((tenant) => ({
      id: tenant.id,
      name: tenant.name,
      description: tenant.description,
      is_default: tenant.is_default,
      create_time: new Date(tenant.create_time),
      update_time: new Date(tenant.update_time),
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
