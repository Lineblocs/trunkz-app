import React from "react";

export default function SipStatus() {
  const tableData = {
    header: [
      "POP (Point of Presence)",
      "Edge Node",
      "Received From",
      "Last Refresh",
      "User-Agent",
    ],
    data: [
      {
        pop: "us-west",
        edge: "121",
        from: "Jackson",
        refresh: "09-12-2022",
        agent: "freeSwitch",
      },
      {
        pop: "us-east",
        edge: "87",
        from: "Smith",
        refresh: "11-30-2023",
        agent: "Asterisk",
      },
      {
        pop: "eu-central",
        edge: "53",
        from: "Johnson",
        refresh: "06-15-2022",
        agent: "Kamailio",
      },
    ],
  };

  return (
    <div className="">
      <h2 className="text-primary">Active Sip Registrations</h2>
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
                  <td className="center">{item.pop}</td>
                  <td className="left strong">{item.edge}</td>
                  <td className="left">{item.from}</td>
                  <td className="right">{item.refresh}</td>
                  <td className="center">{item.agent}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
