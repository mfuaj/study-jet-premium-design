import { MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import EuropeMap from "@/components/EuropeMap";

const countries = [
  { name: "Hungary", description: "Vibrant student life and high-quality education make Hungary an ideal choice.", flag: "🇭🇺" },
  { name: "France", description: "Top universities and rich culture make France a prime study destination.", flag: "🇫🇷" },
  { name: "Italy", description: "Italy's historic universities attract students worldwide.", flag: "🇮🇹" },
  { name: "Germany", description: "Affordable education and world-class research facilities.", flag: "🇩🇪" },
  { name: "Spain", description: "A unique blend of culture and education makes Spain popular.", flag: "🇪🇸" },
  { name: "Malta", description: "English-speaking Mediterranean island with quality European education.", flag: "🇲🇹" },
  { name: "Netherlands", description: "Innovative education system with many English-taught programs.", flag: "🇳🇱" },
  { name: "South Korea", description: "Leading technology hub with top-ranked universities in Asia.", flag: "🇰🇷" },
  { name: "Lithuania", description: "Affordable tuition and living costs with quality European degrees.", flag: "🇱🇹" },
  { name: "Romania", description: "Growing destination for medical and engineering studies in Europe.", flag: "🇷🇴" },
];

const Countries = () => {
  const header = useScrollReveal();
  const map = useScrollReveal({ threshold: 0.1 });
  const grid = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="countries" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Study Destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Countries We Serve
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Interactive Map */}
        <div
          ref={map.ref}
          className={`mb-20 transition-all duration-1000 ${
            map.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <EuropeMap />
        </div>

        {/* Countries Grid */}
        <div
          ref={grid.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 ${
            grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-elegant border border-border/50 group hover:shadow-card hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
              style={{
                transitionDelay: grid.isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">{country.flag}</span>
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {country.name}
                </h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {country.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
