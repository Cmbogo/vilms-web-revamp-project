
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Book, Clock, Target, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              About VILMS
            </h1>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Registered under TVETA (TVETA/PRIVATE/TVC/0141/2018), VILMS is committed to excellence 
              in leadership and management studies with a multidisciplinary approach to professional training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow border border-blue-200">
              <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Expert Faculty</h3>
              <p className="text-blue-600">
                Experienced professionals dedicated to nurturing the next generation of leaders
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow border border-pink-200">
              <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Comprehensive Programs</h3>
              <p className="text-blue-600">
                Diploma and certificate courses designed for practical application and career growth
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow border border-blue-200">
              <Clock className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Flexible Learning</h3>
              <p className="text-blue-600">
                Full-time, part-time, distance learning, and online options to fit your schedule
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-blue-700">Our Vision</h3>
              </div>
              <p className="text-blue-600 mb-6">
                To be a center of excellence in counseling and leadership studies in Africa, 
                producing competent professionals who contribute meaningfully to society.
              </p>
              
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-blue-700">Our Mission</h3>
              </div>
              <p className="text-blue-600">
                To lead in providing quality professional training, research, and consultancy 
                services in leadership, management, and counseling studies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-pink-400 mr-3" />
                <h4 className="text-2xl font-bold text-blue-700">Core Values</h4>
              </div>
              <ul className="space-y-3 text-blue-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Integrity in all our dealings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Professionalism in service delivery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Excellence in academic pursuits
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Community service and social responsibility
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Innovation in teaching and learning
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 text-center">
              TVETA Registration Details
            </h3>
            <p className="text-blue-600 text-center text-lg">
              Registration Number: <strong>TVETA/PRIVATE/TVC/0141/2018</strong>
            </p>
            <p className="text-blue-600 text-center mt-2">
              Vision Institute of Leadership and Management Studies is officially registered 
              under the Technical and Vocational Education and Training Authority (TVETA).
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
