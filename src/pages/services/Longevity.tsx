import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Activity, Brain, Heart, Shield, Sparkles } from "lucide-react";

const Longevity = () => {
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
              Longevity & Preventive Care
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proactive health strategies designed to optimize your vitality, reduce disease 
              risk, and support a vibrant, active life for decades to come.
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
                Investing in Your Future Health
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Traditional medicine often waits until problems arise before taking action. 
                  Preventive care takes a different approach: identifying and addressing risk 
                  factors before they become serious health issues.
                </p>
                <p>
                  Our longevity program combines advanced diagnostics, lifestyle optimization, 
                  and evidence-based interventions to help you age well. We look at markers 
                  beyond standard health screenings—tracking inflammation, metabolic health, 
                  hormone balance, and other indicators of cellular aging.
                </p>
                <p>
                  The goal isn't just adding years to your life, but adding life to your years. 
                  Through personalized strategies, we help you maintain energy, cognitive function, 
                  physical capability, and overall vitality as you age.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Key Focus Areas
              </h3>
              <ul className="space-y-4">
                {[
                  "Cardiovascular health optimization",
                  "Metabolic health and insulin sensitivity",
                  "Hormone balance and optimization",
                  "Cognitive function and brain health",
                  "Bone density and muscle preservation",
                  "Inflammation reduction",
                  "Sleep quality optimization",
                  "Stress management and resilience",
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

      {/* Pillars */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              The Pillars of Longevity
            </h2>
            <p className="text-muted-foreground text-lg">
              Our comprehensive approach addresses multiple factors that influence 
              how well you age and how vital you feel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Advanced Diagnostics",
                description: "Comprehensive testing beyond standard panels to identify early risk factors and track biological age markers.",
              },
              {
                icon: Heart,
                title: "Cardiovascular Optimization",
                description: "Proactive strategies to protect heart health, including advanced lipid management and blood pressure optimization.",
              },
              {
                icon: Brain,
                title: "Cognitive Health",
                description: "Support for brain health and mental clarity through nutrition, supplements, and lifestyle interventions.",
              },
              {
                icon: Shield,
                title: "Immune Function",
                description: "Strategies to maintain a robust, balanced immune system that protects without overreacting.",
              },
              {
                icon: Sparkles,
                title: "Hormone Optimization",
                description: "Careful hormone management to maintain energy, mood, and metabolic health through midlife and beyond.",
              },
              {
                icon: Clock,
                title: "Lifestyle Medicine",
                description: "Evidence-based guidance on exercise, nutrition, sleep, and stress management for optimal aging.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-card rounded-xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-sage-light rounded-2xl aspect-square flex items-center justify-center">
              <Clock className="w-32 h-32 text-primary/30" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Our Longevity Program
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Comprehensive Health Assessment",
                    description: "Detailed evaluation including advanced lab work, health history, and lifestyle analysis.",
                  },
                  {
                    title: "Personalized Longevity Plan",
                    description: "Custom strategies addressing your specific risk factors and health optimization goals.",
                  },
                  {
                    title: "Regular Monitoring",
                    description: "Ongoing tracking of key biomarkers to measure progress and adjust interventions.",
                  },
                  {
                    title: "Continuous Support",
                    description: "Regular consultations to discuss progress, address concerns, and refine your plan.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
            Invest in Your Future Vitality
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss how proactive health management 
            can help you age with energy and vitality.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Start Your Longevity Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Longevity;
