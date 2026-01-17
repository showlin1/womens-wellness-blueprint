import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Scale, 
  Heart, 
  FlaskConical, 
  Sparkles, 
  Pill, 
  Clock 
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Women's Weight Loss",
    slug: "weight-loss",
    description: "Medically supervised weight management programs designed for women's unique metabolic needs.",
    benefits: ["Personalized nutrition plans", "Metabolic testing", "Medical interventions when appropriate", "Ongoing support"],
  },
  {
    icon: Heart,
    title: "Menopause & Hormone Replacement Therapy",
    slug: "menopause-hrt",
    description: "Comprehensive hormone health services to help you navigate perimenopause and menopause with confidence.",
    benefits: ["Bioidentical hormone therapy", "Symptom management", "Regular monitoring", "Quality of life improvement"],
  },
  {
    icon: FlaskConical,
    title: "Lab Tests & Diagnostics",
    slug: "lab-tests",
    description: "Advanced diagnostic testing to provide a complete picture of your health and guide treatment decisions.",
    benefits: ["Comprehensive hormone panels", "Metabolic markers", "Cardiovascular screening", "Wellness panels"],
  },
  {
    icon: Sparkles,
    title: "Medical Skin Care",
    slug: "skin-care",
    description: "Medical-grade skin treatments and personalized protocols for healthy, radiant skin at any age.",
    benefits: ["Professional treatments", "Prescription skincare", "Anti-aging protocols", "Condition management"],
  },
  {
    icon: Pill,
    title: "Supplements",
    slug: "supplements",
    description: "Pharmaceutical-grade supplements selected to support your individual health needs and treatment goals.",
    benefits: ["Medical-grade quality", "Personalized recommendations", "Evidence-based formulations", "Ongoing guidance"],
  },
  {
    icon: Clock,
    title: "Longevity & Preventive Care",
    slug: "longevity",
    description: "Proactive health strategies designed to optimize your vitality and reduce disease risk for the long term.",
    benefits: ["Health risk assessment", "Preventive screenings", "Lifestyle optimization", "Ongoing monitoring"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Our Services</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Comprehensive Women's Health Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From diagnostics to treatment and ongoing support, we offer a full spectrum of services 
              designed to address women's unique health needs at every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-xl bg-sage-light flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} bg-sage-light rounded-2xl aspect-[4/3] flex items-center justify-center`}>
                  <service.icon className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation and our team will help determine the right services for your needs.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
