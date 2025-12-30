import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Study Jet made my dream of studying abroad a reality. Their team guided me through the entire admission and visa process effortlessly.",
    name: "Jahidul Islam",
    location: "Bangladesh",
  },
  {
    quote:
      "Thanks to Study Jet, I secured my admission in Hungary. Their expert guidance was invaluable.",
    name: "Sahil Safraz",
    location: "Pakistan",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Success Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
            What Our Students Say
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream/5 backdrop-blur-sm p-8 lg:p-10 rounded-lg border border-cream/10"
            >
              <Quote className="w-10 h-10 text-gold mb-6" />
              <p className="font-body text-cream/90 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display text-xl font-semibold text-cream">
                  {testimonial.name}
                </p>
                <p className="font-body text-gold text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Universities */}
        <div className="mt-24 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-8">
            Partner Universities Across
          </h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {["USA", "UK", "Canada", "Australia", "New Zealand", "Europe"].map(
              (region) => (
                <span
                  key={region}
                  className="px-8 py-4 bg-cream/5 backdrop-blur-sm rounded-full font-display text-lg text-cream border border-cream/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                >
                  {region}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
