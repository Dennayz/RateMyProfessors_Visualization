import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import {
  fetchAllProfessors,
  getProfessorByTid,
  deleteProfessorByTid,
} from "../../controller/api";

import "../styles/HistoryTable.css";

const HistoryTable = () => {
  const [professorsList, setProfessorsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const resp = await fetchAllProfessors();
      setProfessorsList(resp);
    }
    fetchData();
  }, []);

  const columns = [
    {
      name: "tid",
      label: "Tid",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "bio",
      label: "Bio",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "date",
      label: "Date_Searched",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    tableBodyHeight: "650px",
    selectableRowsHeader: false,
    selectableRows: "single",
    selectableRowsOnClick: false,
    rowHover: true,
    onRowClick: (rowData, rowMeta) => {
      fetchDataById(rowData[0]);
    },
    onRowsDelete: (rowsDeleted, newTableData) => {
      const oldProfs = professorsList.map((prof) => prof.tid);
      const existingProfs = newTableData.map((prof) => prof[0]);

      const difference = oldProfs.filter((x) => !existingProfs.includes(x));
      deleteProf(difference[0]);
    },
  };

  const fetchDataById = async (tid) => {
    sessionStorage.clear();
    const professorData = await getProfessorByTid(tid);
    sessionStorage.setItem("responseData", JSON.stringify(professorData));
    sessionStorage.setItem("tid", tid);
    history.push({
      pathname: `/professor`,
      search: "?" + new URLSearchParams({ tid: tid }).toString(),
    });
  };

  const deleteProf = async (tid) => {
    await deleteProfessorByTid(tid);
    const resp = await fetchAllProfessors();
    setProfessorsList(resp);
  };

  return (
    <div className="history-table-container">
      <div className="history-table-wrapper">
        <MUIDataTable
          title={"Search History"}
          data={professorsList}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default HistoryTable;
