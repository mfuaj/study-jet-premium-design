import { Users } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            The People Behind
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Our Team
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-10" />

          <div className="bg-card p-10 lg:p-14 rounded-lg shadow-card border border-border/50">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-8 h-8 text-gold" />
            </div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Our team consists of dedicated consultants and social workers who bring a wealth 
              of experience to guide students on their educational journeys. Passionate about 
              making a difference, each team member is committed to providing personalized 
              support to ensure student success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
