import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FlaskConical, Heart, Activity, Droplets, Dna } from "lucide-react";
import serviceImage from "@/assets/service-lab-tests.jpg";

const LabTests = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/services" className="text-primary font-medium mb-4 inline-flex items-center gap-2 text-sm hover:underline">
                ← Back to Services
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 mt-4">
                Lab Tests & Diagnostics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive laboratory testing designed for women's health, providing 
                the insights needed to create effective, personalized treatment plans.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={serviceImage} 
                alt="Healthcare professional performing diagnostic blood test" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                The Foundation of Personalized Care
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Effective treatment begins with understanding what's happening inside your body. 
                  Standard lab work often misses critical markers specific to women's health—that's 
                  why we offer comprehensive panels designed to reveal the complete picture.
                </p>
                <p>
                  Our diagnostic services go beyond basic bloodwork to include detailed hormone 
                  panels, metabolic markers, thyroid function, nutritional status, and 
                  cardiovascular indicators. These insights allow our physicians to identify 
                  underlying issues and create targeted treatment plans.
                </p>
                <p>
                  All testing is performed in-house or through accredited laboratories, with 
                  results reviewed personally by our medical team during your follow-up consultation.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Why Choose Our Diagnostic Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Women-focused testing panels",
                  "Comprehensive hormone analysis",
                  "Detailed result interpretation",
                  "One-on-one physician review",
                  "Treatment recommendations included",
                  "Convenient in-office collection",
                  "Fast turnaround times",
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

      {/* Test Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Testing Panels
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer specialized testing panels designed to address women's most 
              common health concerns and questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Comprehensive Hormone Panel",
                tests: ["Estrogen levels", "Progesterone", "Testosterone", "DHEA-S", "FSH & LH", "Cortisol"],
              },
              {
                icon: Activity,
                title: "Thyroid Function Panel",
                tests: ["TSH", "Free T3 & T4", "Thyroid antibodies", "Reverse T3", "Thyroid peroxidase"],
              },
              {
                icon: Droplets,
                title: "Metabolic Health Panel",
                tests: ["Fasting glucose", "HbA1c", "Insulin levels", "Lipid panel", "Inflammation markers"],
              },
              {
                icon: FlaskConical,
                title: "Nutritional Status Panel",
                tests: ["Vitamin D", "B12 & Folate", "Iron studies", "Magnesium", "Zinc"],
              },
              {
                icon: Dna,
                title: "Cardiovascular Risk Panel",
                tests: ["Advanced lipid testing", "Homocysteine", "hs-CRP", "Lipoprotein(a)", "ApoB"],
              },
              {
                icon: Heart,
                title: "Wellness Check Panel",
                tests: ["Complete blood count", "Comprehensive metabolic panel", "Liver function", "Kidney function"],
              },
            ].map((panel) => (
              <div key={panel.title} className="bg-card rounded-xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-6">
                  <panel.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  {panel.title}
                </h3>
                <ul className="space-y-2">
                  {panel.tests.map((test) => (
                    <li key={test} className="text-muted-foreground text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {test}
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
              What to Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your symptoms and health goals to determine which tests are most appropriate for you.",
              },
              {
                step: "02",
                title: "Sample Collection",
                description: "Convenient in-office blood draw by our trained phlebotomists, typically completed in minutes.",
              },
              {
                step: "03",
                title: "Results Review",
                description: "Schedule a follow-up to review results with your physician and discuss treatment recommendations.",
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
            Get the Answers You Deserve
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive testing is the first step toward understanding your health. 
            Schedule a consultation to discuss which panels are right for you.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Schedule Your Testing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LabTests;
