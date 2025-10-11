import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Rocket,
  Zap,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Users,
  ExternalLink,
} from "lucide-react";
import collegeEdp from "@/assets/college-edp.jpg";
import ideathonHackathon from "@/assets/ideathon-hackathon.jpg";
import internshipWork from "@/assets/internship-work.jpg";
import pitchNight from "@/assets/pitch-night.jpg";
import schoolEdp from "@/assets/school-edp.jpg";
import networkingEventNew from "@/assets/networking-event-new.jpg";

const Programs = () => {
  const programImages = [
    collegeEdp,
    schoolEdp,
    ideathonHackathon,
    internshipWork,
    pitchNight,
    networkingEventNew,
  ];

  const programs = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Entrepreneurship Development Camps - College",
      description:
        "10–15 day intensive hands-on camps for college students teaching ideation, SWOT analysis, market research, the ₹500-to-Fortune challenge, and team-based product development.",
      outcomes: [
        "Market-tested mini-products",
        "Professional pitch decks",
        "Basic financials and business planning",
        "Demo day presentations",
      ],
      cta: "Register Now (College)",
      link: "https://forms.gle/DDAEyAyFjBq3EpMN6",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Entrepreneurship Development Camps - School",
      description:
        "10–15 day engaging hands-on camps for school students introducing entrepreneurial thinking, problem-solving, market research basics, and creative challenges.",
      outcomes: [
        "Introduction to entrepreneurship",
        "Problem-solving skills development",
        "Market research fundamentals",
        "Team collaboration experience",
      ],
      cta: "Register Now (School)",
      link: "https://forms.gle/FCG3L12Vbge4Aqs76",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Ideathons & Hackathons",
      description:
        "Short-format competitions designed to move teams from concept to prototype within 24–72 hours.",
      outcomes: [
        "Rapid prototyping experience",
        "Categories: Ed-tech, Green-tech, Social impact",
        "Winner prizes and recognition",
        "Networking with industry experts",
      ],
      cta: "See Upcoming Events",
      link: "https://forms.gle/mnxu2xAJ3jvfHqVY8",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Dynamic Internship Opportunities",
      description:
        "Real startup projects where interns contribute to product, growth, and operations — not just data entry.",
      outcomes: [
        "Hands-on project ownership",
        "Mentorship from founders",
        "Certificates and reference letters",
        "Real-world problem solving",
      ],
      cta: "Apply Now",
      link: "https://forms.gle/jUdRHXdvtGWAY8bv5",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Incubation & Funding Events",
      description:
        "Structured incubation support: mentoring, investor readiness, pitch nights, and funding connect sessions.",
      outcomes: [
        "One-on-one mentorship",
        "Investor pitch preparation",
        "Funding connections",
        "Business model refinement",
      ],
      cta: "Partner / Pitch",
      link: "https://forms.gle/qUBpu2DsNWDD6xk16",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Networking Events",
      description:
        "Meetups that connect students to mentors, domain-experts, and early-stage investors.",
      outcomes: [
        "Meet industry professionals",
        "Build valuable connections",
        "Learn from success stories",
        "Collaborative opportunities",
      ],
      cta: "Join Next Event",
      link: "https://forms.gle/mUeT8PV4dFGmGLGB6",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Programs & Initiatives
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our range of programs designed to transform students into confident creators
            and entrepreneurs
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden group hover:border-accent">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={programImages[index]} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardHeader>
                  <div className="text-accent mb-4">{program.icon}</div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{program.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {program.link.startsWith("http") ? (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button variant="hero" className="w-full" size="lg">
                        {program.cta}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  ) : program.link.startsWith("mailto:") ? (
                    <a href={program.link} className="inline-block w-full">
                      <Button variant="hero" className="w-full" size="lg">
                        {program.cta}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <a href={program.link} className="inline-block w-full">
                      <Button variant="hero" className="w-full" size="lg">
                        {program.cta}
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;
