import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", user);

      console.log("Response:", res.data);

      if (res.data && res.data.toLowerCase().includes("login")) {
        setIsLoggedIn(true);
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid email or password");
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>

      <input
        name="email"
        className="form-control my-2"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        className="form-control my-2"
        placeholder="Password"
        onChange={handleChange}
      />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;