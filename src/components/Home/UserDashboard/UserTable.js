"use client";
import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useContext,
} from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Cookies from "js-cookie";
import DeleteIcon from "@mui/icons-material/Delete";
import { httpToBackend, logout } from "@/utils/http";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import UserContext from "@/utils/user-context";

export default function UserTable({ refresh, searchTerm }) {
  const [rows, setRows] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const { user } = useContext(UserContext);
  const router = useRouter();

  const deleteUser = useCallback(
    (id) => () => {
      console.log(id, typeof id);
      const token = Cookies.get("isv_token");

      if (token) {
        httpToBackend
          .post("user/delete", { id })
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
      fetchUsers();
    }
  }, [searchTerm]);
  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: 160 },
      {
        field: "isCurrentUser",
        valueGetter: (params) => {
          if (params.row.name === user.name) {
            return true;
          }
          return false;
        },
        type: "boolean",
      },
      { field: "description", headerName: "Description", width: 180 },
      { field: "role", headerName: "Role", width: 120 },
      { field: "auth_id", headerName: "Auth ID", width: 120 },
      { field: "source", headerName: "Source", width: 120 },
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
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              router.push(`/users/edit/${params.row.name}`);
            }}
          />,
        ],
      },
    ],
    [deleteUser]
  );

  const fetchUsers = useCallback(() => {
    const token = Cookies.get("isv_token");
    if (token && user) {
      httpToBackend
        .get("user/get", { params: { tenant_id: user.tenant_id } })
        .then((res) => {
          console.log(res);
          const users = res.data.data;
          console.log(users);
          setRows(createRows(users));
          setAllRows(createRows(users));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      logout(router);
    }
  }, [router]);

  useEffect(() => {
    fetchUsers();
    console.log("refresh clicked");
  }, [fetchUsers, deleteUser, refresh]);

  function createRows(users) {
    const newRows = users.map((user) => ({
      id: user.id.toString(),
      name: user.username,
      description: user.description,
      role: user.role,
      auth_id: user.auth_id,
      source: user.source,
      create_time: new Date(user.create_time),
      update_time: new Date(user.update_time),
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
