
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-800">VILMS</h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#programs" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Programs
              </a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Admissions
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Apply Now
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#programs" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              Programs
            </a>
            <a href="#admissions" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              Admissions
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full mt-2">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
