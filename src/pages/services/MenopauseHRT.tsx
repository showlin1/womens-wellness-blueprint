import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Heart, Moon, Brain, Zap } from "lucide-react";
import serviceImage from "@/assets/service-menopause-hrt.jpg";

const MenopauseHRT = () => {
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
              Menopause & Hormone Replacement Therapy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert care for perimenopause and menopause, including personalized hormone 
              replacement therapy to help you reclaim comfort, energy, and quality of life.
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
                Understanding Menopause
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Menopause is a natural transition, but the symptoms don't have to disrupt your life. 
                  Hot flashes, night sweats, mood changes, weight gain, and sleep disturbances are 
                  common—and treatable.
                </p>
                <p>
                  At Vitalia, we specialize in helping women navigate perimenopause and menopause 
                  with personalized hormone therapy options. Through comprehensive testing and 
                  careful monitoring, we create treatment plans that address your specific symptoms 
                  and health profile.
                </p>
                <p>
                  Whether you're exploring bioidentical hormones, traditional HRT, or non-hormonal 
                  alternatives, our physicians guide you through the options with clear, evidence-based 
                  information.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Symptoms We Treat
              </h3>
              <ul className="space-y-4">
                {[
                  "Hot flashes and night sweats",
                  "Sleep disturbances and insomnia",
                  "Mood changes and irritability",
                  "Weight gain and metabolic changes",
                  "Vaginal dryness and discomfort",
                  "Brain fog and memory concerns",
                  "Low energy and fatigue",
                  "Decreased libido",
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
              Treatment Options
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer multiple approaches to menopause management, personalized to 
              your symptoms, health history, and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Bioidentical Hormone Therapy",
                description: "Hormones that are molecularly identical to those your body naturally produces, available in various delivery methods including creams, patches, and pellets.",
              },
              {
                icon: Zap,
                title: "Traditional HRT",
                description: "FDA-approved hormone replacement options with proven efficacy for symptom relief, carefully prescribed based on your individual health profile.",
              },
              {
                icon: Moon,
                title: "Non-Hormonal Alternatives",
                description: "For women who prefer or require non-hormonal approaches, we offer evidence-based alternatives for symptom management.",
              },
              {
                icon: Brain,
                title: "Lifestyle Integration",
                description: "Comprehensive guidance on nutrition, exercise, sleep, and stress management to complement your treatment plan.",
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

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden aspect-square order-2 lg:order-1">
              <img 
                src={serviceImage} 
                alt="Woman during menopause consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Benefits of Proper Hormone Management
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Relief from Hot Flashes",
                    description: "Significant reduction in frequency and severity of vasomotor symptoms.",
                  },
                  {
                    title: "Improved Sleep Quality",
                    description: "Better rest without night sweats disrupting your sleep cycle.",
                  },
                  {
                    title: "Mental Clarity",
                    description: "Reduced brain fog and improved cognitive function.",
                  },
                  {
                    title: "Mood Stability",
                    description: "More balanced emotions and reduced irritability.",
                  },
                  {
                    title: "Bone Health Protection",
                    description: "Hormone therapy can help maintain bone density and reduce osteoporosis risk.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
            Navigate Menopause with Confidence
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss your symptoms and explore 
            personalized hormone therapy options.
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

export default MenopauseHRT;
