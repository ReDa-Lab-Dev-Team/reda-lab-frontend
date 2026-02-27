const Navbar = () => {
  return (
    <nav className="absolute w-full z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">ReDA Lab</h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>Home</li>
          <li>About Us</li>
          <li>Research Unit</li>
          <li>Training Services</li>
          <li>Community</li>
          <li>Publication</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;