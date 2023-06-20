import React from "react";
import { useState } from "react";
import ManageDiDs from "./ManageDids";
import Purchase from "./Purchase";

export default function DiDs() {
  const [activeToggle, setActiveToggle] = useState("Manage");

  return (
    <div className="card">
      <div className="card-body">
        <div className="profile-tab">
          <div className="custom-tab-1">
            <ul className="nav nav-tabs">
              <li
                className="nav-item"
                onClick={() => setActiveToggle("Manage")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "Manage" ? "active show" : ""
                  }`}
                >
                  Manage
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setActiveToggle("Purchase")}
                  className={`nav-link ${
                    activeToggle === "Purchase" ? "active show" : ""
                  }`}
                >
                  Purchase
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveToggle("PurchaseBlocks")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "PurchaseBlocks" ? "active show" : ""
                  }`}
                >
                  Purchase Blocks
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveToggle("PortOrders")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "PortOrders" ? "active show" : ""
                  }`}
                >
                  Port Orders
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveToggle("Emergency")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "Emergency" ? "active show" : ""
                  }`}
                >
                  E911
                </a>
              </li>
              <li className="nav-item" onClick={() => setActiveToggle("CNAM")}>
                <a
                  to="#inter-auth"
                  data-toggle="tab"
                  className={`nav-link ${
                    activeToggle === "CNAM" ? "active show" : ""
                  }`}
                >
                  CNAM
                </a>
              </li>
            </ul>
            <div className="tab-content mt-4">
              <div
                className={`tab-pane fade ${
                  activeToggle === "Manage" ? "active show" : ""
                }`}
              >
                <ManageDiDs/>
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "Purchase" ? "active show" : ""
                }`}
              >
                <Purchase/>
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "PurchaseBlocks" ? "active show" : ""
                }`}
              >
                Purchase Blocks
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "PortOrders" ? "active show" : ""
                }`}
              >
                Port Orders
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "Emergency" ? "active show" : ""
                }`}
              >
                E911
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "CNAM" ? "active show" : ""
                }`}
              >
                CNAM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
