import { useState } from 'react';
import { Calendar, Users, MapPin, Star, Filter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const categoryFilters = [
    { id: 'all', name: 'All Packages' },
    { id: 'safari', name: 'Safari Tours' },
    { id: 'beach', name: 'Beach Holidays' },
    { id: 'adventure', name: 'Adventure Tours' },
    { id: 'cultural', name: 'Cultural Tours' },
    { id: 'honeymoon', name: 'Honeymoon' }
  ];

  const priceFilters = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Under $200' },
    { id: 'mid', name: '$200 - $500' },
    { id: 'luxury', name: '$500+' }
  ];

  const packages = [
    {
      id: 1,
      name: "Maasai Mara Safari Adventure",
      category: 'safari',
      price: 299,
      originalPrice: 399,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.9,
      reviews: 127,
      description: "Experience the Great Migration and Big Five in Kenya's most famous game reserve.",
      includes: ["Game Drives", "Accommodation", "All Meals", "Transport", "Professional Guide"],
      highlights: ["Great Migration", "Big Five Spotting", "Maasai Cultural Visit"],
      bestMonths: ["Jul", "Aug", "Sep", "Oct"],
      difficulty: "Easy",
      featured: true
    },
    {
      id: 2,
      name: "Diani Beach Paradise",
      category: 'beach',
      price: 199,
      originalPrice: 249,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 People",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.8,
      reviews: 89,
      description: "Relax on pristine white sand beaches with crystal clear waters and water sports.",
      includes: ["Beach Resort", "Breakfast", "Airport Transfer", "Snorkeling Gear", "Dolphin Tour"],
      highlights: ["White Sand Beaches", "Snorkeling", "Dolphin Watching"],
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Mount Kenya Trekking",
      category: 'adventure',
      price: 449,
      originalPrice: 549,
      duration: "5 Days / 4 Nights",
      groupSize: "4-10 People",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.7,
      reviews: 56,
      description: "Conquer Africa's second highest peak with stunning alpine scenery and unique wildlife.",
      includes: ["Mountain Huts", "All Meals", "Climbing Gear", "Professional Guide", "Porter Service"],
      highlights: ["Summit Attempt", "Alpine Lakes", "Unique Flora"],
      bestMonths: ["Dec", "Jan", "Feb", "Mar"],
      difficulty: "Challenging"
    },
    {
      id: 4,
      name: "Cultural Heritage Tour",
      category: 'cultural',
      price: 179,
      originalPrice: 229,
      duration: "2 Days / 1 Night",
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.6,
      reviews: 73,
      description: "Immerse yourself in authentic Kenyan culture with local communities and traditions.",
      includes: ["Cultural Village Visit", "Traditional Meals", "Accommodation", "Craft Workshop", "Local Guide"],
      highlights: ["Maasai Village", "Traditional Dances", "Craft Making"],
      bestMonths: ["Year Round"],
      difficulty: "Easy"
    },
    {
      id: 5,
      name: "Romantic Honeymoon Escape",
      category: 'honeymoon',
      price: 699,
      originalPrice: 899,
      duration: "7 Days / 6 Nights",
      groupSize: "2 People",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.9,
      reviews: 34,
      description: "Perfect blend of safari adventure and beach romance for unforgettable memories.",
      includes: ["Luxury Accommodation", "All Meals", "Private Game Drives", "Spa Treatment", "Sunset Cruise"],
      highlights: ["Private Safari", "Beach Romance", "Couples Spa"],
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb"],
      difficulty: "Easy",
      featured: true
    },
    {
      id: 6,
      name: "Weekend Lake Naivasha",
      category: 'adventure',
      price: 149,
      originalPrice: 189,
      duration: "2 Days / 1 Night",
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      rating: 4.5,
      reviews: 92,
      description: "Perfect weekend getaway with boat rides, hippo watching, and Hell's Gate adventure.",
      includes: ["Lake Resort", "Boat Ride", "Hell's Gate Entry", "Bicycle Rental", "Meals"],
      highlights: ["Hippo Watching", "Hell's Gate Cycling", "Boat Safari"],
      bestMonths: ["Year Round"],
      difficulty: "Moderate"
    }
  ];

  const getFilteredPackages = () => {
    let filtered = packages;

    // Category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(pkg => pkg.category === activeFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      switch (priceFilter) {
        case 'budget':
          filtered = filtered.filter(pkg => pkg.price < 200);
          break;
        case 'mid':
          filtered = filtered.filter(pkg => pkg.price >= 200 && pkg.price <= 500);
          break;
        case 'luxury':
          filtered = filtered.filter(pkg => pkg.price > 500);
          break;
      }
    }

    return filtered;
  };

  const filteredPackages = getFilteredPackages();
  const featuredPackages = packages.filter(pkg => pkg.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-heading text-4xl md:text-6xl mb-6 animate-fade-in">
            Tour Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up">
            Carefully crafted experiences designed to showcase the very best of Kenya
          </p>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-4">
              Featured Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and highly-rated tour experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPackages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className="group overflow-hidden border-2 border-accent/20 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ FEATURED
                  </div>

                  {/* Discount Badge */}
                  {pkg.originalPrice > pkg.price && (
                    <div className="absolute top-4 right-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold">
                      SAVE ${pkg.originalPrice - pkg.price}
                    </div>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      {pkg.originalPrice > pkg.price && (
                        <span className="text-sm line-through text-white/70">${pkg.originalPrice}</span>
                      )}
                      <span className="text-lg font-bold">${pkg.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="hero-heading text-xl text-foreground group-hover:text-primary transition-colors">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{pkg.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="default" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="whatsapp" className="flex-1">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filters */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-foreground mb-3 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter.id)}
                    className="transition-smooth"
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Filters */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-foreground mb-3">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                {priceFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={priceFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPriceFilter(filter.id)}
                    className="transition-smooth"
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-4">
              All Tour Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              {filteredPackages.length} packages found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  
                  {/* Difficulty Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                    pkg.difficulty === 'Easy' ? 'bg-green-500/90 text-white' :
                    pkg.difficulty === 'Moderate' ? 'bg-yellow-500/90 text-white' :
                    'bg-red-500/90 text-white'
                  }`}>
                    {pkg.difficulty}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{pkg.rating}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg">
                    <div className="flex items-center space-x-1">
                      {pkg.originalPrice > pkg.price && (
                        <span className="text-xs line-through text-white/70">${pkg.originalPrice}</span>
                      )}
                      <span className="text-sm font-bold">${pkg.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Book
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-6">
            Need Something Different?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We create custom itineraries tailored to your specific interests, budget, and schedule
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Design Custom Package
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/254700000000?text=Hi! I need help creating a custom tour package.', '_blank')}
            >
              Speak to Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;