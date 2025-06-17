
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Future?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of successful graduates who have built their careers with VILMS
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Phone className="w-12 h-12 mb-4 text-pink-300" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <a href="tel:+254739999049" className="text-blue-100 hover:text-pink-300 transition-colors">
              +254 739 999 049
            </a>
          </div>
          
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 mb-4 text-pink-300" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <a href="mailto:admin@vilms.ac.ke" className="text-blue-100 hover:text-pink-300 transition-colors">
              admin@vilms.ac.ke
            </a>
          </div>
          
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 mb-4 text-pink-300" />
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-blue-100">
              Kamiti Road Behind Deliverance Church<br />
              Zimmerman, Nairobi
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3">
              Apply Now
            </Button>
          </Link>
          <Link to="/programs">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
