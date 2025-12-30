import { Globe, Users, Network, Heart, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Presence",
    description:
      "Our offices across multiple countries provide localized support to students.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our professionals have extensive knowledge of international education systems and visa processes.",
  },
  {
    icon: Network,
    title: "Strong Network",
    description:
      "We have partnerships with top universities worldwide, ensuring quality placements for students.",
  },
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description:
      "We focus on providing personalized guidance to meet the unique needs of each student.",
  },
  {
    icon: TrendingUp,
    title: "Proven Success Rate",
    description:
      "A high percentage of our students secure admission to their preferred institutions.",
  },
];

const stats = [
  { value: "5000+", label: "Students Placed" },
  { value: "150+", label: "Partner Universities" },
  { value: "6", label: "Countries" },
  { value: "98%", label: "Success Rate" },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Partner with Excellence
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 bg-card rounded-lg shadow-elegant border border-border/50"
            >
              <p className="font-display text-4xl lg:text-5xl font-bold text-gold mb-2">
                {stat.value}
              </p>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-5 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">
            Our Global Presence
          </h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {["Pakistan", "Bangladesh", "India", "Nepal", "Sri Lanka", "UK", "Hungary", "Australia"].map(
              (country) => (
                <span
                  key={country}
                  className="px-6 py-3 bg-muted rounded-full font-body text-sm text-foreground border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                >
                  {country}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
