import React from "react";
import "./index.css";
const table = ({ displayData }) => {
  return (
    <div className="tableContainer">
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage funded</th>
            <th>Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {displayData?.map((element, index) => (
            <tr key={index}>
              <td>{element["s.no"]}</td>
              <td>{element["percentage.funded"]}</td>
              <td>{element["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default table;
