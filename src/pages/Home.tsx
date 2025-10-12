import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import MobileHeaderSpacer from "@/components/MobileHeaderSpacer";
import {
  Lightbulb,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";
import heroCover from "@/assets/hero-cover.jpg";
import mentorSiddhesh from "@/assets/mentor-siddhesh.jpg";
import mentorDisha from "@/assets/mentor-disha.jpg";
import mentorShilpa from "@/assets/mentor-shilpa.jpg";
import mentorPratiksha from "@/assets/mentor-pratiksha.jpg";
import mentorKavit from "@/assets/mentor-kavit.jpg";
import mentorShreya from "@/assets/mentor-shreya.jpg";

const Home = () => {
  const highlights = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Startup Bootcamps",
      description: "Intensive, outcome-driven programs to launch real ventures.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Internships",
      description: "Meaningful, mentor-led roles inside early-stage startups and projects.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Incubation",
      description: "Mentorship, workspace guidance, and fundraising readiness.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personality Development",
      description: "Confidence, communication, leadership and interview prep.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Events & Competitions",
      description: "Hackathons, ideathons, and pitch contests with real rewards.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Youth Empowerment",
      description: "Community initiatives that turn ideas into social impact.",
    },
  ];

  const mentors = [
    {
      name: "Mr. Kavit Passary",
      role: "CFA, Passary Minerals, Director, Iron Tailor",
      quote: "Kainosverse nurtures the entrepreneurial mindset that today's business world demands.",
      image: mentorKavit,
    },
    {
      name: "Dr. Disha Sharma",
      role: "Assistant Professor, Amity Business School, Amity University Chhattisgarh",
      quote: "Witnessing the transformation of students into confident entrepreneurs at Kainosverse has been truly remarkable.",
      image: mentorDisha,
    },
    {
      name: "Dr. Shilpa Pandey",
      role: "Assistant Professor, Amity Business School, Amity University Chhattisgarh",
      quote: "Kainosverse is where academic excellence meets practical entrepreneurship, creating future leaders.",
      image: mentorShilpa,
    },
    {
      name: "Dr. Pratiksha Mishra",
      role: "Assistant Professor, Amity Business School, Amity University Chhattisgarh",
      quote: "The dedication and innovative spirit of Kainosverse students inspire me every day.",
      image: mentorPratiksha,
    },
    {
      name: "Mr. Siddhesh Chitnavis",
      role: "Corporate Trainer, Amity Business School, Amity University Chhattisgarh",
      quote:
        "Team Kainosverse keeps on evolving and has captured the essence of skill enhancement techniques for the future workforce. It's been a great opportunity to mentor one of the finest minds in the skill development and innovation space.",
      image: mentorSiddhesh,
    },
    {
      name: "Mrs. Shreya Muchhal Agrawal",
      role: "Co-founder, SphyxDigital",
      quote: "Working with Kainosverse has shown me the incredible potential of young entrepreneurs when given the right platform.",
      image: mentorShreya,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Mobile Header Spacer - prevents navbar collision */}
      <MobileHeaderSpacer />
      
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-screen flex items-center justify-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCover} alt="Startup team collaborating" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 md:py-0">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img src="/kainologo.png" alt="Kainosverse Logo" className="w-40 h-32 md:w-52 md:h-40 lg:w-64 lg:h-48" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Step into Kainosverse
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-primary-foreground/90">
            A universe where ideas turn into impact
          </p>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground/80">
            A community of bold students, creators, and young founders building real projects,
            launching startups, and solving local problems through hands-on learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/programs">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                Join the Movement
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2">
                <CardContent className="p-6">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Kainosverse */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              What is Kainosverse?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We turn coursework into real-world outcomes. Kainosverse is a movement that empowers
              students to build, test, and launch — not just learn. We teach entrepreneurial
              thinking, practical skills, and fearless communication so every young person can
              become a creator, not a consumer.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mentors.map((mentor, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-accent/50"
              >
                <CardContent className="p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-[3/4] overflow-hidden cursor-pointer">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 overflow-hidden">
                      <div className="relative w-full">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-full h-auto"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="p-6 bg-card">
                    <div className="text-center">
                      <p className="font-bold text-foreground">{mentor.name}</p>
                      <p className="text-sm text-accent font-medium">{mentor.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies We Have Worked With */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
            Companies We Have Worked With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
            {[
              { name: "IRON TAILOR", logo: "/iron.jpg" },
              { name: "AI Startup SHOW", logo: "/aiss.png" },
              { name: "THE SILVER HILLS", logo: "/silver.png" },
              { name: "learnia.ai", logo: "/learnai.png" },
              { name: "YI Raipur", logo: "/yi.jpg" },
              { name: "AI Ready School", logo: "/aiready.jpg" },
              { name: "Baya Studio", logo: "/baya.jpg" },
              { name: "Raipur Government", logo: "/raipur.jpg" },
            ].map((c, idx) => (
              <div
                key={idx}
                className="bg-white/80 border-2 border-gray-200 rounded-md p-6 flex flex-col justify-between h-56 hover:shadow-lg hover:bg-white transition-all duration-300"
              >
                <div className="flex justify-center items-center flex-1">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-32 w-auto opacity-100 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-sm font-semibold text-blue-600 text-center leading-tight">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools We Have Worked With */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
            Schools We Have Worked With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
            {[
              { name: "Aarambh School - Raipur", logo: "/aarambh.jpg" },
              { name: "Amity International School, Naya Raipur", logo: "/amity.jpg" },
              { name: "Cardinal Warriors", logo: "/cardinal.jpg" },
              { name: "Curious Hues", logo: "/curios.jpg" },
              { name: "JB International School, Tilda", logo: "/jb.jpg" },
              { name: "Krishna Public School", logo: "/kps.jpg" },
              { name: "Maharashtra Mandal Raipur", logo: "/mmr.jpg" },
              { name: "N.H. Goel World School", logo: "/nh.jpg" },
              { name: "Rungta Group Of Institutions", logo: "/rungta.jpg" },
              { name: "Saraswati Shishu Mandir", logo: "/saraswati.jpg" },
              { name: "Chhattisgarh Shasan", logo: "/sasan.jpg" },
              { name: "Swami Atmanand Govt. English Medium Model College", logo: "/swami.jpg" },
              { name: "Krishna Vikash Group of Institutions", logo: "/vikash.jpg" },
            ].map((school, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 flex flex-col justify-between h-52 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <div className="flex justify-center items-center flex-1">
                  <img
                    src={school.logo}
                    alt={`${school.name} logo`}
                    className="max-h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-sm font-semibold text-accent text-center leading-tight mt-3">
                  {school.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their ideas into reality
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="text-lg px-10 py-6 h-auto">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
