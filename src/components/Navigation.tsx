
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/27b83e46-fd7f-42c2-ac86-1720d1a73b94.png" 
                alt="VILMS Logo" 
                className="h-16 w-auto mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-600">VILMS</h1>
                <p className="text-xs text-blue-500">Excellence in Education</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
                }`}
              >
                About
              </Link>
              <Link 
                to="/programs" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/programs') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
                }`}
              >
                Programs
              </Link>
              <Link 
                to="/admissions" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/admissions') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
                }`}
              >
                Admissions
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link to="/admissions">
              <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                Apply Now
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/programs') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/admissions" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/admissions') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') ? 'text-pink-400' : 'text-blue-600 hover:text-pink-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white w-full mt-2">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
