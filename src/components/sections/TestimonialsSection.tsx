import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TORS transformed my bedroom recording into something I never thought possible. The track hit #1 on the iTunes Singer/Songwriter charts.",
      author: "Emma Richardson",
      role: "Independent Artist",
      rating: 5,
    },
    {
      quote: "Working with TORS felt like having a major label team in my corner. Professional, creative, and they truly understood my vision.",
      author: "Marcus Chen",
      role: "Singer-Songwriter",
      rating: 5,
    },
    {
      quote: "Three of my songs produced by TORS have been placed in Netflix shows. They know how to create sync-ready music.",
      author: "Luna Parker",
      role: "Sync Artist",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30" id="testimonials">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Artist Stories
          </span>
          <h2 className="heading-section mb-4">
            What Artists <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
