import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0a2a45] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-[#0f3a5d] font-bold text-xl">
                R
              </div>
              <h1 className="font-bold text-xl">ReDA Lab</h1> */}
              <img
                src="/ReDa-Icon.png"
                alt="ReDA Lab Logo"
                className="w-40 h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Research and Data Analytics Laboratory
              <br />
              Institute of Technology of Cambodia
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Working Hours</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <Calendar size={18} className="text-yellow-400 shrink-0" />
                <span>Monday - Saturday</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-yellow-400 shrink-0" />
                <span>8:00 am - 5:00 pm</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-lg mb-6">Location</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0" />
                <span>
                  Institute of Technology of Cambodia,
                  <br />
                  Department of Applied Mathematics and Statistics
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400 shrink-0" />
                <span>01101213</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400 shrink-0" />
                <span>01101213</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400 shrink-0" />
                <span>ReDa@itc.edu.kh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-400 text-sm">
          <p>&copy; 2025 ReDA Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
