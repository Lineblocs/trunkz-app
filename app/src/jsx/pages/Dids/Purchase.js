import React from "react";
import { Dropdown } from "react-bootstrap";

export default function Purchase() {
  return (
    <div className="">
      <h2 className="text-primary">DID Purchase (Single Numbers)</h2>

      <div className="mt-3 ">
        <div className="row">
          <div className="col-4">
            <form>
              <div className=" ml-0 mr-0">
                <div className="mt-2">
                  <label className="form-label">Numbers Starts With</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter number"
                  />
                </div>
                <div className="mt-2">
                  <label className="form-label">Numbers Contains</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter number"
                  />
                </div>
                <div className="mt-2 d-flex flex-column">
                  <label className="form-label">Number Type</label>
                  <Dropdown className="dropdown custom-dropdown mb-0">
                    <Dropdown.Toggle variant="" className="form-control">
                      Choose
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/application"
                      >
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
                <div className="mt-2">
                  <label className="form-label">Filter By State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter State,eg:WA"
                  />
                </div>
                <div className="mt-2">
                  <label className="form-label">Filter By Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select Country"
                  />
                </div>
                <div className="d-flex mt-3 align-items-end">
                  <button className="btn btn-primary">Apply Filter</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5">
            {[0, 1, 2, 3].map((index) => {
              return (
                <div
                  className="d-flex justify-content-between border-bottom align-items-center pt-3 pb-3"
                  key={index}
                >
                  <span className="d-flex align-items-center">12001010101</span>
                  <div
                    className=" d-flex flex-column"
                    style={{ rowGap: "5px" }}
                  >
                    <span>monthly Recurring Cost : $25</span>
                    <span>monthly Recurring Cost : $25</span>
                    <span>Type : Long Code</span>
                    <span>Type : Long Code</span>
                    <span>Country : US State</span>
                  </div>
                  <button className="btn btn-secondary text-white">
                    Purchase
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
