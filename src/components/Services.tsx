import {
  GraduationCap,
  FileCheck,
  FileText,
  Plane,
  Award,
  Briefcase,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Admission Assistance",
    description:
      "Helping students choose the right university and program based on their academic background and career goals.",
  },
  {
    icon: FileCheck,
    title: "Visa Consultation",
    description:
      "Guiding students through the visa application process, ensuring compliance with all necessary requirements.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Assisting with application forms, personal statements, recommendation letters, and financial documents.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Guidance",
    description:
      "Providing essential information on accommodation, cultural adaptation, and travel arrangements.",
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description:
      "Helping students explore and apply for scholarships and financial aid opportunities.",
  },
  {
    icon: Briefcase,
    title: "Career Counseling",
    description:
      "Offering expert advice on career prospects, internships, and job placements post-graduation.",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description:
      "Assisting students with IELTS, TOEFL, GRE, GMAT, and other standardized tests required for admission.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive support at every step of your educational journey abroad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 lg:p-8 rounded-lg shadow-elegant border border-border/50 group hover:shadow-card hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
