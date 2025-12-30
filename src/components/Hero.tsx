import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up">
            Premium Education Consultancy
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream mb-8 opacity-0 animate-fade-up animation-delay-100">
            Study Jet
          </h1>

          {/* Subtitle */}
          <p className="text-cream/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Your gateway to world-class education. We guide South Asian students 
            to prestigious universities across the globe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Start Your Journey
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60 hover:text-gold transition-colors duration-300 opacity-0 animate-fade-up animation-delay-400"
        aria-label="Scroll to learn more"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
