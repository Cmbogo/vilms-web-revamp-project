
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Get in touch with VILMS. We're here to help you start your educational journey 
              and answer any questions you may have.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-700 flex items-center">
                    <Phone className="w-6 h-6 text-pink-400 mr-2" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-pink-400 mr-3" />
                      <div>
                        <p className="text-blue-700 font-semibold">Mobile</p>
                        <a href="tel:+254725649522" className="text-blue-600 hover:text-pink-400">+254 725 649 522</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-pink-400 mr-3" />
                      <div>
                        <p className="text-blue-700 font-semibold">Office</p>
                        <a href="tel:+254739999049" className="text-blue-600 hover:text-pink-400">+254 739 999 049</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-pink-400 mr-3" />
                      <div>
                        <p className="text-blue-700 font-semibold">Director</p>
                        <a href="tel:+254722613334" className="text-blue-600 hover:text-pink-400">+254 722 613 334</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-xl text-blue-700 flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-2" />
                    Email & Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-blue-700 font-semibold">Email</p>
                        <a href="mailto:info@vilms.ac.ke" className="text-blue-600 hover:text-pink-400">info@vilms.ac.ke</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="text-blue-700 font-semibold">Address</p>
                        <p className="text-blue-600">Kamiti Road Behind Deliverance Church</p>
                        <p className="text-blue-600">Zimmerman, Nairobi</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-blue-700 font-semibold">Office Hours</p>
                        <p className="text-blue-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-700">Send us a Message</CardTitle>
                <CardDescription className="text-blue-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-700 font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-700 font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                      <option>General Inquiry</option>
                      <option>Program Information</option>
                      <option>Admissions</option>
                      <option>Technical Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="border-blue-200">
            <CardHeader className="bg-pink-50">
              <CardTitle className="text-xl text-blue-700">Find Us</CardTitle>
              <CardDescription className="text-blue-600">
                Located in Zimmerman, Nairobi for easy accessibility
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video bg-blue-50 rounded-lg flex items-center justify-center border border-blue-200">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                  <h4 className="text-blue-700 font-semibold mb-2">VILMS Campus</h4>
                  <p className="text-blue-600">Kamiti Road Behind Deliverance Church</p>
                  <p className="text-blue-600">Zimmerman, Nairobi</p>
                  <p className="text-sm text-blue-500 mt-2">Interactive map integration coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
