
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, DollarSign, HelpCircle, CheckCircle } from "lucide-react";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Admissions
            </h1>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Join VILMS and start your journey towards professional excellence. 
              Learn about our application process, requirements, and fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Application Process */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-pink-400 mr-3" />
                  <div>
                    <CardTitle className="text-2xl text-blue-700">Application Process</CardTitle>
                    <CardDescription className="text-blue-600">Step-by-step guide to apply</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-blue-700 font-semibold">Step 1: Choose Your Program</h4>
                      <p className="text-blue-600 text-sm">Browse our programs and select the course that matches your career goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-blue-700 font-semibold">Step 2: Check Entry Requirements</h4>
                      <p className="text-blue-600 text-sm">Ensure you meet the minimum academic requirements for your chosen program.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-blue-700 font-semibold">Step 3: Submit Application</h4>
                      <p className="text-blue-600 text-sm">Complete the application form and submit required documents.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-blue-700 font-semibold">Step 4: Pay Application Fee</h4>
                      <p className="text-blue-600 text-sm">Pay the required application and registration fees.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-blue-700 font-semibold">Step 5: Confirmation</h4>
                      <p className="text-blue-600 text-sm">Receive confirmation and begin your studies at VILMS.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Entry Requirements */}
            <Card className="border-blue-200">
              <CardHeader className="bg-pink-50">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <CardTitle className="text-2xl text-blue-700">Entry Requirements</CardTitle>
                    <CardDescription className="text-blue-600">Academic prerequisites by program level</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-blue-700 font-semibold mb-2">Diploma Programs</h4>
                    <p className="text-blue-600">Minimum KCSE Grade C or equivalent qualification</p>
                  </div>
                  <div>
                    <h4 className="text-blue-700 font-semibold mb-2">Certificate Programs</h4>
                    <p className="text-blue-600">Minimum KCSE Grade D+ or equivalent qualification</p>
                  </div>
                  <div>
                    <h4 className="text-blue-700 font-semibold mb-2">Short Courses</h4>
                    <p className="text-blue-600">Open to all professionals and individuals seeking skill enhancement</p>
                  </div>
                  <div>
                    <h4 className="text-blue-700 font-semibold mb-2">Computer-Based Substance Counseling</h4>
                    <p className="text-blue-600">KCSE Grade D (Certificate) or Grade C (Diploma)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fee Structure */}
          <Card className="mb-12 border-blue-200">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 text-pink-400 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Fee Structure</CardTitle>
                  <CardDescription className="text-blue-600">Transparent pricing for all our programs</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="text-blue-700 font-semibold mb-2">Diploma Programs</h4>
                  <p className="text-pink-600 text-lg font-bold">KSH 17,500/= - 30,000/=</p>
                  <p className="text-blue-600 text-sm">Per semester (4 semesters total)</p>
                  <p className="text-blue-600 text-xs mt-1">Counseling: KSH 17,500/= | Business/ICT/Social: KSH 30,000/= | Theology: KSH 27,000/=</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-blue-700 font-semibold mb-2">Certificate Programs</h4>
                  <p className="text-pink-600 text-lg font-bold">KSH 17,500/=</p>
                  <p className="text-blue-600 text-sm">Total program fee (6 months)</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="text-blue-700 font-semibold mb-2">Computer Packages</h4>
                  <p className="text-pink-600 text-lg font-bold">KSH 10,000/=</p>
                  <p className="text-blue-600 text-sm">10 packages included</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-blue-700 font-semibold mb-2">Short Courses</h4>
                  <p className="text-pink-600 text-lg font-bold">KSH 5,000/= - 25,000/=</p>
                  <p className="text-blue-600 text-sm">Duration: 2 days to 1 month</p>
                  <p className="text-blue-600 text-xs mt-1">Most courses: KSH 10,000/= | Management/Mediation: KSH 25,000/=</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="text-blue-700 font-semibold mb-2">Computer-Based Counseling</h4>
                  <p className="text-pink-600 text-lg font-bold">KSH 17,500/= - 27,500/=</p>
                  <p className="text-blue-600 text-sm">Certificate: KSH 17,500/= | Diploma: KSH 27,500/= per semester</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="text-blue-700 font-semibold mb-2">Additional Fees</h4>
                <p className="text-blue-600"><strong>VILMS Exam Fee:</strong> KSH 4,500/=</p>
                <p className="text-blue-600 text-sm mt-1">Organizational/Institutional training fees are negotiable based on requirements.</p>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="border-blue-200">
            <CardHeader className="bg-pink-50">
              <div className="flex items-center">
                <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Frequently Asked Questions</CardTitle>
                  <CardDescription className="text-blue-600">Common queries about admissions and programs</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-700 font-semibold mb-2">When do admissions open?</h4>
                  <p className="text-blue-600">Admissions are open throughout the year. However, specific programs may have set intake periods.</p>
                </div>
                <div>
                  <h4 className="text-blue-700 font-semibold mb-2">Are there payment plans available?</h4>
                  <p className="text-blue-600">Yes, we offer flexible payment options. Contact our admissions office for details on installment plans.</p>
                </div>
                <div>
                  <h4 className="text-blue-700 font-semibold mb-2">Do you offer online learning options?</h4>
                  <p className="text-blue-600">Yes, we provide full-time, part-time, distance learning, and online options for most of our programs.</p>
                </div>
                <div>
                  <h4 className="text-blue-700 font-semibold mb-2">What documents are required for application?</h4>
                  <p className="text-blue-600">You'll need your KCSE certificate, national ID copy, passport photos, and any relevant academic transcripts.</p>
                </div>
                <div>
                  <h4 className="text-blue-700 font-semibold mb-2">Are the certificates recognized?</h4>
                  <p className="text-blue-600">Yes, all our programs are KNEC certified and TVETA registered, ensuring national and international recognition.</p>
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

export default Admissions;
