import { Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Recognition
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Our Achievements
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-10" />

          <div className="bg-card p-10 lg:p-14 rounded-lg shadow-card border border-border/50">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Trophy className="w-8 h-8 text-gold" />
            </div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Study Base has been recognized nationally and internationally for our commitment 
              to excellence and dedication to student success. Our awards reflect our dedication 
              to helping students realize their academic dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
