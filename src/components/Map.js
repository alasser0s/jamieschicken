export const Map = ({ className = '' }) => {
  return (
    <div className={`relative h-96 bg-secondary-light rounded-lg overflow-hidden ${className}`}>
      <iframe
        title="Restaurant Location"
        className="absolute inset-0 w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DCsDMwJzI2LjYiTiAwwrAwNyc0MC43Ilc!5e0!3m2!1sen!2suk!4v1635959562000!5m2!1sen!2suk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}; 