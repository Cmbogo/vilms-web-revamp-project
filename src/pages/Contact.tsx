
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting VILMS. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                        <a href="mailto:admin@vilms.ac.ke" className="text-blue-600 hover:text-pink-400">admin@vilms.ac.ke</a>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-700 font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-blue-700 font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
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
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                  <a 
                    href="https://tinyurl.com/yc2nvzzs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-pink-400 hover:text-pink-500 underline"
                  >
                    View on Map
                  </a>
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
