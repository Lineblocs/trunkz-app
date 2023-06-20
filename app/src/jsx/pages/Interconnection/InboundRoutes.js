import React from "react";
import { Dropdown } from "react-bootstrap";

export default function InboundRoutes() {
  return (
    <div className="">
      <h2 className="text-primary">Inbound Routes</h2>
      <p>
        Below are the inbound routes on your account.By default,DIDs route via
        Sip Registration.
      </p>

      <div className="mt-3">
        <h4 style={{ fontSize: "20px" }}>Add New Route</h4>
        <div className="basic-form mt-3">
          <form>
            <div className="row ml-0 mr-0">
              <div className="ml-1">
                <label className="form-label">Alias For Route</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Alias For Route"
                />
              </div>
              <div className="ml-4 d-flex flex-column">
                <label className="form-label">Route Type</label>
                <Dropdown className="dropdown custom-dropdown mb-0">
                  <Dropdown.Toggle variant="" className="form-control">
                    Select Route Type
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
              <div className="ml-4">
                <label className="form-label">Route</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Route"
                />
              </div>
              <div className="d-flex ml-4 align-items-end">
                <button className="btn btn-primary">Add Card</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
