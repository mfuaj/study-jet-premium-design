import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Our Network
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Our Partners
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-10" />

          <div className="bg-card p-10 lg:p-14 rounded-lg shadow-card border border-border/50">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <Handshake className="w-8 h-8 text-gold" />
            </div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Study Base collaborates with leading educational institutions and organizations 
              to provide top-notch support for our students. Our partnerships allow us to offer 
              a range of resources and opportunities tailored to each student's needs.
            </p>
            <p className="font-body text-primary font-medium mb-8">
              Interested in partnering with us?
            </p>
            <Button variant="gold" size="lg">
              Contact Us to Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
