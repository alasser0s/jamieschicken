import { motion } from 'framer-motion';

const features = [
  {
    icon: "🍗",
    title: "Fresh Ingredients",
    description: "Our chicken is delivered fresh daily and hand-breaded to order!"
  },
  {
    icon: "⚡",
    title: "Fast Service",
    description: "Get your food in 15 minutes or it's free! That's our promise!"
  },
  {
    icon: "🌶️",
    title: "Secret Recipe",
    description: "Our special blend of 11 herbs and spices will blow your mind!"
  },
  {
    icon: "🥤",
    title: "Epic Shakes",
    description: "Thick, creamy shakes made with premium ice cream!"
  }
];

const stats = [
  { number: "1M+", label: "Happy Customers" },
  { number: "50K+", label: "Orders Monthly" },
  { number: "4.8", label: "App Rating" },
  { number: "15min", label: "Delivery Time" }
];

export const About = () => {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <div className="relative bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about/kitchen.jpg"
            alt="Our Kitchen"
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
              <span className="text-primary">We Make</span>
              <span className="text-white block">Awesome Food!</span>
            </h1>
            <p className="text-xl text-gray-300">
              Started in 2023, Jamie's has been serving up the crispiest chicken
              and the creamiest shakes in town! 🍗🥤
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-light p-6 rounded-xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Story 📖
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Jamie's started with a simple dream: to make the best dang chicken
                  in town! We weren't fancy, we just wanted to make good food that
                  makes people happy.
                </p>
                <p>
                  Our secret? We keep it real! Fresh ingredients, awesome staff,
                  and a whole lot of love in every piece of chicken we fry! 🍗
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src="/about/team.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-secondary-dark mb-6">
            Hungry Yet? 😋
          </h2>
          <p className="text-xl text-secondary-dark mb-8">
            Come visit us or order online for the best chicken experience!
          </p>
          <button className="bg-secondary-dark text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-secondary transition-colors">
            Order Now 🍗
          </button>
        </div>
      </section>
    </div>
  );
}; 