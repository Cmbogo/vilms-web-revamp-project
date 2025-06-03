
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-pink-200 via-pink-100 to-white text-sky-600 overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-sky-700">
              Vision Institute of
              <span className="text-pink-400"> Leadership</span> &
              <span className="text-pink-400"> Management</span> Studies
            </h1>
            <p className="text-xl md:text-2xl text-sky-600 mb-8 leading-relaxed">
              Empowering Leaders. Transforming Communities. Excellence in Professional Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 text-lg">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 text-sky-700 border border-pink-100">
              <h3 className="text-2xl font-bold text-sky-700 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>TVETA Registered Institution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>Diploma & Certificate Programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>Flexible Learning Options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>Professional Development Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-pink-400" />
        </div>
      </div>
    </section>
  );
};
