import { motion } from 'framer-motion';

export const Card = ({
  title,
  description,
  price,
  image,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`bg-secondary-light rounded-lg overflow-hidden shadow-xl ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <span className="text-primary font-semibold">{price}</span>
        </div>
        <p className="text-gray-400">{description}</p>
        <button className="mt-4 w-full btn-primary">
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}; 