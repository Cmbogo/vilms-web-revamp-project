
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Certificate, Clock, Computer, Award, Briefcase } from "lucide-react";

const Programs = () => {
  const diplomaPrograms = [
    { title: "Family and Marriage Counseling", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "27,500/=" },
    { title: "Psychology Therapy Counseling", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "27,500/=" },
    { title: "Guidance and Counseling", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "27,500/=" },
    { title: "Disaster Management and Trauma", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "27,500/=" },
    { title: "Teacher-Children Ministry", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "27,500/=" },
    { title: "ICT for Counseling", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "30,000/=" },
    { title: "Business Management", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "30,000/=" },
    { title: "Community Development", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "30,000/=" },
    { title: "Social Work", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "30,000/=" },
    { title: "Theology and Leadership Counseling", entry: "KCSE C", duration: "2 Years / 4 Sem.", examBody: "KNEC", cost: "27,500/=" },
  ];

  const certificatePrograms = [
    { title: "Guidance and Counseling", entry: "KCSE D+", duration: "1 Year", examBody: "KNEC", cost: "17,500/=" },
    { title: "Psychology Therapy Counseling", entry: "KCSE D+", duration: "1 Year", examBody: "KNEC", cost: "17,500/=" },
    { title: "Family and Marriage Counseling", entry: "KCSE D+", duration: "1 Year", examBody: "KNEC", cost: "17,500/=" },
    { title: "Disaster Management and Trauma", entry: "KCSE D+", duration: "1 Year", examBody: "KNEC", cost: "17,500/=" },
    { title: "Teacher-Children Ministry", entry: "KCSE D+", duration: "1 Year", examBody: "KNEC", cost: "17,500/=" },
  ];

  const shortCourses = [
    { title: "Employee Motivation/Empowerment", duration: "Negotiable per institution/org", cost: "–" },
    { title: "Church Leadership/Counseling", duration: "One Month", cost: "10,000/=" },
    { title: "General Leadership/Supervision Management", duration: "One Month", cost: "10,000/=" },
    { title: "Stress and Stress Management", duration: "One Month", cost: "10,000/=" },
    { title: "Conflict Resolution and Management", duration: "One Month", cost: "10,000/=" },
    { title: "HIV/AIDS and Substance Abuse", duration: "Two Weeks", cost: "10,000/=" },
    { title: "Life Skills and Psychoeducation", duration: "Two Weeks", cost: "10,000/=" },
    { title: "Depression and Suicide/Trauma", duration: "Two Weeks", cost: "10,000/=" },
    { title: "Couples/Marriage Counseling", duration: "One Month", cost: "10,000/=" },
    { title: "Counseling Children", duration: "One Month", cost: "10,000/=" },
    { title: "Adolescents", duration: "One Month", cost: "10,000/=" },
    { title: "Pastoral Counseling", duration: "One Month", cost: "10,000/=" },
    { title: "Psychological Support/Life Skills", duration: "One Week", cost: "10,000/=" },
    { title: "Training/Counseling", duration: "One Week", cost: "10,000/=" },
    { title: "Supervision Training and Team Leadership", duration: "2 Days", cost: "5,000/=" },
    { title: "Work Ethics", duration: "Per Day", cost: "5,000/=" },
    { title: "Counseling/Fit/Retirement", duration: "4 Days", cost: "10,000/=" },
    { title: "Preparedness", duration: "4 Days", cost: "10,000/=" },
    { title: "Mediation/Mediation", duration: "5 Days", cost: "25,000/=" },
    { title: "Management", duration: "5 Days", cost: "25,000/=" },
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
                  <CardDescription className="text-blue-600">2-year comprehensive programs with KNEC certification</CardDescription>
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
                    <TableHead className="text-blue-700 font-semibold">Exam Body</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost (KSH)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {diplomaPrograms.map((program, index) => (
                    <TableRow key={index} className="hover:bg-blue-50">
                      <TableCell className="text-blue-600 font-medium">{program.title}</TableCell>
                      <TableCell className="text-blue-600">{program.entry}</TableCell>
                      <TableCell className="text-blue-600">{program.duration}</TableCell>
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
                <Certificate className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Certificate Programs</CardTitle>
                  <CardDescription className="text-blue-600">1-year focused programs with KNEC certification</CardDescription>
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
                    <TableHead className="text-blue-700 font-semibold">Exam Body</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Cost (KSH)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificatePrograms.map((program, index) => (
                    <TableRow key={index} className="hover:bg-pink-50">
                      <TableCell className="text-blue-600 font-medium">{program.title}</TableCell>
                      <TableCell className="text-blue-600">{program.entry}</TableCell>
                      <TableCell className="text-blue-600">{program.duration}</TableCell>
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
            <CardHeader className="bg-blue-50">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-pink-400 mr-3" />
                <div>
                  <CardTitle className="text-2xl text-blue-700">Short Courses</CardTitle>
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
                    <TableHead className="text-blue-700 font-semibold">Cost (KSH)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shortCourses.map((course, index) => (
                    <TableRow key={index} className="hover:bg-blue-50">
                      <TableCell className="text-blue-600 font-medium">{course.title}</TableCell>
                      <TableCell className="text-blue-600">{course.duration}</TableCell>
                      <TableCell className="text-pink-600 font-semibold">{course.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Additional Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-blue-200">
              <CardHeader className="bg-pink-50">
                <div className="flex items-center">
                  <Computer className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <CardTitle className="text-xl text-blue-700">Computer Packages</CardTitle>
                    <CardDescription className="text-blue-600">Technology skills training</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-600 font-medium">10 Packages</span>
                    <span className="text-pink-600 font-semibold">10,000/= KSH</span>
                  </div>
                  <p className="text-blue-600 text-sm">Duration: Negotiable</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-pink-400 mr-3" />
                  <div>
                    <CardTitle className="text-xl text-blue-700">Computer-Based Substance Counseling</CardTitle>
                    <CardDescription className="text-blue-600">Specialized counseling programs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-600 font-medium">Certificate (6 Months)</span>
                    <span className="text-pink-600 font-semibold">17,500/= KSH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600 font-medium">Diploma (2 Years)</span>
                    <span className="text-pink-600 font-semibold">27,500/= KSH</span>
                  </div>
                  <p className="text-blue-600 text-sm">Entry: KCSE D (Certificate), KCSE C (Diploma)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Extra Services */}
          <Card className="border-blue-200">
            <CardHeader className="bg-pink-50">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <CardTitle className="text-xl text-blue-700">Extra Services</CardTitle>
                  <CardDescription className="text-blue-600">Additional academic services</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <span className="text-blue-600 font-medium">VILMAS Exams</span>
                <span className="text-pink-600 font-semibold">4,500/= KSH</span>
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
