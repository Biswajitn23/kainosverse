import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Heart, Lightbulb, ExternalLink } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Be a part of Kainosverse!
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join a movement that's shaping the future of entrepreneurship in India
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 border-2">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Kainosverse, we're always on the lookout for passionate, creative, and driven 
                  individuals who want to make an impact in the world of entrepreneurship and innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Whether you're a student eager to learn, a professional looking to collaborate, or 
                  someone who simply believes in creating change — we'd love to have you on board!
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're interested in working with us or exploring internship and collaboration 
                  opportunities, fill out the form below and let's connect.
                </p>
              </CardContent>
            </Card>

            {/* Why Join Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Join Kainosverse?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-4">
                    <Rocket className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Real Impact</h3>
                  <p className="text-muted-foreground">
                    Work on projects that create actual change in students' lives and the startup ecosystem
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-4">
                    <Lightbulb className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Learn & Grow</h3>
                  <p className="text-muted-foreground">
                    Gain hands-on experience in entrepreneurship, event management, and startup operations
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Build Network</h3>
                  <p className="text-muted-foreground">
                    Connect with entrepreneurs, mentors, and like-minded individuals from across India
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-4">
                    <Heart className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Dynamic Culture</h3>
                  <p className="text-muted-foreground">
                    Be part of a vibrant, innovative team that values creativity and bold thinking
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center bg-secondary p-8 md:p-12 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Join Us?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fill out our application form and take the first step towards becoming part of the Kainosverse family
              </p>
              <a
                href="https://forms.gle/2RBa6TckCJk9bUma7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                  Apply Now
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
