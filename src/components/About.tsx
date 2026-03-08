import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            About Study Base
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            Based in Europe, Study Base specializes in guiding students to fulfill their 
            academic dreams abroad. With services covering Hungary, France, Italy, Germany, 
            Spain, and more, we assist students in securing admissions, scholarships, and visa 
            support. Our dedicated team of award-winning consultants and social workers is 
            committed to making the process smooth, efficient, and successful.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-card p-8 lg:p-10 rounded-lg shadow-card border border-border/50 group hover:border-gold/30 transition-all duration-500">
            <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              To bridge the gap between students and global educational institutions, 
              ensuring seamless transitions for students looking to study abroad. We strive 
              to provide high-quality, transparent, and ethical guidance to help students 
              achieve their academic and career goals.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-card p-8 lg:p-10 rounded-lg shadow-card border border-border/50 group hover:border-gold/30 transition-all duration-500">
            <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              To become the most trusted and recognized education consultancy, offering 
              unparalleled support and opportunities to students worldwide. We aim to build 
              strong partnerships with top universities and foster a culture of excellence 
              in international education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
