import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Weight Loss", href: "/services/weight-loss" },
  { name: "Menopause & HRT", href: "/services/menopause-hrt" },
  { name: "Lab Tests", href: "/services/lab-tests" },
  { name: "Medical Skin Care", href: "/services/skin-care" },
  { name: "Supplements", href: "/services/supplements" },
  { name: "Longevity Care", href: "/services/longevity" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-sage-dark text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">V</span>
              </div>
              <span className="font-serif text-xl font-semibold">Vitalia</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Dedicated to women's health and wellness through personalized, 
              evidence-based medical care.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  123 Wellness Avenue<br />
                  Suite 200<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose flex-shrink-0" />
                <a href="mailto:hello@vitalia.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  hello@vitalia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-rose mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Mon–Fri: 8am–6pm<br />
                  Sat: 9am–2pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Vitalia Women's Health Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
