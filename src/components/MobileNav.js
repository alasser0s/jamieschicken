import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const MobileNav = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-64 bg-secondary-light shadow-xl z-50"
          >
            <div className="p-6 flex flex-col h-full">
              <button
                onClick={onClose}
                className="self-end text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              <nav className="mt-8 flex flex-col space-y-4">
                <Link
                  to="/"
                  className="nav-link text-lg py-2"
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  to="/menu"
                  className="nav-link text-lg py-2"
                  onClick={onClose}
                >
                  Menu
                </Link>
                <Link
                  to="/reservations"
                  className="nav-link text-lg py-2"
                  onClick={onClose}
                >
                  Reservations
                </Link>
                <Link
                  to="/about"
                  className="nav-link text-lg py-2"
                  onClick={onClose}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="nav-link text-lg py-2"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </nav>
              
              <div className="mt-auto">
                <Button variant="primary" className="w-full">
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 