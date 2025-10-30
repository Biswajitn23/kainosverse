import { Link } from "react-router-dom";
import MobileHeaderSpacer from "@/components/MobileHeaderSpacer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div data-lenis className="min-h-screen pt-16 md:pt-20 bg-background">
  <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Blog</h1>
          <p className="text-base md:text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Stories, updates, and learnings from Kainosverse
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Stories, Real Change — How Small Towns Are Dreaming Big with Kainosverse
              </h2>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Last week, I visited a small school on the outskirts of Raipur — a place where most classrooms still run on chalkboards and dreams often remain unspoken. We were there to talk about entrepreneurship and artificial intelligence — two words that might sound distant to many, but I wanted these students to feel how the world is now literally in their fingertips because of technology. When I looked around that classroom, I didn’t just see students. I saw thinkers, dreamers, and silent revolutionaries. We began by asking them one simple question: <em>“If you had the power to change one thing around you, what would it be?”</em> And what followed left all of us speechless. Some talked about building machines that could reduce pollution in their city. Some wanted to clean water bodies to stop the spread of diseases. One young boy confidently shared his dream to create a software that could collect space debris — yes, from outer space! These weren’t just random ideas. They were sparks — raw, real, and full of purpose.
              </p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>At that moment, I realized something profound: Innovation doesn’t need big cities — it needs big hearts and open minds.</strong>
              </p>

              <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img loading="lazy" src="/pic.jpg" alt="Kainosverse visit" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md" />
                <img loading="lazy" src="/pic2.jpg" alt="Students brainstorming" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md" />
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                These kids, from small-town classrooms, are already seeing the world not as it is, but as it could be. They don’t yet have fancy labs or startup incubators, but they have something even more powerful — curiosity, empathy, and courage to imagine beyond limitations. And that’s where Kainosverse steps in. We don’t just teach students what entrepreneurship means — we help them feel it. We give them a playground of ideas, where creativity has no boundaries, where mistakes are celebrated, and where every <em>“what if”</em> is turned into a <strong>“why not.”</strong>
              </p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Standing in that classroom, listening to those ideas, I couldn’t help but feel emotional. Because if this is the level of thought coming from 8th and 9th graders, imagine what they could do with the right guidance, mentorship, and access to technology. These children are not just the future of our nation — they are the builders of a new India, an India that thinks independently, solves fearlessly, and dreams endlessly. And I truly believe, If we mould them right and provide the right resources, they won’t just change their cities — they will conquer the world someday.
              </p>

              <p className="text-accent font-semibold mt-6">That’s what Kainosverse stands for. That’s what keeps us moving — one school, one idea, one dream at a time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Stay
            Tuned</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow our journey and updates here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
