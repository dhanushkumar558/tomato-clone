export default function Login() {
  return (
    <div className="container mt-5 col-md-6">
      <h2>Login to Tomato</h2>
      <input className="form-control my-2" placeholder="Email" />
      <input className="form-control my-2" placeholder="Password" type="password" />
      <button className="btn btn-success w-100">Login</button>
    </div>
  );
}
