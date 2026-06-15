const ContactMap=() =>{
  return (
    <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-xl shadow-lg">
      <iframe
        title="Location Map"
        src="https://maps.app.goo.gl/xUJh7fcuDspibykc6"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};
export default ContactMap;