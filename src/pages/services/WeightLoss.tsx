import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Heart, Utensils, Activity } from "lucide-react";
import serviceImage from "@/assets/service-weight-loss.jpg";

const WeightLoss = () => {
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
              Women's Weight Loss Program
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Medically supervised weight management designed around your body, hormones, 
              metabolism, and lifestyle—because lasting results require a personalized approach.
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
                Why Women's Weight Loss Is Different
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Women's bodies respond differently to weight loss interventions than men's. Hormonal 
                  fluctuations, thyroid function, metabolic adaptations, and life stages like 
                  perimenopause all influence how your body stores and releases fat.
                </p>
                <p>
                  At Vitalia, we don't believe in one-size-fits-all diets. Our medical weight loss 
                  program begins with comprehensive testing to understand your unique metabolic profile, 
                  then creates a customized plan that works with your body, not against it.
                </p>
                <p>
                  Under physician supervision, we combine nutrition counseling, lifestyle modifications, 
                  and when medically appropriate, prescription interventions to help you achieve 
                  sustainable results.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Common Concerns We Address
              </h3>
              <ul className="space-y-4">
                {[
                  "Weight gain during perimenopause or menopause",
                  "Difficulty losing weight despite diet and exercise",
                  "Hormonal imbalances affecting metabolism",
                  "Thyroid-related weight challenges",
                  "Insulin resistance and metabolic syndrome",
                  "Emotional and stress-related eating patterns",
                  "Weight regain after previous diets",
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

      {/* Our Approach */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Medical Approach
            </h2>
            <p className="text-muted-foreground text-lg">
              Sustainable weight loss requires understanding your body's unique needs. 
              Our comprehensive program addresses all factors affecting your weight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Comprehensive Assessment",
                description: "Detailed metabolic testing, hormone panels, and health evaluation to identify underlying factors affecting your weight.",
              },
              {
                icon: Utensils,
                title: "Personalized Nutrition",
                description: "Custom meal plans designed for your metabolism, preferences, and lifestyle—not restrictive fads that don't last.",
              },
              {
                icon: Activity,
                title: "Medical Support",
                description: "When appropriate, prescription medications can support your weight loss journey under careful physician supervision.",
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
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img 
                src={serviceImage} 
                alt="Woman measuring her waist during weight loss program" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                What You Can Expect
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Sustainable Results",
                    description: "Our focus is on lasting change, not quick fixes that lead to regain.",
                  },
                  {
                    title: "Improved Energy",
                    description: "Proper nutrition and metabolic balance restore natural vitality.",
                  },
                  {
                    title: "Better Sleep",
                    description: "Weight optimization often improves sleep quality and duration.",
                  },
                  {
                    title: "Reduced Health Risks",
                    description: "Weight management lowers risks for cardiovascular disease, diabetes, and more.",
                  },
                  {
                    title: "Enhanced Confidence",
                    description: "Achieving your goals brings renewed self-assurance in daily life.",
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
            Ready to Begin Your Weight Loss Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss your goals and learn how our personalized 
            medical approach can help you achieve lasting results.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WeightLoss;
