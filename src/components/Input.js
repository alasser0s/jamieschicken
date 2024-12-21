export const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-primary font-medium mb-2">{label}</label>
      <input
        className={`w-full px-4 py-2 bg-secondary-light border-2 border-gray-700 rounded-md 
          focus:outline-none focus:border-primary transition-colors duration-300
          text-white placeholder-gray-500 ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
}; 