import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "Study Base made my dream of studying abroad a reality. Their team guided me through the entire admission and visa process effortlessly.",
    name: "Jahidul Islam",
    location: "Bangladesh",
  },
  {
    quote: "Thanks to Study Base, I secured my admission in Hungary. Their expert guidance was invaluable.",
    name: "Sahil Safraz",
    location: "Pakistan",
  },
];

const Testimonials = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={header.ref} className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">Success Stories</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">What Our Students Say</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        <div ref={grid.ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-cream/5 backdrop-blur-sm p-8 lg:p-10 rounded-lg border border-cream/10 transition-all duration-700 ${
                grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: grid.isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <Quote className="w-10 h-10 text-gold mb-6" />
              <p className="font-body text-cream/90 text-lg leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-display text-xl font-semibold text-cream">{testimonial.name}</p>
                <p className="font-body text-gold text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
