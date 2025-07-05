import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <>
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        paddingTop: '70px', // in case of fixed navbar
        paddingBottom: '0px',
        backgroundColor: 'white', // ✅ white background
      }}
    >
      <motion.div
        className="w-100 px-4 py-5 rounded-4 text-white"
        style={{
          maxWidth: '400px',
          width: '100%',
          background: 'linear-gradient(to right, #434343, #000000)', // ✅ dark bg only inside form
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 text-center fw-bold text-light">Login to Tomato 🍅</h3>
        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-4" placeholder="Password" type="password" />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-success w-100 fw-semibold py-2"
        >
          Login
        </motion.button>
      </motion.div>
    
    </div>
      
      </>
  );
}
