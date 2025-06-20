import React from "react";

const Notifications = () => {
  const alerts = [
    { id: 1, type: "info", message: "Market opened at 9:15 AM" },
    { id: 2, type: "success", message: "Trade executed successfully" },
    { id: 3, type: "warning", message: "High volatility detected" },
    { id: 4, type: "error", message: "Connection to NSE lost, retrying..." },
  ];

  const colorMap = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 h-full overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={`p-3 rounded-md text-sm ${colorMap[alert.type]}`}
          >
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
