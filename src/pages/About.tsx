import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every treatment plan begins with listening. We take time to understand your unique health concerns, lifestyle, and goals.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Our physicians stay at the forefront of women's health research, bringing you the most effective, evidence-based treatments.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work alongside you as partners in your health journey, providing education and support at every step.",
  },
  {
    icon: Clock,
    title: "Long-Term Wellness",
    description: "Beyond treating symptoms, we focus on sustainable health strategies that serve you for years to come.",
  },
];

const team = [
  {
    name: "Dr. Emily Richardson",
    role: "Medical Director, Board-Certified OB/GYN",
    description: "With over 20 years of experience in women's health, Dr. Richardson leads our clinical team with expertise in hormone therapy and integrative medicine.",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Specialist in Metabolic Health",
    description: "Dr. Chen focuses on weight management and metabolic disorders, helping patients achieve sustainable results through personalized protocols.",
  },
  {
    name: "Dr. Michelle Torres",
    role: "Board-Certified Dermatologist",
    description: "Specializing in medical aesthetics and skin health, Dr. Torres brings advanced dermatological treatments to our comprehensive care model.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">About Vitalia</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Dedicated to Women's Health Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a singular mission: to provide women with personalized, evidence-based 
              healthcare that addresses their unique needs at every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vitalia Women's Health Clinic was established to fill a critical gap in healthcare: 
                  the need for comprehensive, personalized medical care designed specifically for women.
                </p>
                <p>
                  Too often, women's health concerns are minimized or addressed with one-size-fits-all 
                  solutions. We founded this clinic on the belief that every woman deserves thorough 
                  diagnostics, individualized treatment plans, and ongoing support from healthcare 
                  providers who truly listen.
                </p>
                <p>
                  Today, our team of board-certified physicians specializes in hormone health, weight 
                  management, preventive care, and medical aesthetics. We combine the latest clinical 
                  research with compassionate care to help you achieve optimal wellness.
                </p>
              </div>
            </div>
            <div className="bg-sage-light rounded-2xl p-12">
              <blockquote className="text-lg text-foreground italic leading-relaxed">
                "Our goal is simple: to provide the kind of healthcare we would want for ourselves 
                and our loved ones—thorough, personalized, and genuinely caring."
              </blockquote>
              <p className="mt-6 font-semibold text-foreground">— Dr. Emily Richardson</p>
              <p className="text-sm text-muted-foreground">Founder & Medical Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide every interaction, treatment plan, and clinical decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Our board-certified physicians bring decades of combined experience in women's health, 
              ensuring you receive expert care tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="w-20 h-20 rounded-full bg-sage-light flex items-center justify-center mb-6 mx-auto">
                  <span className="font-serif text-2xl font-semibold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
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
            Ready to Experience the Vitalia Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation and discover how personalized care can transform your health journey.
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

export default About;
