import React, { useState } from "react";

const TradeControls = () => {
  const [strategy, setStrategy] = useState("BankNifty");
  const [entry, setEntry] = useState("Auto");
  const [lotSize, setLotSize] = useState("1");

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Trade Setup</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Strategy Dropdown */}
        <div>
          <label className="block text-sm mb-1">Strategy</label>
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option>BankNifty</option>
            <option>Nifty</option>
            <option>FinNifty</option>
          </select>
        </div>

        {/* Entry Type */}
        <div>
          <label className="block text-sm mb-1">Entry Type</label>
          <select
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option>Auto</option>
            <option>Manual</option>
          </select>
        </div>

        {/* Lot Size */}
        <div>
          <label className="block text-sm mb-1">Lot Size</label>
          <input
            type="number"
            min={1}
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeControls;
