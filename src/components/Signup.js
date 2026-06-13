import { useState } from "react";
import API from "../api/api";

function Signup() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/users/signup", user);
      alert("Signup Successful: " + res.data.email);
    } catch (err) {
      alert("Error in signup");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sign Up</h2>

      <input name="name" className="form-control my-2" placeholder="Name" onChange={handleChange} />
      <input name="email" className="form-control my-2" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" className="form-control my-2" placeholder="Password" onChange={handleChange} />

      <button className="btn btn-success" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;