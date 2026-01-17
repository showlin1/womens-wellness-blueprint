import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Sun, Droplet, Shield } from "lucide-react";
import serviceImage from "@/assets/service-skin-care.jpg";

const SkinCare = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Link to="/services" className="text-primary font-medium mb-4 inline-flex items-center gap-2 text-sm hover:underline">
              ← Back to Services
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 mt-4">
              Medical Skin Care
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advanced dermatological treatments and personalized skin care protocols 
              to help you achieve healthy, radiant skin at every age.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Beyond Basic Skincare
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your skin is a reflection of your overall health. Hormonal changes, aging, 
                  sun exposure, and lifestyle factors all affect how your skin looks and feels. 
                  Over-the-counter products can only do so much—medical-grade treatments offer 
                  results you can truly see.
                </p>
                <p>
                  At Vitalia, our medical skin care program combines prescription-strength 
                  products with advanced in-office treatments. Whether you're addressing aging 
                  concerns, hormonal acne, hyperpigmentation, or simply want to optimize your 
                  skin health, we create personalized protocols based on your skin's needs.
                </p>
                <p>
                  All treatments are performed by trained professionals and supervised by 
                  our board-certified dermatologist, ensuring safety and efficacy.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Conditions We Treat
              </h3>
              <ul className="space-y-4">
                {[
                  "Fine lines and wrinkles",
                  "Age spots and hyperpigmentation",
                  "Hormonal and adult acne",
                  "Rosacea and redness",
                  "Uneven skin tone and texture",
                  "Sun damage",
                  "Loss of firmness and elasticity",
                  "Dull, tired-looking skin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Treatment Options
            </h2>
            <p className="text-muted-foreground text-lg">
              From prescription skincare to advanced treatments, we offer 
              comprehensive solutions for every skin concern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Droplet,
                title: "Prescription Skincare",
                description: "Medical-grade retinoids, antioxidants, and targeted treatments that deliver real results, customized for your skin type and concerns.",
              },
              {
                icon: Sparkles,
                title: "Chemical Peels",
                description: "Professional-strength peels to address texture, tone, acne, and signs of aging with minimal downtime.",
              },
              {
                icon: Sun,
                title: "Laser & Light Therapy",
                description: "Advanced technology to treat sun damage, redness, fine lines, and improve overall skin quality.",
              },
              {
                icon: Shield,
                title: "Preventive Protocols",
                description: "Comprehensive skin protection strategies including medical-grade sunscreens and antioxidant regimens.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img 
                src={serviceImage} 
                alt="Woman receiving medical skincare treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Our Approach to Skin Health
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Comprehensive Skin Analysis",
                    description: "We assess your skin's current condition, identify concerns, and understand your goals.",
                  },
                  {
                    title: "Personalized Treatment Plan",
                    description: "Custom protocols combining at-home care with in-office treatments for optimal results.",
                  },
                  {
                    title: "Quality Products Only",
                    description: "We recommend and provide only proven, medical-grade products that deliver results.",
                  },
                  {
                    title: "Ongoing Optimization",
                    description: "Regular check-ins to adjust your protocol as your skin improves and changes.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Reveal Your Best Skin
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a skin consultation to discuss your concerns and learn 
            about personalized treatment options.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Book Your Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SkinCare;
