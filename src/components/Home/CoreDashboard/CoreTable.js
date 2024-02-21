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
import SensorsIcon from "@mui/icons-material/Sensors";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import UserContext from "@/utils/user-context";

export default function CoreTable({
  refresh,
  onSelectionChange,
  selectedRowIds,
  enableSlection,
  filteredRows,
  handleOpenDrawer,
  getTdengineUrl,
  searchTerm,
}) {
  const [rows, setRows] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const { user } = useContext(UserContext);
  const router = useRouter();
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
  const onConsoleIconClicked = (url) => {
    handleOpenDrawer();
    getTdengineUrl(url);
  };
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
      fetchCores();
    }
  }, [searchTerm]);

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: 160 },
      { field: "description", headerName: "Description", width: 180 },
      { field: "url", headerName: "URL", width: 250 },
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
        getActions: (params) => {
          if (user.role !== "Viewer") {
            const basicActions = [
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={deleteCore(params.id)}
              />,
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                onClick={() => {
                  router.push(`/cores/edit/${params.row.id}`);
                }}
                showInMenu
              />,
            ];
            if (params.row.type === "TDengine") {
              basicActions.push(
                <GridActionsCellItem
                  icon={<SensorsIcon />}
                  label="TDengine Console"
                  onClick={() => onConsoleIconClicked(params.row.url)}
                  showInMenu
                />
              );
            }
            return basicActions;
          }
          return [];
        },
      },
    ],
    [deleteCore]
  );

  const fetchCores = useCallback(() => {
    const token = Cookies.get("isv_token");
    if (token && user) {
      httpToBackend
        .get("core/get", { params: { tenant_id: user.tenant_id } })
        .then((res) => {
          console.log(res);
          const cores = res.data.data;
          setAllRows(createRows(cores));
          console.log(cores);
          if (filteredRows && filteredRows.length > 0) {
            const filteredRowsString = filteredRows.map((id) => id.toString());
            console.log(filteredRowsString);
            const newRows = cores.filter((core) =>
              filteredRowsString.includes(core.id.toString())
            );
            console.log(newRows);
            setRows(createRows(newRows));
          } else {
            setRows(createRows(cores));
          }
        })
        .catch((error) => {
          console.error("Error fetching core data:", error);
        });
    } else {
      logout(router);
    }
  }, [router, filteredRows]);

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
