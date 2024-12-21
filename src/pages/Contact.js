import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Map } from '../components/Map';

const locations = [
  {
    name: "Downtown",
    address: "123 Food Street",
    phone: "(555) 123-4567",
    hours: "11 AM - 10 PM",
    image: "/locations/downtown.jpg"
  },
  {
    name: "Westside",
    address: "456 Chicken Ave",
    phone: "(555) 234-5678",
    hours: "11 AM - 11 PM",
    image: "/locations/westside.jpg"
  }
];

const faqs = [
  {
    question: "Do you deliver? 🚚",
    answer: "Yes! We deliver within a 5-mile radius. Orders usually arrive in 30 minutes or less!"
  },
  {
    question: "What's your secret recipe? 🤫",
    answer: "Nice try! But that's a secret we'll never tell. What we can say is that we use only the freshest ingredients!"
  },
  {
    question: "Do you cater? 🎉",
    answer: "Absolutely! We love catering parties and events. Contact us for special group pricing!"
  }
];

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <div className="relative bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact/hero.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-primary">Let's Talk</span>
              <span className="text-white block">Chicken! 🍗</span>
            </h1>
            <p className="text-xl text-gray-300">
              Questions? Comments? Chicken emergencies? We're here for you!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Contact */}
      <section className="py-12 bg-secondary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
              <p className="text-gray-300">hello@jamieschicken.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-primary mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-2xl">📸</a>
                <a href="#" className="text-2xl">🐦</a>
                <a href="#" className="text-2xl">👍</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            <span className="text-primary">Our</span>
            <span className="text-white"> Locations 📍</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-light rounded-xl overflow-hidden"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{location.name}</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📍 {location.address}</p>
                    <p>📞 {location.phone}</p>
                    <p>🕒 {location.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            <span className="text-primary">FAQ</span>
            <span className="text-white">s 🤔</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary-light rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Send Us a Message 💌
            </h2>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                <p className="text-gray-300 mb-6">
                  Thanks for reaching out! We'll get back to you faster than you can say "crispy chicken"!
                </p>
                <Button onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="your@email.com"
                  required
                />
                <div>
                  <label className="block text-primary font-medium mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full px-4 py-2 bg-secondary border-2 border-gray-700 rounded-md 
                      focus:outline-none focus:border-primary transition-colors duration-300
                      text-white placeholder-gray-500 h-32 resize-none"
                    placeholder="What's on your mind? 🤔"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending... 🚀' : 'Send Message 📨'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-custom">
          <Map />
        </div>
      </section>
    </div>
  );
}; 