import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Pill, Shield, Heart, Leaf } from "lucide-react";

const Supplements = () => {
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
              Medical-Grade Supplements
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pharmaceutical-quality supplements selected and recommended by our physicians 
              to support your individual health needs and treatment goals.
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
                Why Medical-Grade Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Not all supplements are created equal. Over-the-counter vitamins and supplements 
                  vary widely in quality, potency, and absorption. Many contain fillers, 
                  inadequate doses, or forms of nutrients that your body can't effectively use.
                </p>
                <p>
                  Medical-grade supplements undergo rigorous testing for purity, potency, and 
                  bioavailability. At Vitalia, we only recommend pharmaceutical-quality products 
                  from trusted manufacturers that meet the highest industry standards.
                </p>
                <p>
                  More importantly, our physicians prescribe supplements based on your lab work 
                  and health assessment—not guesswork. This targeted approach ensures you're 
                  taking what you actually need, in the right doses, for optimal benefit.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                The Vitalia Difference
              </h3>
              <ul className="space-y-4">
                {[
                  "Physician-recommended formulations",
                  "Third-party tested for purity",
                  "Optimal bioavailability",
                  "Evidence-based dosing",
                  "No unnecessary fillers",
                  "Personalized to your lab results",
                  "Ongoing monitoring and adjustment",
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

      {/* Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Supplement Categories
            </h2>
            <p className="text-muted-foreground text-lg">
              Our supplement recommendations are tailored to your specific health needs, 
              often addressing deficiencies or supporting treatment protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Hormone Support",
                items: ["DIM", "Vitex", "Adrenal support", "DHEA"],
              },
              {
                icon: Leaf,
                title: "Essential Nutrients",
                items: ["Vitamin D3+K2", "B-Complex", "Magnesium", "Omega-3s"],
              },
              {
                icon: Shield,
                title: "Metabolic Health",
                items: ["Berberine", "Chromium", "Alpha-lipoic acid", "Probiotics"],
              },
              {
                icon: Pill,
                title: "Longevity & Wellness",
                items: ["CoQ10", "NAC", "Resveratrol", "Collagen peptides"],
              },
            ].map((category) => (
              <div key={category.title} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We review your lab results and health history to identify deficiencies and areas for support.",
              },
              {
                step: "02",
                title: "Personalized Plan",
                description: "Your physician recommends specific supplements, doses, and timing based on your needs.",
              },
              {
                step: "03",
                title: "Ongoing Support",
                description: "Regular monitoring ensures your supplement protocol continues to serve your health goals.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-xl font-semibold">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Get Personalized Supplement Guidance
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss your health needs and receive 
            evidence-based supplement recommendations.
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

export default Supplements;
