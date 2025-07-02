import { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import { motion } from 'framer-motion';

export default function SavedItems() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedItems') || '[]');
    setSaved(items);
  }, []);

  return (
    <div className="container mt-4">
      <motion.h3
        className="mb-4 text-primary fw-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🔖 Your Saved Foods
      </motion.h3>

      {saved.length === 0 ? (
        <motion.p
          className="text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          No items saved yet.
        </motion.p>
      ) : (
        <motion.div
          className="row g-3 mt-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {saved.map(item => (
            <motion.div
              className="col-6 col-md-3"
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FoodCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
