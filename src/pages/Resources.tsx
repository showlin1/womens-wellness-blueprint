import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Video, Download } from "lucide-react";

const articles = [
  {
    category: "Menopause",
    title: "Understanding Perimenopause: What Every Woman Should Know",
    excerpt: "Perimenopause can begin years before menopause. Learn to recognize the signs and understand your options.",
    readTime: "5 min read",
  },
  {
    category: "Weight Management",
    title: "Why Weight Loss Is Different After 40",
    excerpt: "Hormonal changes affect metabolism. Discover evidence-based strategies for sustainable weight management.",
    readTime: "6 min read",
  },
  {
    category: "Hormone Health",
    title: "Bioidentical vs. Traditional HRT: What's the Difference?",
    excerpt: "Compare hormone therapy options with clear, evidence-based information to inform your choices.",
    readTime: "7 min read",
  },
  {
    category: "Preventive Care",
    title: "Essential Health Screenings for Women by Age",
    excerpt: "A comprehensive guide to preventive screenings and when to schedule them throughout your life.",
    readTime: "8 min read",
  },
  {
    category: "Nutrition",
    title: "Nutrition for Hormone Balance",
    excerpt: "How dietary choices influence hormone levels and what foods support optimal hormonal health.",
    readTime: "6 min read",
  },
  {
    category: "Skin Health",
    title: "Medical Skincare vs. OTC Products: When to Upgrade",
    excerpt: "Learn when over-the-counter products fall short and medical-grade treatments make the difference.",
    readTime: "5 min read",
  },
];

const guides = [
  {
    title: "New Patient Guide",
    description: "Everything you need to know before your first appointment.",
    icon: FileText,
  },
  {
    title: "Menopause Symptom Tracker",
    description: "Track your symptoms to share with your physician.",
    icon: Download,
  },
  {
    title: "Healthy Eating Guide",
    description: "Nutrition recommendations for hormone health.",
    icon: BookOpen,
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Resources</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Health Education & Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowering you with knowledge. Explore our library of articles, guides, 
              and resources to support your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                Featured Articles
              </h2>
              <p className="text-muted-foreground mt-2">
                Evidence-based insights on women's health topics
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.title}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300 group cursor-pointer"
              >
                <div className="h-48 bg-sage-light flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-sage-light px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Patient Resources
            </h2>
            <p className="text-muted-foreground">
              Helpful tools and guides to support your care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <div 
                key={guide.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <guide.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {guide.description}
                </p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Download <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-sage-light rounded-2xl aspect-video flex items-center justify-center">
              <Video className="w-16 h-16 text-primary/30" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Educational Videos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Watch our physicians explain common conditions, treatment options, 
                and what to expect from various procedures. These videos provide 
                clear, accessible information to help you make informed decisions 
                about your care.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Understanding Your Hormone Panel Results
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  HRT: What to Expect in the First 30 Days
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Medical Weight Loss: Getting Started
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
            Have Questions?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Our team is here to help. Schedule a consultation to discuss 
            your health concerns and explore your options.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
