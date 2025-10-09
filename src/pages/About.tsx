import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Target, Heart, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import teamAbout from "@/assets/team-about.jpg";
import founderShohrab from "@/assets/founder-shohrab.jpg";
import teamApoorva from "@/assets/team-apoorva.jpg";
import teamAnanya from "@/assets/team-ananya.jpg";
import teamIshna from "@/assets/team-ishna.jpg";
import teamShruti from "@/assets/team-shruti.jpg";

const About = () => {
  const values = [
    { icon: <Sparkles className="w-8 h-8" />, title: "Innovation" },
    { icon: <Users className="w-8 h-8" />, title: "Inclusion" },
    { icon: <Heart className="w-8 h-8" />, title: "Integrity" },
    { icon: <Target className="w-8 h-8" />, title: "Impact" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const team = [
    { name: "Md. Shohrab Alam", role: "Founder", image: founderShohrab },
    { name: "Apoorva Sahu", role: "Co-founder", image: teamApoorva },
    { name: "Shruti Singh", role: "Social Media Manager", image: teamShruti },
    { name: "Ishna Singh", role: "Marketing Executive", image: teamIshna },
    { name: "Ananya Dubey", role: "Marketing Executive", image: teamAnanya },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamAbout} alt="Kainosverse team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/90" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Story of Kainosverse
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bridging the gap between academic knowledge and real-world success
          </p>
        </div>
      </section>

{/* Founder's Words */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
        Founder's Words
      </h2>

      <Card className="border-l-4 border-l-accent mb-8 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Left: Founder Image */}
            <div className="md:w-1/3 w-full">
              <img
                src={founderShohrab}
                alt="Md. Shohrab Alam - Founder"
                className="w-full h-full object-cover object-top md:rounded-l-xl"
              />
            </div>

            {/* Right: Text */}
            <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-center bg-background">
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                Hello, I am <span className="font-bold text-accent">Shohrab</span>, founder of Kainosverse.
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                And I didn't start Kainosverse to make noise — I started it to break the system.
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                Tired of being told to "focus on marks," I said screw the syllabus, let's build dreamers, doers & founders.
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                Why teach students to follow paths when they can create their own?
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                Kainosverse is where ideas beat grades, execution beats excuses, and entrepreneurship becomes the new education.
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4 font-bold text-accent">
                No lectures. No rules. Just pure fire!
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                This isn't a classroom — it's a launchpad for India's next changemakers.
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4 font-bold">
                This is not just another startup.<br />
                This is a revolution.<br />
                This is the dream of millions of Indian students.
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed mb-6">
                And you're invited — to join me or just sit and watch history being written.
              </p>
              <div className="border-t border-accent/20 pt-4">
                <p className="text-base lg:text-lg text-foreground font-bold">
                  – Md. Shohrab Alam
                </p>
                <p className="text-sm lg:text-base text-accent font-semibold">
                  Founder
                </p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* The Problem */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why do so many graduates still feel lost?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Why do degrees often fail to translate into purpose, income, or confidence?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kainosverse was founded to bridge that gap. We convert academic knowledge into
              practical experience — not as a program, but as a movement to cultivate creators who
              can solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here, students don't just learn more — they <span className="font-bold text-foreground">build more</span>. We encourage
              rapid prototyping, public iteration, and learning through action: try, fail, improve,
              repeat.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Exposure */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Real-World Exposure
            </h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <p className="text-lg text-foreground">
                    Sell your first idea to a real customer.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <p className="text-lg text-foreground">
                    Face real investors in pitch sessions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <p className="text-lg text-foreground">
                    Launch mini-startups with mentorship and community support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              "To ignite a nationwide movement where every student leads with confidence, skills,
              and purpose — creating a brighter India, one fearless idea at a time."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-accent mb-4 flex justify-center">
                  <Sparkles className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Innovation</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  We believe growth begins with curiosity. At Kainosverse, we constantly challenge the norm, 
                  experiment with new ideas, and embrace creative problem-solving to bring bold visions to life.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-accent mb-4 flex justify-center">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Inclusion</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Diversity fuels creativity. We value every voice, every perspective, and every background — 
                  creating a culture where everyone feels seen, heard, and empowered to contribute.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-accent mb-4 flex justify-center">
                  <Heart className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Integrity</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  We build trust through transparency and honesty. Our actions reflect our words, 
                  ensuring we uphold ethics, accountability, and respect in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-accent mb-4 flex justify-center">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Impact</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  We aim to make a difference — not just in business, but in people's lives. 
                  Every project, partnership, and initiative at Kainosverse is driven by the goal of creating lasting, positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-accent/50"
              >
                <CardContent className="p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-[3/4] overflow-hidden cursor-pointer">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 overflow-hidden">
                      <div className="relative w-full">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-auto"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="p-6 text-center bg-card">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
