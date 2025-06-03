
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

export const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Diploma in Counseling Psychology",
      description: "Comprehensive training in psychological counseling techniques and therapeutic interventions",
      duration: "2 Years",
      mode: "Full-time / Part-time",
      category: "Diploma",
      highlights: ["Clinical Practice", "Research Methods", "Professional Ethics"]
    },
    {
      title: "Diploma in Business Management",
      description: "Strategic business management skills for modern organizational leadership",
      duration: "2 Years",
      mode: "Full-time / Part-time / Online",
      category: "Diploma",
      highlights: ["Strategic Planning", "Financial Management", "Leadership Skills"]
    },
    {
      title: "Diploma in Information Communication Technology",
      description: "Modern ICT skills for digital transformation and technology leadership",
      duration: "2 Years",
      mode: "Full-time / Part-time",
      category: "Diploma",
      highlights: ["Software Development", "Network Administration", "Digital Literacy"]
    },
    {
      title: "Certificate in Leadership Development",
      description: "Essential leadership skills for emerging and established leaders",
      duration: "6 Months",
      mode: "Part-time / Weekend",
      category: "Certificate",
      highlights: ["Team Management", "Communication", "Decision Making"]
    },
    {
      title: "Certificate in Project Management",
      description: "Professional project management methodologies and best practices",
      duration: "4 Months",
      mode: "Part-time / Online",
      category: "Certificate",
      highlights: ["Project Planning", "Risk Management", "Quality Control"]
    },
    {
      title: "Short Course in Digital Marketing",
      description: "Modern digital marketing strategies for business growth",
      duration: "2 Months",
      mode: "Evening / Online",
      category: "Short Course",
      highlights: ["Social Media", "SEO", "Content Marketing"]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Featured <span className="text-pink-400">Programs</span>
          </h2>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Discover our comprehensive range of diploma, certificate, and short courses designed 
            to advance your career and professional development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-pink-200 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    program.category === 'Diploma' ? 'bg-sky-100 text-sky-700' :
                    program.category === 'Certificate' ? 'bg-pink-100 text-pink-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {program.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-sky-700">{program.title}</CardTitle>
                <CardDescription className="text-sky-600">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-sky-600">
                    <Clock className="w-4 h-4 mr-2 text-pink-400" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-sky-600">
                    <Users className="w-4 h-4 mr-2 text-pink-400" />
                    <span>Mode: {program.mode}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sky-700 mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-sky-600 space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};
