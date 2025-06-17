import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Clock, Computer, Briefcase } from "lucide-react";

const Programs = () => {
  const diplomaPrograms = [
    { title: "Family and Marriage Counseling", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Psychology Therapy Counseling", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Guidance and Counseling", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Disaster Management and Trauma", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Teacher–Children Ministry", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Business Management", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 30,000/=" },
    { title: "ICT for Counseling Technology", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 30,000/=" },
    { title: "Community Development", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 30,000/=" },
    { title: "Social Work", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 30,000/=" },
    { title: "Theology and Leadership Counseling", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 27,000/=" },
  ];

  const certificatePrograms = [
    { title: "Family and Marriage Counseling", entry: "KCSE D+", duration: "6 Months", semesters: "1", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Psychology Therapy Counseling", entry: "KCSE D+", duration: "6 Months", semesters: "1", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Guidance and Counseling", entry: "KCSE D+", duration: "6 Months", semesters: "1", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Disaster Management and Trauma", entry: "KCSE D+", duration: "6 Months", semesters: "1", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Teacher–Children Ministry", entry: "KCSE D+", duration: "6 Months", semesters: "1", examBody: "CDACC", cost: "Ksh 17,500/=" },
  ];

  const computerBasedCounseling = [
    { title: "Drug Abuse & Substance Counseling (Certificate)", entry: "KCSE D", duration: "6 Months", semesters: "1", examBody: "CDACC", cost: "Ksh 17,500/=" },
    { title: "Drug Abuse & Substance Counseling (Diploma)", entry: "KCSE C", duration: "2 Years", semesters: "4", examBody: "CDACC", cost: "Ksh 27,500/=" },
  ];

  const shortCourses = [
    { title: "Employee Motivation/Empowerment", duration: "Custom (org-based)", cost: "Negotiable" },
    { title: "Church Leadership/Counseling", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "General Leadership/Supervision", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "Stress and Stress Management", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "Conflict Resolution and Management", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "HIV/AIDS and Substance Abuse", duration: "2 Weeks", cost: "Ksh 10,000/=" },
    { title: "Depression, Suicide, Trauma", duration: "2 Weeks", cost: "Ksh 10,000/=" },
    { title: "Life Skills and Psychoeducation", duration: "2 Weeks", cost: "Ksh 10,000/=" },
    { title: "Couples/Marriage Counseling", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "Counseling Children", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "Adolescents Counseling", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "Pastoral Counseling", duration: "1 Month", cost: "Ksh 10,000/=" },
    { title: "Psychological Support & Life Skills", duration: "1 Week", cost: "Ksh 10,000/=" },
    { title: "Training and Counseling", duration: "1 Week", cost: "Ksh 10,000/=" },
    { title: "Supervision & Team Leadership", duration: "2 Days", cost: "Ksh 5,000/=" },
    { title: "Work Ethics", duration: "Per Day", cost: "Ksh 5,000/=" },
    { title: "Counseling/Fitness for Retirement", duration: "4 Days", cost: "Ksh 10,000/=" },
    { title: "Preparedness", duration: "4 Days", cost: "Ksh 10,000/=" },
    { title: "Mediation/Meditation", duration: "5 Days", cost: "Ksh 25,000/=" },
    { title: "Management", duration: "5 Days", cost: "Ksh 25,000/=" },
  ];

  const computerPackages = [
    { title: "10 Computer Packages", duration: "Flexible", cost: "Ksh 10,000/=" },
    { title: "Organizational/Institutional", duration: "Custom", cost: "Negotiable" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Discover our comprehensive range of diploma, certificate, and short courses designed 
              to advance your career and professional development.
            </p>
          </div>

          {/* Diploma Programs */}
          <Card className="mb-12 border-blue-200">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center">
                <GraduationCap className="w-8 h-8 text-pink-400 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Diploma Programs</CardTitle>
                  <CardDescription className="text-blue-600">2-year comprehensive programs (4 semesters) with CDACC certification</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-700 font-semibold">Course Title</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Entry Level</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Duration</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Semesters</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Exam Body</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost (per semester)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {diplomaPrograms.map((program, index) => (
                    <TableRow key={index} className="hover:bg-blue-50">
                      <TableCell className="text-blue-600 font-medium">{program.title}</TableCell>
                      <TableCell className="text-blue-600">{program.entry}</TableCell>
                      <TableCell className="text-blue-600">{program.duration}</TableCell>
                      <TableCell className="text-blue-600">{program.semesters}</TableCell>
                      <TableCell className="text-blue-600">{program.examBody}</TableCell>
                      <TableCell className="text-pink-600 font-semibold">{program.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Certificate Programs */}
          <Card className="mb-12 border-blue-200">
            <CardHeader className="bg-pink-50">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Certificate Programs</CardTitle>
                  <CardDescription className="text-blue-600">6-month focused programs with CDACC certification</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-700 font-semibold">Course Title</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Entry Level</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Duration</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Semesters</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Exam Body</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost (Total)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificatePrograms.map((program, index) => (
                    <TableRow key={index} className="hover:bg-pink-50">
                      <TableCell className="text-blue-600 font-medium">{program.title}</TableCell>
                      <TableCell className="text-blue-600">{program.entry}</TableCell>
                      <TableCell className="text-blue-600">{program.duration}</TableCell>
                      <TableCell className="text-blue-600">{program.semesters}</TableCell>
                      <TableCell className="text-blue-600">{program.examBody}</TableCell>
                      <TableCell className="text-pink-600 font-semibold">{program.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Computer-Based Counseling Courses */}
          <Card className="mb-12 border-blue-200">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center">
                <Computer className="w-8 h-8 text-pink-400 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Computer-Based Counseling Courses</CardTitle>
                  <CardDescription className="text-blue-600">Specialized counseling programs with CDACC certification</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-700 font-semibold">Course Title</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Entry Level</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Duration</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Semesters</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Exam Body</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {computerBasedCounseling.map((program, index) => (
                    <TableRow key={index} className="hover:bg-blue-50">
                      <TableCell className="text-blue-600 font-medium">{program.title}</TableCell>
                      <TableCell className="text-blue-600">{program.entry}</TableCell>
                      <TableCell className="text-blue-600">{program.duration}</TableCell>
                      <TableCell className="text-blue-600">{program.semesters}</TableCell>
                      <TableCell className="text-blue-600">{program.examBody}</TableCell>
                      <TableCell className="text-pink-600 font-semibold">{program.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Short Courses */}
          <Card className="mb-12 border-blue-200">
            <CardHeader className="bg-pink-50">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Short Courses and Trainings</CardTitle>
                  <CardDescription className="text-blue-600">Professional development and specialized training programs</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-700 font-semibold">Course Title</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Duration</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shortCourses.map((course, index) => (
                    <TableRow key={index} className="hover:bg-pink-50">
                      <TableCell className="text-blue-600 font-medium">{course.title}</TableCell>
                      <TableCell className="text-blue-600">{course.duration}</TableCell>
                      <TableCell className="text-pink-600 font-semibold">{course.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Computer Packages */}
          <Card className="mb-12 border-blue-200">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center">
                <Computer className="w-8 h-8 text-pink-400 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Computer Packages</CardTitle>
                  <CardDescription className="text-blue-600">Technology skills training packages</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-blue-700 font-semibold">Package</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Duration</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {computerPackages.map((package_item, index) => (
                    <TableRow key={index} className="hover:bg-blue-50">
                      <TableCell className="text-blue-600 font-medium">{package_item.title}</TableCell>
                      <TableCell className="text-blue-600">{package_item.duration}</TableCell>
                      <TableCell className="text-pink-600 font-semibold">{package_item.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Other Fees */}
          <Card className="border-blue-200">
            <CardHeader className="bg-pink-50">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <CardTitle className="text-xl text-blue-700">Other Fees</CardTitle>
                  <CardDescription className="text-blue-600">Additional examination fees</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <span className="text-blue-600 font-medium">VILMS Exam Fee</span>
                <span className="text-pink-600 font-semibold">Ksh 4,500/=</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;
