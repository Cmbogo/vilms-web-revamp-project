
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/27b83e46-fd7f-42c2-ac86-1720d1a73b94.png" 
                alt="VILMS Logo" 
                className="h-16 w-auto mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-600">VILMS</h1>
                <p className="text-xs text-blue-500">Excellence in Education</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <a href="#home" className="text-blue-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-blue-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#programs" className="text-blue-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Programs
              </a>
              <a href="#admissions" className="text-blue-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Admissions
              </a>
              <a href="#contact" className="text-blue-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">
              Apply Now
            </Button>
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
            <a href="#home" className="text-blue-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-blue-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#programs" className="text-blue-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Programs
            </a>
            <a href="#admissions" className="text-blue-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Admissions
            </a>
            <a href="#contact" className="text-blue-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white w-full mt-2">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
