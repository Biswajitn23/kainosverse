import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shreyansh Pathak",
      course: "B.Com 2nd Year",
      image: "/shreyansh.jpg",
      text: "At Kainosverse, I bonded with teammates, explored my strengths via SWOT, researched city problems, learned market research and competitor analysis, and validated ideas through surveys. I solved case studies, brainstormed solutions, and applied them in the ₹500 to Fortune challenge by making ad reels and selling snacks. The guest lectures and teamwork built my confidence, market understanding, and problem-solving mindset. These 10 days were a true entrepreneurial adventure!",
    },
    {
      name: "Ayush Sahu",
      course: "BBA, 2nd Year",
      image: "/ayush.jpg",
      text: "I connected with everyone, analyzed my strengths through SWOT, identified Raipur's problems, talked to shopkeepers, learned market and competitor analysis, practiced selling in the ₹500 to Fortune challenge, and brainstormed solutions using strategic prompts. Case studies and lectures showed me how to build and validate ideas. Every day added a skill — from research to problem-solving — helping me grow a creative, practical entrepreneurial mindset.",
    },
    {
      name: "Mayank Mishra",
      course: "B.Com, 2nd Year",
      image: "/mayank.jpg",
      text: "My Kainosverse journey included ice-breaking sessions, SWOT, city problem research, market research surveys, competitor analysis, case study teamwork, solution brainstorming, and the ₹500 to Fortune challenge to apply real-world entrepreneurship. Guest lectures helped me pitch and brainstorm better. I built confidence, quick thinking, and empathy while validating real customer problems. Every day was practical, interactive, and showed me what true entrepreneurial learning looks like!",
    },
    {
      name: "N V Divyansh",
      course: "B.Com, 2nd Year",
      image: "/nv.jpg",
      text: "These 10 days included team bonding, SWOT, city visits to identify problems, market research and competitor analysis, idea validation surveys, brainstorming solutions, and selling challenges like ₹500 to Fortune. Guest lectures showed me how to think creatively and analyze problems practically. I learned how teamwork, empathy, and research turn into real opportunities. Kainosverse gave me confidence and skills for practical, innovative thinking in business.",
    },
    {
      name: "Gargie Gautam",
      course: "BBA, 2nd Year",
      image: "/gargie.jpg",
      text: "These 10 days included SWOT, city research, market research surveys, competitor analysis, and brainstorming. I identified local problems, learned Blue Ocean concepts, validated ideas at Magneto Mall, solved Snackzilla case studies, and explored solution-building. The ₹500 to Fortune challenge taught sales hands-on. Guest lectures and teamwork made me see how to turn insights into opportunities. Kainosverse made every day practical and meaningful with real-world skills.",
    },
    {
      name: "Saurabh Tripathi",
      course: "B.Com, 2nd Year",
      image: "/saurabh.jpg",
      text: "At Kainosverse, I bonded with interns, did SWOT, explored city challenges, learned market research and competitor analysis, validated ideas through surveys, brainstormed solutions, and tried real-world selling in the ₹500 to Fortune challenge. Guest lectures guided me to think practically and refine my ideas. Ten days here were packed with hands-on learning, teamwork, and startup-level problem solving, making the experience truly eye-opening and impactful.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            What's Cooking at Kainosverse?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Hear it from our interns: Kainosverse through their eyes
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
                <CardContent className="p-8 relative z-10 flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-2 border-accent shadow ${testimonial.name === 'Saurabh Tripathi' ? 'object-top' : ''}`}
                  />
                  <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-4 leading-relaxed italic text-center">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t-2 border-accent/20 pt-4 w-full">
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {testimonial.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Want to Share Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and become part of the Kainosverse journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
