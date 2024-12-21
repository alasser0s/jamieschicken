import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Reservations } from './pages/Reservations';
import { Button } from './components/Button';
import { MobileNav } from './components/MobileNav';

const deals = [
  {
    name: "Combo #1",
    price: "$12.99",
    description: "2pc Chicken + Fries + Shake",
    image: "/menu/combo1.jpg"
  },
  {
    name: "Family Box",
    price: "$29.99",
    description: "8pc Chicken + 4 Sides + 2 Shakes",
    image: "/menu/family-box.jpg"
  },
  {
    name: "Student Deal",
    price: "$9.99",
    description: "Wings + Fries + Shake",
    image: "/menu/student-deal.jpg"
  }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <div className="min-h-screen bg-secondary flex flex-col">
        {/* Navigation */}
        <nav className="bg-secondary-light shadow-lg sticky top-0 z-50">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="Jamie's Chicken & Shake" className="h-16 w-auto" />
                <span className="text-primary font-bold text-2xl">Jamie's</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="nav-link text-lg">Home</Link>
                <Link to="/menu" className="nav-link text-lg">Menu</Link>
                <Link to="/about" className="nav-link text-lg">About</Link>
                <Link to="/contact" className="nav-link text-lg">Contact</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="primary" className="hidden md:block text-lg px-8">
                  Order Now 🍗
                </Button>
                <button
                  className="md:hidden text-gray-400 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <div className="relative bg-secondary-dark overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src="/hero-bg.jpg"
                      alt="Delicious Fried Chicken"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="relative container-custom py-20 md:py-32">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h1 className="text-6xl md:text-7xl font-bold">
                          <span className="text-primary">CRISPY</span>
                          <span className="text-white block">CRUNCHY</span>
                          <span className="text-primary">TASTY!</span>
                        </h1>
                        <p className="text-xl text-gray-300 mt-6 mb-8">
                          The best fried chicken in town! Order now and get it delivered in 30 minutes 🚀
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button variant="primary" size="lg" className="text-lg px-8" onClick={() => window.location.href = '/menu'}>
                            Order Now 🍗
                          </Button>
                          <Button variant="secondary" size="lg" className="text-lg px-8">
                            View Menu 📋
                          </Button>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block"
                      >
                        <img
                          src="/hero-chicken.png"
                          alt="Crispy Chicken"
                          className="w-full max-w-lg mx-auto drop-shadow-2xl"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Best Deals Section */}
                <section className="py-16 bg-secondary">
                  <div className="container-custom">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center mb-12"
                    >
                      <h2 className="text-5xl font-bold mb-4">
                        <span className="text-primary">BEST</span>
                        <span className="text-white"> DEALS</span>
                      </h2>
                      <p className="text-xl text-gray-300">Grab these awesome combos! 🔥</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                      {deals.map((deal, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-secondary-light rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <img
                            src={deal.image}
                            alt={deal.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-2xl font-bold text-primary">{deal.name}</h3>
                              <span className="text-3xl font-bold text-white">{deal.price}</span>
                            </div>
                            <p className="text-gray-300 text-lg mb-6">{deal.description}</p>
                            <Button variant="primary" className="w-full text-lg">
                              Order Now 🛒
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* App Download Section */}
                <section className="py-16 bg-primary">
                  <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h2 className="text-4xl font-bold text-secondary-dark mb-6">
                          Get the Jamie's App! 📱
                        </h2>
                        <ul className="space-y-4 text-xl text-secondary-dark mb-8">
                          <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Exclusive app-only deals
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Earn rewards with every order
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Skip the line with pre-ordering
                          </li>
                        </ul>
                        <div className="flex gap-4">
                          <img src="/app-store.png" alt="App Store" className="h-12" />
                          <img src="/play-store.png" alt="Play Store" className="h-12" />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                      >
                        <img
                          src="/app-preview.png"
                          alt="Jamie's App"
                          className="w-full max-w-md mx-auto drop-shadow-2xl"
                        />
                      </motion.div>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-secondary-light">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-primary font-bold text-xl mb-4">Jamie's</h3>
                <p className="text-gray-400">The best chicken & shakes in town! 🍗</p>
              </div>
              <div>
                <h3 className="text-primary font-bold text-lg mb-4">Opening Hours</h3>
                <p className="text-gray-400">Mon-Thu: 11am - 10pm</p>
                <p className="text-gray-400">Fri-Sun: 11am - 11pm</p>
              </div>
              <div>
                <h3 className="text-primary font-bold text-lg mb-4">Contact</h3>
                <p className="text-gray-400">📞 (555) 123-4567</p>
                <p className="text-gray-400">📧 info@jamieschicken.com</p>
              </div>
              <div>
                <h3 className="text-primary font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary text-2xl">📱</a>
                  <a href="#" className="text-gray-400 hover:text-primary text-2xl">📸</a>
                  <a href="#" className="text-gray-400 hover:text-primary text-2xl">🐦</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2023 Jamie's Chicken & Shake. All rights reserved. 🍗</p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App; 