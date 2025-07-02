import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <motion.div
        className="col-md-6 p-4 rounded-4 shadow bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 text-center fw-bold text-primary">Create your Tomato account 🍅</h3>
        <input className="form-control mb-3" placeholder="Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-4" placeholder="Password" type="password" />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary w-100 fw-semibold py-2"
        >
          Signup
        </motion.button>
      </motion.div>
    </div>
  );
}
