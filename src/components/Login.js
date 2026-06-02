function Login({ setIsLoggedIn }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login validation
    setIsLoggedIn(true);
  };

  return (
    <div className="container mt-4">
      <h2>🔐 Login</h2>

      <form className="card p-4 mt-3 shadow-sm" onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" />
        <input className="form-control mb-2" type="password" placeholder="Password" />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;