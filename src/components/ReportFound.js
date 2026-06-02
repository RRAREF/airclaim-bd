import { useState } from "react";

function ReportFound() {

  const [airport, setAirport] = useState("");

  return (
    <div className="container mt-4">
      <h2>📍 Report Found Item</h2>

      <div className="card p-4 mt-3 shadow-sm">

        <input className="form-control mb-2" placeholder="Item Name" />

        <select
          className="form-control mb-2"
          value={airport}
          onChange={(e) => setAirport(e.target.value)}
        >
          <option value="">Select Airport</option>
          <option value="Dhaka">Hazrat Shahjalal International Airport (Dhaka)</option>
          <option value="Sylhet">Osmani International Airport (Sylhet)</option>
          <option value="Chattogram">Shah Amanat International Airport (Chattogram)</option>
          <option value="CoxBazar">Cox’s Bazar Airport</option>
          <option value="Saidpur">Saidpur Airport</option>
        </select>

        <textarea className="form-control mb-2" placeholder="Description"></textarea>

        <button className="btn btn-success">
          Submit Found Report
        </button>

      </div>
    </div>
  );
}

export default ReportFound;