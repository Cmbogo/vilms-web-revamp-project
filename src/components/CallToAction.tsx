
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, Users, Book } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="admissions" className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="text-yellow-400">Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers through our 
            comprehensive programs. Take the first step towards your professional growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white bg-opacity-10 border-0 text-white">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">5000+</h3>
              <p className="text-blue-100 text-sm">Students Graduated</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white bg-opacity-10 border-0 text-white">
            <CardContent className="p-6 text-center">
              <Book className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">50+</h3>
              <p className="text-blue-100 text-sm">Programs Offered</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white bg-opacity-10 border-0 text-white">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">15+</h3>
              <p className="text-blue-100 text-sm">Years of Excellence</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white bg-opacity-10 border-0 text-white">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">24/7</h3>
              <p className="text-blue-100 text-sm">Student Support</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Application Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-500 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Choose Your Program</h4>
                  <p className="text-blue-100 text-sm">Browse our programs and select the one that fits your career goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Submit Application</h4>
                  <p className="text-blue-100 text-sm">Complete the application form with required documents</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Review & Acceptance</h4>
                  <p className="text-blue-100 text-sm">We review your application and provide admission decision</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Begin Your Journey</h4>
                  <p className="text-blue-100 text-sm">Start classes and begin your path to professional success</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-900">
                Download Brochure
              </Button>
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-900">
                Schedule a Visit
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white border-opacity-20">
              <h4 className="font-semibold mb-3">Need Help?</h4>
              <p className="text-blue-100 text-sm mb-3">
                Our admissions team is here to guide you through the process.
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span> admissions@vilms.ac.ke<br />
                <span className="font-semibold">Phone:</span> +254 123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
