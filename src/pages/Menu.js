import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';

const categories = [
  { id: 'chicken', name: '🍗 Chicken' },
  { id: 'wings', name: '🔥 Wings' },
  { id: 'shakes', name: '🥤 Shakes' },
  { id: 'sides', name: '🍟 Sides' },
  { id: 'deals', name: '🔥 Deals' }
];

const menuItems = {
  chicken: [
    {
      id: 1,
      title: "Classic Fried Chicken",
      description: "Our signature crispy fried chicken",
      price: "$12.99",
      image: "/menu/classic-chicken.jpg",
      options: ["2pc", "3pc", "4pc"]
    },
    {
      id: 2,
      title: "Spicy Chicken",
      description: "Hot and crispy with our special spice blend",
      price: "$13.99",
      image: "/menu/spicy-chicken.jpg",
      options: ["2pc", "3pc", "4pc"]
    }
  ],
  wings: [
    {
      id: 3,
      title: "Buffalo Wings",
      description: "Classic buffalo sauce with ranch",
      price: "$10.99",
      image: "/menu/buffalo-wings.jpg",
      options: ["6pc", "12pc", "24pc"]
    },
    {
      id: 4,
      title: "BBQ Wings",
      description: "Sweet and tangy BBQ sauce",
      price: "$10.99",
      image: "/menu/bbq-wings.jpg",
      options: ["6pc", "12pc", "24pc"]
    }
  ],
  shakes: [
    {
      id: 5,
      title: "Classic Vanilla",
      description: "Rich and creamy vanilla shake",
      price: "$5.99",
      image: "/menu/vanilla-shake.jpg",
      options: ["Regular", "Large"]
    },
    {
      id: 6,
      title: "Chocolate Fudge",
      description: "Decadent chocolate shake",
      price: "$6.99",
      image: "/menu/chocolate-shake.jpg",
      options: ["Regular", "Large"]
    }
  ],
  sides: [
    {
      id: 7,
      title: "Crispy Fries",
      description: "Golden crispy fries",
      price: "$3.99",
      image: "/menu/fries.jpg",
      options: ["Regular", "Large"]
    },
    {
      id: 8,
      title: "Coleslaw",
      description: "Fresh and creamy coleslaw",
      price: "$2.99",
      image: "/menu/coleslaw.jpg",
      options: ["Regular", "Large"]
    }
  ],
  deals: [
    {
      id: 9,
      title: "Family Feast",
      description: "8pc Chicken + 3 Large Sides + 4 Drinks",
      price: "$39.99",
      image: "/menu/family-feast.jpg"
    },
    {
      id: 10,
      title: "Lunch Special",
      description: "2pc Chicken + Side + Drink",
      price: "$9.99",
      image: "/menu/lunch-special.jpg"
    }
  ]
};

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('chicken');
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (itemId, option) => {
    setSelectedOptions(prev => ({ ...prev, [itemId]: option }));
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Category Navigation */}
      <div className="bg-secondary-light sticky top-[72px] z-40 shadow-lg">
        <div className="container-custom py-4 overflow-x-auto">
          <div className="flex space-x-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-lg font-bold whitespace-nowrap transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-primary text-secondary-dark' 
                    : 'bg-secondary-light text-gray-400 hover:text-primary'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {menuItems[activeCategory].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary-light rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                  <span className="text-3xl font-bold text-white">{item.price}</span>
                </div>
                <p className="text-gray-300 text-lg mb-6">{item.description}</p>
                
                {item.options && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.options.map(option => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(item.id, option)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors
                          ${selectedOptions[item.id] === option
                            ? 'bg-primary text-secondary-dark'
                            : 'bg-secondary text-gray-400 hover:text-primary'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                
                <button className="w-full bg-primary text-secondary-dark py-3 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors">
                  Add to Cart 🛒
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}; 