import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const Reservations = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Basic validation
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    if (!form.guests) newErrors.guests = 'Number of guests is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically make an API call to save the reservation
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setIsSuccess(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        notes: ''
      });
    } catch (error) {
      setErrors({ submit: 'Failed to submit reservation. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-primary mb-8">Make a Reservation</h1>
        
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-800 text-white p-6 rounded-lg mb-8"
          >
            <h2 className="text-xl font-bold mb-2">Reservation Submitted!</h2>
            <p>Thank you for your reservation. We'll contact you shortly to confirm your booking.</p>
            <Button
              className="mt-4"
              onClick={() => setIsSuccess(false)}
            >
              Make Another Reservation
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
                placeholder="John Doe"
              />
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                error={errors.email}
                placeholder="john@example.com"
              />
              <Input
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                error={errors.phone}
                placeholder="(555) 123-4567"
              />
              <Input
                label="Number of Guests"
                type="number"
                min="1"
                max="10"
                value={form.guests}
                onChange={handleChange('guests')}
                error={errors.guests}
              />
              <Input
                label="Date"
                type="date"
                value={form.date}
                onChange={handleChange('date')}
                error={errors.date}
              />
              <Input
                label="Time"
                type="time"
                value={form.time}
                onChange={handleChange('time')}
                error={errors.time}
              />
            </div>
            
            <div>
              <label className="block text-primary font-medium mb-2">Special Requests</label>
              <textarea
                className="w-full px-4 py-2 bg-secondary-light border-2 border-gray-700 rounded-md 
                  focus:outline-none focus:border-primary transition-colors duration-300
                  text-white placeholder-gray-500 h-32 resize-none"
                value={form.notes}
                onChange={handleChange('notes')}
                placeholder="Any special requests or dietary requirements?"
              />
            </div>

            {errors.submit && (
              <p className="text-red-500 text-sm">{errors.submit}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Make Reservation'}
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}; 