import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Home = () => {
  const gridRef = useRef();
  const router = useRouter();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const staff = [];

    for (let id = 1; id <= 1000; id++) {
      staff.push({
        id: id,
        first_name: "first" + id,
        last_name: "last" + id,
        email: "member" + id + "@company.com",
        phone: "12345" + id,
        office: "place" + id,
        job_title: "Worker " + id,
      });
    }
    setRowData(staff);
  }, []);

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    router.push(`/staff/${selectedRows[0].id}`);
  }, [router]);

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

  const [columnDefs] = useState([
    { headerName: "First Name", field: "first_name" },
    { headerName: "Last Name", field: "last_name" },
    { headerName: "Job Title", field: "job_title" },
    { field: "office" },
    { field: "email" },
    { field: "phone" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: "600px" }}>
      <AgGridReact
        id="staff_grid"
        ref={gridRef}
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        onSelectionChanged={onSelectionChanged}
        rowSelection={"single"}
        style={{ height: "100%", width: "100%" }}
      ></AgGridReact>
    </div>
  );
};

export default Home;
