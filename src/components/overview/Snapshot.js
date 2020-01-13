import React from "react";
import { MDBDataTable, MDBTableHead, MDBTableBody } from "mdbreact";

const Snapshot = () => {
  const data = {
    columns: [
      {
        label: [
          <h4 className='snapshot__chart--thead one'>
            Product Name <i class='fas fa-chevron-down orange'></i>
          </h4>
        ],
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: [
          <h4 className='snapshot__chart--thead'>
            Number Sold <i class='fas fa-chevron-down orange'></i>
          </h4>
        ],
        field: "number",
        sort: "asc",
        width: 270
      },
      {
        label: [
          <h4 className='snapshot__chart--thead'>
            Penetration(%) <i class='fas fa-chevron-down orange'></i>
          </h4>
        ],
        field: "pen",
        sort: "asc",
        width: 200
      },
      {
        label: [
          <h4 className='snapshot__chart--thead'>
            Total <i class='fas fa-chevron-down orange'></i>
          </h4>
        ],
        field: "total",
        sort: "asc",
        width: 100
      },
      {
        label: [
          <h4 className='snapshot__chart--thead'>
            Average Profit <i class='fas fa-chevron-down orange'></i>
          </h4>
        ],
        field: "average",
        sort: "asc",
        width: 150
      }
    ],
    rows: [
      {
        name: "Keyfob",
        number: "51",
        pen: "26.05%",
        total: "$38,190",
        average: "$525"
      },
      {
        name: "Warranty",
        number: "15",
        pen: "12.13%",
        total: "$53,360",
        average: "$450"
      },
      {
        name: "Finance Income",
        number: "84",
        pen: "9.08%",
        total: "$40,490",
        average: "$390"
      },
      {
        name: "Bank Bonus",
        number: "156",
        pen: "15.99%",
        total: "$62,390",
        average: "$565"
      },
      {
        name: [<h4 className='red reset'> Buy Down Costs </h4>],
        number: "34",
        pen: "11.33%",
        total: [<h4 className='red reset'> -$49,190 </h4>],
        average: [<h4 className='red reset'> -$365 </h4>]
      }
    ]
  };

  return (
    <div className='snapshot'>
      <div className='snapshot__header'>
        <h2 className='snapshot__header--title'>Top Selling Products</h2>
      </div>
      <MDBDataTable
        className='snapshot__table'
        striped
        bordered
        small
        paging={false}
        searching={false}
        noBottomColumns
        data={data}
      />
    </div>
  );
};

export default Snapshot;
