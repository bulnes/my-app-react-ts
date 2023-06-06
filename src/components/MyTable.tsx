import { Table } from "@dds/components";
import { useEffect } from "react";

export function MyTable() {
  useEffect(() => {
    const data = [
      {
        columns: [
          { value: 779907637 },
          { value: "OSC" },
          { value: "06/06/2023" },
          { value: "Error" },
        ],
      },
      {
        columns: [
          { value: 707778371 },
          { value: "GC" },
          { value: "06/05/2023" },
          { value: "Warning" },
        ],
      },
      {
        columns: [
          { value: 675658663 },
          { value: "UMF" },
          { value: "06/01/2023" },
          { value: "Blocked" },
        ],
      },
      {
        columns: [
          { value: 856244032 },
          { value: "DSA" },
          { value: "06/06/2022" },
          { value: "Error" },
        ],
      },
    ];
    const columns = [
      { value: "Ticket ID" },
      { value: "Team" },
      { value: "Date" },
      { value: "Status" },
    ];

    const element = document.getElementById("table-465899100");
    Table(element, {
      data,
      columns,
    });
  }, []);

  return (
    <div
      role="table"
      id="table-465899100"
      data-dds="table"
      className="dds__table"
    ></div>
  );
}
