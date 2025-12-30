const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-display text-3xl font-semibold text-cream">
              Study<span className="text-gold">Jet</span>
            </a>
            <p className="font-body text-cream/70 mt-4 max-w-md leading-relaxed">
              Your trusted partner in international education. We help South Asian 
              students achieve their dreams of studying at prestigious universities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Why Choose Us", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="font-body text-cream/70 hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "University Admission",
                "Visa Consultation",
                "Scholarship Assistance",
                "Test Preparation",
                "Career Counseling",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-cream/50 text-sm">
            © {currentYear} Study Jet. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-cream/50 text-sm hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-cream/50 text-sm hover:text-gold transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
