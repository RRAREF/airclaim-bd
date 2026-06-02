import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReportLost from "./components/ReportLost";
import ReportFound from "./components/ReportFound";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/lost"
          element={
            isLoggedIn ? <ReportLost /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/found"
          element={
            isLoggedIn ? <ReportFound /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;