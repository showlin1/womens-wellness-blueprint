import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  Sparkles, 
  Scale, 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  Clock,
  CheckCircle2,
  Star,
  Users
} from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const services = [
  {
    icon: Scale,
    title: "Weight Management",
    description: "Medically supervised weight loss programs tailored to your body, metabolism, and lifestyle goals.",
    href: "/services/weight-loss",
  },
  {
    icon: Heart,
    title: "Menopause & HRT",
    description: "Expert hormone replacement therapy to help you navigate menopause with comfort and confidence.",
    href: "/services/menopause-hrt",
  },
  {
    icon: FlaskConical,
    title: "Lab Tests & Diagnostics",
    description: "Comprehensive lab panels and diagnostic testing for a complete picture of your health.",
    href: "/services/lab-tests",
  },
  {
    icon: Sparkles,
    title: "Medical Skin Care",
    description: "Advanced dermatological treatments to rejuvenate and protect your skin at every age.",
    href: "/services/skin-care",
  },
  {
    icon: Pill,
    title: "Supplements",
    description: "Medical-grade supplements carefully selected to support your individual health needs.",
    href: "/services/supplements",
  },
  {
    icon: Clock,
    title: "Longevity & Preventive Care",
    description: "Proactive health strategies designed to optimize your vitality for years to come.",
    href: "/services/longevity",
  },
];

const features = [
  "Personalized treatment plans",
  "Board-certified physicians",
  "Evidence-based protocols",
  "Comprehensive diagnostics",
  "Ongoing support & monitoring",
  "Confidential & compassionate care",
];

const testimonials = [
  {
    quote: "The team at Vitalia truly listens. For the first time, I feel like my health concerns are being addressed holistically.",
    author: "Sarah M.",
    role: "Patient since 2023",
  },
  {
    quote: "After struggling with weight for years, the personalized approach here finally helped me achieve lasting results.",
    author: "Jennifer L.",
    role: "Patient since 2022",
  },
  {
    quote: "Navigating menopause was overwhelming until I found Vitalia. Their HRT program changed my life.",
    author: "Patricia K.",
    role: "Patient since 2021",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Women's Health & Wellness
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Personalized Care for Every Stage of Your Life
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Vitalia, we believe every woman deserves healthcare that understands her unique needs. 
              From hormone health to weight management, we're here to support your journey to optimal wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-secondary py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">15+</p>
              <p className="text-muted-foreground text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">5,000+</p>
              <p className="text-muted-foreground text-sm mt-1">Patients Treated</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">98%</p>
              <p className="text-muted-foreground text-sm mt-1">Patient Satisfaction</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">Board</p>
              <p className="text-muted-foreground text-sm mt-1">Certified Physicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Our Services</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Comprehensive Women's Health Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From diagnostics to treatment, we offer a full spectrum of services designed specifically 
              for women's unique health needs at every life stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group card-elevated p-8 hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Why Vitalia</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Healthcare Designed Around You
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We understand that women's health needs are unique and ever-changing. Our approach 
                combines cutting-edge medicine with compassionate care, ensuring you receive 
                treatment that's as individual as you are.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Learn About Our Approach
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-elevated p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="font-serif text-xl font-semibold">Our Commitment</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Evidence-Based Medicine</p>
                      <p className="text-sm text-muted-foreground">Every treatment is backed by clinical research and proven results.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Personalized Attention</p>
                      <p className="text-sm text-muted-foreground">We take time to understand your goals and create custom care plans.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Long-Term Partnership</p>
                      <p className="text-sm text-muted-foreground">We're here for every stage of your health journey.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Patient Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Trusted by Women Across the Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Begin Your Journey to Better Health
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss your health goals with our expert team. 
            Together, we'll create a personalized care plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl"
              asChild
            >
              <Link to="/contact">
                Book Your Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
