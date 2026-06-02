function Home() {
  return (
    <div className="container mt-4">

      {/* HERO */}
      <div className="p-5 bg-light text-center rounded shadow-sm">
        <h1>✈️ AirClaim BD</h1>
        <p>Smart Airport Lost & Found Management System (Bangladesh)</p>
      </div>

      {/* AIRPORT TILES */}
      <h4 className="mt-5">Supported Airports</h4>

      <div className="row mt-3">

        <div className="col-md-6 col-lg-4 mt-3">
          <div className="card p-3 shadow-sm text-center">
            <h5>✈️ Dhaka</h5>
            <p>Hazrat Shahjalal International Airport</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mt-3">
          <div className="card p-3 shadow-sm text-center">
            <h5>✈️ Sylhet</h5>
            <p>Osmani International Airport</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mt-3">
          <div className="card p-3 shadow-sm text-center">
            <h5>✈️ Chattogram</h5>
            <p>Shah Amanat International Airport</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mt-3">
          <div className="card p-3 shadow-sm text-center">
            <h5>✈️ Cox’s Bazar</h5>
            <p>Cox’s Bazar Airport</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mt-3">
          <div className="card p-3 shadow-sm text-center">
            <h5>✈️ Saidpur</h5>
            <p>Saidpur Airport</p>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="row mt-5 text-center">

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h3>120+</h3>
            <p>Lost Items</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h3>85+</h3>
            <p>Found Items</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h3>60+</h3>
            <p>Recovered</p>
          </div>
        </div>

      </div>

      {/* RECENT */}
      <h4 className="mt-5">Recent Reports</h4>

      <div className="card p-3 mt-2 shadow-sm">
        🧳 Black Backpack found at Dhaka Airport
      </div>

      <div className="card p-3 mt-2 shadow-sm">
        📱 Mobile lost at Sylhet Airport
      </div>

    </div>
  );
}

export default Home;