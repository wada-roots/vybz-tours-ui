import { MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maasai Mara",
      location: "Rift Valley",
      description: "World-famous for the Great Migration and Big Five game viewing",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.9,
      duration: "3-5 days",
      price: "From $299",
      highlights: ["Great Migration", "Big Five", "Hot Air Ballooning"]
    },
    {
      id: 2,
      name: "Diani Beach",
      location: "South Coast",
      description: "Pristine white sand beaches with crystal clear waters",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.8,
      duration: "2-4 days",
      price: "From $199",
      highlights: ["White Sand", "Water Sports", "Colobus Monkeys"]
    },
    {
      id: 3,
      name: "Amboseli National Park",
      location: "Kajiado County",
      description: "Iconic views of Mount Kilimanjaro with elephant herds",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.7,
      duration: "2-3 days",
      price: "From $249",
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Bird Watching"]
    },
    {
      id: 4,
      name: "Lake Nakuru",
      location: "Rift Valley",
      description: "Famous for flamingos and diverse wildlife",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.6,
      duration: "1-2 days",
      price: "From $149",
      highlights: ["Pink Flamingos", "Rhino Sanctuary", "Scenic Views"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Kenya's most breathtaking locations, from world-renowned safari parks to pristine coastal paradises
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{destination.location}</span>
                  <Clock className="w-4 h-4 ml-4" />
                  <span>{destination.duration}</span>
                </div>

                <h3 className="hero-heading text-2xl text-foreground mb-3">
                  {destination.name}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="default" className="flex-1">
                    View Packages
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-bounce-in">
          <Button variant="hero" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;