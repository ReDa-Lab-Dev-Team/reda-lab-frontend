const ContactMap = () => {
  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Department%20of%20Applied%20Mathematics%20and%20Statistics%20Phnom%20Penh&output=embed"
      />
    </div>
  );
};

export default ContactMap;