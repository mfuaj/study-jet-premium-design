import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Start Your Journey Today
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to take the first step towards your international education? 
            Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-primary mb-1">Website</p>
                    <a
                      href="https://studyjet.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      studyjet.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-primary mb-1">Email</p>
                    <a
                      href="mailto:studyjet.official@gmail.com"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      studyjet.official@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-primary mb-1">Phone</p>
                    <a
                      href="tel:+36705517102"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      +36 70 551 7102
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-primary mb-1">Office Locations</p>
                    <p className="font-body text-muted-foreground">
                      Pakistan, Bangladesh, UK, Hungary, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Country of Interest
                </label>
                <select className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-gold transition-colors">
                  <option value="">Select a country</option>
                  <option value="usa">USA</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="europe">Europe</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your educational goals..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
