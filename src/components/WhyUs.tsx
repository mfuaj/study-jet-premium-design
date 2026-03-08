import { Globe, Users, Network, Heart, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  { icon: Globe, title: "Global Presence", description: "Our offices across multiple countries provide localized support to students." },
  { icon: Users, title: "Experienced Team", description: "Our professionals have extensive knowledge of international education systems and visa processes." },
  { icon: Network, title: "Strong Network", description: "We have partnerships with top universities worldwide, ensuring quality placements for students." },
  { icon: Heart, title: "Student-Centric Approach", description: "We focus on providing personalized guidance to meet the unique needs of each student." },
  { icon: TrendingUp, title: "Proven Success Rate", description: "A high percentage of our students secure admission to their preferred institutions." },
];

const stats = [
  { value: "5000+", label: "Students Placed" },
  { value: "150+", label: "Partner Universities" },
  { value: "6", label: "Countries" },
  { value: "98%", label: "Success Rate" },
];

const WhyUs = () => {
  const header = useScrollReveal();
  const statsReveal = useScrollReveal({ threshold: 0.1 });
  const reasonsReveal = useScrollReveal({ threshold: 0.1 });
  const presence = useScrollReveal();

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">Partner with Excellence</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        <div ref={statsReveal.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 lg:p-8 bg-card rounded-lg shadow-elegant border border-border/50 transition-all duration-700 ${
                statsReveal.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
              }`}
              style={{ transitionDelay: statsReveal.isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <p className="font-display text-4xl lg:text-5xl font-bold text-gold mb-2">{stat.value}</p>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <div ref={reasonsReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex gap-5 group transition-all duration-700 ${
                reasonsReveal.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: reasonsReveal.isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">{reason.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={presence.ref} className={`mt-20 text-center transition-all duration-700 ${presence.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">Our Global Presence</h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {["Hungary", "Bangladesh", "European Partner Offices"].map((country) => (
              <span key={country} className="px-6 py-3 bg-muted rounded-full font-body text-sm text-foreground border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
