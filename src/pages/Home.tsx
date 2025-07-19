import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import { Users, Award, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Local Guides",
      description: "Born and raised in Kenya, our guides know every hidden gem and wildlife secret"
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized for excellence in sustainable tourism and customer satisfaction"
    },
    {
      icon: MapPin,
      title: "Diverse Destinations",
      description: "From Maasai Mara to Diani Beach, explore Kenya's incredible diversity"
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "Connect with local communities and experience the real Kenya"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      text: "Vybz Tours made our Kenya safari unforgettable! The guides were knowledgeable and the wildlife viewing was incredible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "David Miller",
      location: "United Kingdom", 
      text: "Perfect blend of adventure and relaxation. The beach extension to Diani was exactly what we needed after the safari.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Maria Rodriguez",
      location: "Spain",
      text: "Affordable prices without compromising on quality. The group tour was well-organized and so much fun!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-4">
              Why Choose Vybz Tours KE?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're passionate about showing you the real Kenya through authentic, affordable, and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real people who've explored Kenya with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-heading text-3xl md:text-5xl mb-6 animate-fade-in">
            Ready for Your Kenya Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join hundreds of satisfied travelers who've discovered the magic of Kenya with Vybz Tours. 
            Your adventure of a lifetime awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button variant="secondary" size="lg" className="text-lg">
              Browse All Packages
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://wa.me/254700000000?text=Hi! I\'m ready to book my Kenya adventure!', '_blank')}
            >
              Start Planning Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;