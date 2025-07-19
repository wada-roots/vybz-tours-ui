import { useState } from 'react';
import { X, Heart, Share2, Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'safari', name: 'Safari Wildlife' },
    { id: 'landscape', name: 'Landscapes' },
    { id: 'beach', name: 'Beaches' },
    { id: 'culture', name: 'Culture' },
    { id: 'adventure', name: 'Adventures' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Great Migration Crossing",
      location: "Maasai Mara",
      category: 'safari',
      date: "July 2024",
      description: "Thousands of wildebeest crossing the Mara River during the Great Migration season.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Pristine Diani Beach",
      location: "South Coast",
      category: 'beach',
      date: "March 2024",
      description: "Crystal clear waters and white sand beaches of Diani, perfect for relaxation.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Kilimanjaro Sunrise",
      location: "Amboseli",
      category: 'landscape',
      date: "August 2024",
      description: "Majestic Mount Kilimanjaro at sunrise with elephants in the foreground.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Pink Flamingo Paradise",
      location: "Lake Nakuru",
      category: 'safari',
      date: "June 2024",
      description: "Millions of flamingos creating a pink carpet on Lake Nakuru.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Mount Kenya Peak",
      location: "Mount Kenya",
      category: 'adventure',
      date: "January 2024",
      description: "Challenging trek to Point Lenana with breathtaking alpine views.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Maasai Cultural Dance",
      location: "Maasai Village",
      category: 'culture',
      date: "April 2024",
      description: "Traditional Maasai warriors performing their iconic jumping dance.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Hippo Haven",
      location: "Lake Naivasha",
      category: 'safari',
      date: "May 2024",
      description: "Hippos enjoying the warm waters of Lake Naivasha.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Savanna Sunset",
      location: "Tsavo East",
      category: 'landscape',
      date: "September 2024",
      description: "Golden hour magic over the vast savanna plains of Tsavo.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Zebra Migration",
      location: "Maasai Mara",
      category: 'safari',
      date: "August 2024",
      description: "Zebras joining the great migration across the Kenyan plains.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Coastal Paradise",
      location: "Watamu",
      category: 'beach',
      date: "February 2024",
      description: "Turquoise waters and coral reefs of Watamu Marine Park.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Desert Adventure",
      location: "Northern Kenya",
      category: 'adventure',
      date: "October 2024",
      description: "Camel trekking through the stunning landscapes of northern Kenya.",
      photographer: "Vybz Tours Team"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Marine Wildlife",
      location: "Malindi",
      category: 'adventure',
      date: "November 2024",
      description: "Whale watching and marine life encounters off the Kenyan coast.",
      photographer: "Vybz Tours Team"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(imageId)) {
        newLikes.delete(imageId);
      } else {
        newLikes.add(imageId);
      }
      return newLikes;
    });
  };

  const handleShare = (image: any) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-heading text-4xl md:text-6xl mb-6 animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up">
            Witness the beauty of Kenya through our lens - from majestic wildlife to stunning landscapes
          </p>
          <p className="text-lg opacity-80 animate-bounce-in">
            Follow us on Instagram <a href="https://instagram.com/vybztours_ke" className="underline font-semibold">@vybztours_ke</a> for daily updates
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
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
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id}
                className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <div className="flex items-center text-xs opacity-90">
                        <MapPin className="w-3 h-3 mr-1" />
                        {image.location}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-smooth ${
                        likedImages.has(image.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-background rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{selectedImage.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedImage.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedImage.date}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[60vh] object-contain"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Photo by {selectedImage.photographer}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleLike(selectedImage.id)}
                    className={likedImages.has(selectedImage.id) ? 'text-red-500' : ''}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${likedImages.has(selectedImage.id) ? 'fill-current' : ''}`} />
                    {likedImages.has(selectedImage.id) ? 'Liked' : 'Like'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare(selectedImage)}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-6">
            See More on Instagram
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Follow @vybztours_ke for daily updates, behind-the-scenes moments, and travel inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://instagram.com/vybztours_ke', '_blank')}
            >
              Follow on Instagram
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/254700000000?text=Hi! I saw your gallery and I\'m interested in booking a tour.', '_blank')}
            >
              Book Your Adventure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;