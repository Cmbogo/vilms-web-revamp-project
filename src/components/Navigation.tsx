
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-sky-600">VILMS</h1>
              <p className="text-xs text-sky-500">Excellence in Education</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-sky-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-sky-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#programs" className="text-sky-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Programs
              </a>
              <a href="#admissions" className="text-sky-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Admissions
              </a>
              <a href="#contact" className="text-sky-600 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                Apply Now
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sky-600"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-pink-100">
            <a href="#home" className="text-sky-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-sky-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#programs" className="text-sky-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Programs
            </a>
            <a href="#admissions" className="text-sky-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              Admissions
            </a>
            <a href="#contact" className="text-sky-600 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
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
