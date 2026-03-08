import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
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
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Animated particles / decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[20%] w-1.5 h-1.5 bg-cream/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-gold/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2.5 h-2.5 bg-cream/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 opacity-0 animate-scale-in">
            <img
              src={logo}
              alt="Study Base logo"
              className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain drop-shadow-lg animate-float"
            />
          </div>

          {/* Tagline */}
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up animation-delay-100">
            Your Gateway to Global Education Success
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream mb-8 opacity-0 animate-fade-up animation-delay-200">
            Study <span className="text-gradient-gold">Base</span>
          </h1>

          {/* Subtitle */}
          <p className="text-cream/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-300">
            Based in Europe, Study Base specializes in guiding students to fulfill their 
            academic dreams abroad. Let us help you achieve your dreams and reach your highest potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl" className="animate-pulse-glow">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60 hover:text-gold transition-colors duration-300 opacity-0 animate-fade-up animation-delay-500"
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
