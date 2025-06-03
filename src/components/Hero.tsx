
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vision Institute of
              <span className="text-yellow-400"> Leadership</span> &
              <span className="text-yellow-400"> Management</span> Studies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Empowering Leaders. Transforming Communities. Excellence in Professional Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span>TVETA Registered Institution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Diploma & Certificate Programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Flexible Learning Options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Professional Development Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-yellow-400" />
        </div>
      </div>
    </section>
  );
};
