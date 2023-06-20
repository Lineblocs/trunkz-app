import React from "react";
import { useState } from "react";
import SipStatus from "./SipStatus";
import InboundRoutes from "./InboundRoutes";

export default function Interconnection() {
  const [activeToggle, setActiveToggle] = useState("Status");

  React.useEffect(() => {
    console.log(" => activeToggle: ", activeToggle);
  }, [activeToggle]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="profile-tab">
          <div className="custom-tab-1">
            <ul className="nav nav-tabs">
              <li
                className="nav-item"
                onClick={() => setActiveToggle("Status")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "Status" ? "active show" : ""
                  }`}
                >
                  Status
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setActiveToggle("Registration")}
                  className={`nav-link ${
                    activeToggle === "Registration" ? "active show" : ""
                  }`}
                >
                  Registration
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveToggle("Inbound")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "Inbound" ? "active show" : ""
                  }`}
                >
                  Inbound Routes
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveToggle("Authentication")}
              >
                <a
                  className={`nav-link ${
                    activeToggle === "Authentication" ? "active show" : ""
                  }`}
                >
                  IP Authentication
                </a>
              </li>
            </ul>
            <div className="tab-content mt-4">
              <div
                className={`tab-pane fade ${
                  activeToggle === "Status" ? "active show" : ""
                }`}
              >
                <SipStatus />
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "Registration" ? "active show" : ""
                }`}
              >
                Registration
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "Inbound" ? "active show" : ""
                }`}
              >
                <InboundRoutes />
              </div>
              <div
                className={`tab-pane fade ${
                  activeToggle === "Authentication" ? "active show" : ""
                }`}
              >
                Authentication
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
