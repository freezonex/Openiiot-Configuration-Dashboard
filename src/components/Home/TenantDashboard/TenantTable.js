"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Cookies from "js-cookie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { httpToBackend } from "@/utils/http";
import { useRouter } from "next/navigation";

export default function TenantTable({ refresh, searchTerm }) {
  const [rows, setRows] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const router = useRouter();
  const deleteTenant = useCallback(
    (id) => () => {
      console.log(id, typeof id);
      const token = Cookies.get("isv_token");

      if (token) {
        httpToBackend
          .post("tenant/delete", { id })
          .then((res) => {
            console.log(res);
            setRows((currentRows) =>
              currentRows.filter((row) => row.id !== id)
            );
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      } else {
        router.push("/login");
      }
    },
    []
  );

  const filteredRows = allRows.filter((row) => {
    console.log(
      row.description,
      searchTerm,
      row.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  useEffect(() => {
    console.log("useEffect triggered:", searchTerm, allRows);
    if (searchTerm !== "") {
      setRows(filteredRows);
    } else {
      fetchTenants();
    }
  }, [searchTerm]);
  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: 160 },
      { field: "description", headerName: "Description", width: 180 },
      {
        field: "is_default",
        headerName: "IsDefault",
        type: "boolean",
        width: 120,
      },
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
            onClick={deleteTenant(params.id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              router.push(`/tenants/edit/${params.row.name}`);
            }}
          />,
        ],
      },
    ],
    [deleteTenant]
  );

  const fetchTenants = useCallback(() => {
    const token = Cookies.get("isv_token");
    if (token) {
      httpToBackend
        .get("tenant/get")
        .then((res) => {
          console.log(res);
          const tenants = res.data.data;
          console.log(tenants);
          setRows(createRows(tenants));
          setAllRows(createRows(tenants));
        })
        .catch((error) => {
          console.error("Error fetching tenants data:", error);
        });
    } else {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    fetchTenants();
    console.log("refresh clicked");
  }, [fetchTenants, refresh]);

  function createRows(tenants) {
    const newRows = tenants.map((tenant) => ({
      id: tenant.id.toString(),
      name: tenant.name,
      description: tenant.description,
      is_default: tenant.is_default,
      create_time: new Date(tenant.create_time),
      update_time: new Date(tenant.update_time),
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
        autoHeight={true}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
