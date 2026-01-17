import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Stethoscope, FlaskConical, FileText, Heart, Calendar } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Schedule Your Consultation",
    description: "Book your initial appointment online or by phone. We'll gather basic information about your health concerns and goals to prepare for your visit.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Complete Your Health History",
    description: "Before your first appointment, you'll complete a detailed questionnaire about your medical history, current symptoms, lifestyle, and health objectives.",
  },
  {
    icon: Stethoscope,
    number: "03",
    title: "Initial Consultation",
    description: "Meet with one of our physicians for an in-depth conversation about your health. We take time to listen, understand your concerns, and discuss potential approaches.",
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Diagnostic Testing",
    description: "Based on your consultation, we'll order appropriate lab work and diagnostics. Most testing can be done in our office for your convenience.",
  },
  {
    icon: FileText,
    number: "05",
    title: "Personalized Care Plan",
    description: "Once results are in, your physician develops a customized treatment plan addressing your specific needs, explaining each recommendation in detail.",
  },
  {
    icon: Heart,
    number: "06",
    title: "Ongoing Care & Support",
    description: "Your health journey continues with regular follow-ups, progress monitoring, and plan adjustments as needed. We're your partners in long-term wellness.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Your Patient Journey</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From your first consultation to ongoing care, here's what to expect 
              when you begin your health journey with Vitalia.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`relative flex gap-8 ${index !== steps.length - 1 ? 'pb-16' : ''}`}
              >
                {/* Timeline line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-border -translate-x-1/2" />
                )}
                
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <span className="font-serif text-xl font-semibold">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-3">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                What Makes Us Different
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Unhurried Appointments",
                    description: "Your initial consultation is a full hour—time for real conversation, not a rushed visit.",
                  },
                  {
                    title: "Thorough Diagnostics",
                    description: "We don't guess. Comprehensive testing provides the foundation for effective treatment.",
                  },
                  {
                    title: "Clear Communication",
                    description: "We explain everything in plain language, answer all your questions, and involve you in decisions.",
                  },
                  {
                    title: "Coordinated Care",
                    description: "Our team works together, ensuring continuity whether you're seeing us for hormones, weight loss, or skin care.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Before Your First Visit
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <span>Complete the online health questionnaire we'll send you</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <span>Gather any recent lab results or medical records</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <span>List your current medications and supplements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">4</span>
                  </div>
                  <span>Write down your questions and health goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Take the first step toward personalized healthcare. Schedule your 
            initial consultation today.
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

export default HowItWorks;
