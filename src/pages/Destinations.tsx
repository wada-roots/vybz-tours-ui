import { useState } from 'react';
import { MapPin, Clock, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Destinations' },
    { id: 'safari', name: 'Safari Parks' },
    { id: 'beach', name: 'Coastal Areas' },
    { id: 'mountain', name: 'Mountains & Hills' },
    { id: 'lake', name: 'Lakes & Rivers' }
  ];

  const destinations = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      category: 'safari',
      location: "Rift Valley",
      description: "World-famous for the Great Migration, where millions of wildebeest and zebras cross the plains.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.9,
      duration: "3-5 days",
      bestTime: "July - October",
      highlights: ["Great Migration", "Big Five", "Hot Air Ballooning", "Maasai Culture"],
      packages: 3
    },
    {
      id: 2,
      name: "Diani Beach",
      category: 'beach',
      location: "South Coast",
      description: "4km of pristine white sand beaches with crystal clear turquoise waters.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.8,
      duration: "2-7 days",
      bestTime: "October - March",
      highlights: ["White Sand Beaches", "Snorkeling", "Kite Surfing", "Colobus Monkeys"],
      packages: 4
    },
    {
      id: 3,
      name: "Amboseli National Park",
      category: 'safari',
      location: "Kajiado County",
      description: "Spectacular views of Mount Kilimanjaro and large elephant herds.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.7,
      duration: "2-3 days",
      bestTime: "June - October",
      highlights: ["Kilimanjaro Views", "Elephant Herds", "Bird Watching", "Maasai Villages"],
      packages: 2
    },
    {
      id: 4,
      name: "Lake Nakuru National Park",
      category: 'lake',
      location: "Rift Valley",
      description: "Famous for its millions of pink flamingos and rhino sanctuary.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.6,
      duration: "1-2 days",
      bestTime: "Year-round",
      highlights: ["Pink Flamingos", "White & Black Rhinos", "Scenic Views", "Bird Paradise"],
      packages: 2
    },
    {
      id: 5,
      name: "Mount Kenya National Park",
      category: 'mountain',
      location: "Central Kenya",
      description: "Africa's second highest peak with diverse ecosystems and climbing routes.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.5,
      duration: "3-7 days",
      bestTime: "December - March",
      highlights: ["Mountain Climbing", "Alpine Lakes", "Unique Flora", "Rock Climbing"],
      packages: 3
    },
    {
      id: 6,
      name: "Watamu Marine Park",
      category: 'beach',
      location: "North Coast",
      description: "UNESCO Biosphere Reserve with coral reefs and marine life.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.7,
      duration: "2-5 days",
      bestTime: "October - March",
      highlights: ["Coral Reefs", "Snorkeling", "Turtle Watching", "Deep Sea Fishing"],
      packages: 3
    },
    {
      id: 7,
      name: "Tsavo National Parks",
      category: 'safari',
      location: "Coast Province",
      description: "Kenya's largest national park famous for red elephants and diverse wildlife.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.4,
      duration: "2-4 days",
      bestTime: "May - September",
      highlights: ["Red Elephants", "Mzima Springs", "Vast Wilderness", "Rock Formations"],
      packages: 2
    },
    {
      id: 8,
      name: "Lake Naivasha",
      category: 'lake',
      location: "Rift Valley",
      description: "Freshwater lake perfect for boat rides and hippo watching.",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.3,
      duration: "1-2 days",
      bestTime: "Year-round",
      highlights: ["Hippo Watching", "Boat Rides", "Crescent Island", "Hell's Gate"],
      packages: 3
    }
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-heading text-4xl md:text-6xl mb-6 animate-fade-in">
            Discover Kenya's Wonders
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up">
            From the legendary Maasai Mara to pristine coastal paradises, explore the diverse beauty of Kenya
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className="transition-smooth"
                >
                  {filter.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <Card 
                key={destination.id}
                className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Packages Badge */}
                  <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.packages} Packages Available
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location & Duration */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="hero-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm">
                    {destination.description}
                  </p>

                  {/* Best Time */}
                  <div className="mb-4">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      Best Time: {destination.bestTime}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{destination.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button variant="default" className="w-full">
                      View Packages
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We specialize in custom itineraries tailored to your interests and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Create Custom Tour
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={() => window.open('https://wa.me/254700000000?text=Hi! I need help planning a custom Kenya tour.', '_blank')}
            >
              Chat with Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;