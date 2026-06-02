function Signup({ setIsLoggedIn }) {

  const handleSignup = (e) => {
    e.preventDefault();

    // fake signup success
    setIsLoggedIn(true);
  };

  return (
    <div className="container mt-4">
      <h2>📝 Sign Up</h2>

      <form className="card p-4 mt-3 shadow-sm" onSubmit={handleSignup}>
        <input className="form-control mb-2" placeholder="Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <input className="form-control mb-2" type="password" placeholder="Password" />

        <button className="btn btn-success">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;