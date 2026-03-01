const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="font-bold text-lg">ReDA Lab</h3>
          <p className="text-sm mt-2">© 2025 ReDA Lab</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Working Hours</h4>
          <p>Monday - Saturday</p>
          <p>8:00 am - 5:00 pm</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Location</h4>
          <p>Institute of Technology of Cambodia</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>0101213</p>
          <p>ReDA@itc.edu.kh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;