export default function Signup() {
  return (
    <div className="container mt-5 col-md-6">
      <h2>Create your Tomato account</h2>
      <input className="form-control my-2" placeholder="Name" />
      <input className="form-control my-2" placeholder="Email" />
      <input className="form-control my-2" placeholder="Password" type="password" />
      <button className="btn btn-primary w-100">Signup</button>
    </div>
  );
}
