
import { Mail, Map, Calendar } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">VILMS</h3>
            <p className="text-gray-300 mb-4">
              Vision Institute of Leadership and Management Studies - Empowering leaders, 
              transforming communities through excellence in education.
            </p>
            <p className="text-sm text-gray-400">
              TVETA Registration: TVETA/PRIVATE/TVC/0141/2018
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-yellow-400 transition-colors">Programs</a></li>
              <li><a href="#admissions" className="hover:text-yellow-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">E-Learning Portal</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Student Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Counseling Psychology</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Business Management</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">ICT Programs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Leadership Development</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Short Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <Map className="w-5 h-5 mr-3 mt-1 text-yellow-400" />
                <div>
                  <p className="text-sm">Kamiti Road Behind Deliverance Church</p>
                  <p className="text-sm">Zimmerman, Nairobi</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <a href="mailto:info@vilms.ac.ke" className="text-sm hover:text-yellow-400 transition-colors">
                  info@vilms.ac.ke
                </a>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-sm">Mon - Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vision Institute of Leadership and Management Studies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Student Handbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
