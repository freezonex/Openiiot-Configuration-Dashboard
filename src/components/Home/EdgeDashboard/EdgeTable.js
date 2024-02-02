"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from "react";
import Cookies from "js-cookie";
import { httpToBackend, logout } from "@/utils/http";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import UserContext from "@/utils/user-context";

export default function EdgeTable({
  refresh,
  onSelectionChange,
  selectedRowIds,
  enableSlection,
  filteredRows,
  searchTerm,
}) {
  const [rows, setRows] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const deleteEdge = useCallback(
    (id) => () => {
      console.log(id, typeof id);
      const token = Cookies.get("isv_token");

      if (token) {
        httpToBackend
          .post("edge/delete", { id })
          .then((res) => {
            console.log(res);
            setRows((currentRows) =>
              currentRows.filter((row) => row.id !== id)
            );
          })
          .catch((error) => {
            console.error("Error deleting edge:", error);
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
  const filteredSearchRows = allRows.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.url.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  useEffect(() => {
    console.log("useEffect triggered:", searchTerm, allRows);
    if (searchTerm !== "") {
      setRows(filteredSearchRows);
    } else {
      fetchEdges();
    }
  }, [searchTerm]);

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
            onClick={deleteEdge(params.id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              router.push(`/edges/edit/${params.row.id}`);
            }}
          />,
        ],
      },
    ],
    [deleteEdge]
  );

  const fetchEdges = useCallback(async () => {
    const token = Cookies.get("isv_token");
    if (token && user) {
      httpToBackend
        .get("edge/get", { params: { tenant_id: user.tenant_id } })
        .then((res) => {
          if (res.status !== 500) {
            const edges = res.data.data;
            setAllRows(createRows(edges));
            if (filteredRows && filteredRows.length > 0) {
              const filteredRowsString = filteredRows.map((id) =>
                id.toString()
              );
              const newRows = edges.filter((edge) =>
                filteredRowsString.includes(edge.id.toString())
              );
              console.log(newRows);
              setRows(createRows(newRows));
            } else {
              setRows(createRows(edges));
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching edge data:", error);
        });
    } else {
      logout(router);
    }
  }, [router, filteredRows]);

  useEffect(() => {
    fetchEdges();
  }, [fetchEdges, refresh]);

  function createRows(edges) {
    const newRows = edges.map((edge) => ({
      id: edge.id.toString(),
      name: edge.name,
      description: edge.description,
      type: edge.type,
      url: edge.url,
      create_time: new Date(edge.create_time),
      update_time: new Date(edge.update_time),
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
