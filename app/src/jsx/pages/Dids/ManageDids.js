import React from "react";
import { Dropdown } from "react-bootstrap";
export default function ManageDiDs() {
  const tableData = {
    header: [
      "DID",
      "Alias",
      "Type",
      "Route",
      "FallOver Route",
      "CNAM Lookups",
      "CNAM Storage",
      "E911",
    ],
    data: [
      {
        did: "1616161616",
        alias: "My NYC number",
        Type: "standard",
        Route: "09-12-2022",
        fallOver: "freeSwitch",
        lookup: "Yes",
        storage: "Regence Inc",
      },
      {
        did: "9876543210",
        alias: "My California number",
        Type: "premium",
        Route: "07-01-2023",
        fallOver: "asterisk",
        lookup: "No",
        storage: "Acme Corp",
      },
      {
        did: "1234567890",
        alias: "My Texas number",
        Type: "standard",
        Route: "11-30-2022",
        fallOver: "kamailio",
        lookup: "Yes",
        storage: "Tech Solutions LLC",
      },
    ],
  };

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <h2 className="text-primary">Manage DiDs</h2>
        <Dropdown className="dropdown custom-dropdown mb-0">
          <Dropdown.Toggle variant="" className="btn btn-sm btn-facebook">
            Download your DiDs (.csv)
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item className="dropdown-item" to="/application">
              Details
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdown-item text-danger"
              to="/application"
            >
              Cancel
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="mt-4">
        <div
          className="d-flex align-items-center"
          style={{ columnGap: "32px" }}
        >
          <div>
            <h3 className="m-b-0 text-center">20</h3>
            <span>numbers Selected</span>
          </div>
          <Dropdown className="dropdown custom-dropdown mb-0">
            <Dropdown.Toggle
              variant=""
              className="btn btn-sm btn-outline-primary"
            >
              Choose a DID Action
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
              <Dropdown.Item className="dropdown-item" to="/application">
                Details
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item text-danger"
                to="/application"
              >
                Cancel
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="btn btn-primary btn-sm">Apply Action</button>
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-end">
            <div className="input-group search-area d-lg-inline-flex d-none">
              <input
                type="text"
                className="form-control"
                placeholder="Search Here..."
                style={{ height: "41px" }}
              />
              <div className="input-group-append">
                <button className="input-group-text">
                  <i className="flaticon-381-search-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-responsive-lg text-black">
              <thead>
                <tr>
                  {tableData.header.map((item, index) => {
                    return (
                      <th className="center" key={index}>
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {tableData.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="center">{item.did}</td>
                      <td className="left strong">{item.alias}</td>
                      <td className="left">{item.Type}</td>
                      <td className="right">{item.Route}</td>
                      <td className="center">{item.fallOver}</td>
                      <td className="center">{item.lookup}</td>
                      <td className="center">{item.storage}</td>
                      <td className="center">-</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
