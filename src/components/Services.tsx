import {
  GraduationCap,
  FileCheck,
  FileText,
  Briefcase,
  Award,
  Users,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Admission & Transfer Support",
    description:
      "We help students secure admissions at top European universities and provide seamless support for those transferring. Our team ensures each student finds the right fit for their academic and personal goals.",
  },
  {
    icon: Award,
    title: "Scholarships & Financial Aid",
    description:
      "We assist in applying for scholarships and financial aid to help ease the cost of studying abroad. Our expertise in scholarship applications increases students' chances of receiving funding.",
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description:
      "Our job placement assistance helps students find work opportunities to support their studies, providing both financial support and valuable experience.",
  },
  {
    icon: FileCheck,
    title: "Visa & Immigration Assistance",
    description:
      "Navigating visa requirements is complex. Our experts guide students through the process, ensuring all documentation is in order for a successful application.",
  },
  {
    icon: FileText,
    title: "Document & Legal Support",
    description:
      "We offer comprehensive document support, including notarization, translation, and legal certifications. Our team ensures all paperwork meets university and immigration standards.",
  },
  {
    icon: Users,
    title: "Student Support Services",
    description:
      "From accommodation and airport pickup to financial advice and local orientation, our support services are designed to make the transition to studying abroad as smooth as possible.",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
