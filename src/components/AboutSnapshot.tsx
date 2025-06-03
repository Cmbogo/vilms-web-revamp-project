
import { Users, Book, Clock } from "lucide-react";

export const AboutSnapshot = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            About <span className="text-pink-400">VILMS</span>
          </h2>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Registered under TVETA (TVETA/PRIVATE/TVC/0141/2018), VILMS is committed to excellence 
            in leadership and management studies with a multidisciplinary approach to professional training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors border border-pink-100">
            <Users className="w-12 h-12 text-sky-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Expert Faculty</h3>
            <p className="text-sky-600">
              Experienced professionals dedicated to nurturing the next generation of leaders
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors border border-sky-100">
            <Book className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Comprehensive Programs</h3>
            <p className="text-sky-600">
              Diploma and certificate courses designed for practical application and career growth
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors border border-pink-100">
            <Clock className="w-12 h-12 text-sky-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Flexible Learning</h3>
            <p className="text-sky-600">
              Full-time, part-time, distance learning, and online options to fit your schedule
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-pink-300 to-pink-200 rounded-lg p-8 text-sky-700 border border-pink-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-sky-700">Our Vision</h3>
              <p className="text-sky-600 mb-6">
                To be a center of excellence in counseling and leadership studies in Africa, 
                producing competent professionals who contribute meaningfully to society.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-sky-700">Our Mission</h3>
              <p className="text-sky-600">
                To lead in providing quality professional training, research, and consultancy 
                services in leadership, management, and counseling studies.
              </p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg p-6 border border-pink-200">
              <h4 className="text-xl font-semibold mb-4 text-sky-700">Core Values</h4>
              <ul className="space-y-2 text-sky-600">
                <li>• Integrity in all our dealings</li>
                <li>• Professionalism in service delivery</li>
                <li>• Excellence in academic pursuits</li>
                <li>• Community service and social responsibility</li>
                <li>• Innovation in teaching and learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
