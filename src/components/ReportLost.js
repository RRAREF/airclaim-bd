import { useState } from "react";

function ReportLost() {

  const [formData, setFormData] = useState({
    itemName: "",
    bagCode: "",
    ticketNumber: "",
    airport: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lost Report Submitted:", formData);

    alert("Lost item report submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>📦 Report Lost Item</h2>

      <form className="card p-4 mt-3 shadow-sm" onSubmit={handleSubmit}>

        {/* ITEM NAME */}
        <input
          className="form-control mb-2"
          name="itemName"
          placeholder="Item Name (e.g. Black Bag, Mobile)"
          onChange={handleChange}
        />

        {/* BAG CODE (PROOF) */}
        <input
          className="form-control mb-2"
          name="bagCode"
          placeholder="Bag Tag Code (e.g. BG123456)"
          onChange={handleChange}
        />

        {/* TICKET NUMBER (PROOF) */}
        <input
          className="form-control mb-2"
          name="ticketNumber"
          placeholder="Flight Ticket Number (e.g. BGD12345)"
          onChange={handleChange}
        />

        {/* AIRPORT */}
        <select
          className="form-control mb-2"
          name="airport"
          onChange={handleChange}
        >
          <option value="">Select Airport</option>
          <option value="Dhaka">Hazrat Shahjalal International Airport</option>
          <option value="Sylhet">Osmani International Airport</option>
          <option value="Chattogram">Shah Amanat International Airport</option>
          <option value="CoxBazar">Cox’s Bazar Airport</option>
          <option value="Saidpur">Saidpur Airport</option>
        </select>

        {/* DESCRIPTION */}
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Item Description (color, brand, details...)"
          onChange={handleChange}
        />

        <button className="btn btn-danger">
          Submit Lost Report
        </button>

      </form>
    </div>
  );
}

export default ReportLost;