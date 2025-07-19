import { Award, Users, MapPin, Heart, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Travelers" },
    { icon: MapPin, value: "25+", label: "Destinations Covered" },
    { icon: Award, value: "4.9", label: "Average Rating" },
    { icon: Clock, value: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Kenya",
      description: "Born and raised in Kenya, we're passionate about sharing our homeland's incredible beauty and rich culture with the world."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. All our tours are led by certified guides with extensive safety training and local knowledge."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We partner with local communities to ensure our tourism creates positive economic impact and preserves cultural heritage."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in service delivery, from accommodation selection to guide expertise."
    }
  ];

  const teamMembers = [
    {
      name: "David Kimani",
      role: "Founder & Lead Guide",
      bio: "With over 8 years of safari guiding experience, David founded Vybz Tours to share his love for Kenya's wildlife and culture.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Wildlife Photography", "Big Five Tracking", "Cultural Tours"]
    },
    {
      name: "Grace Wanjiku",
      role: "Operations Manager",
      bio: "Grace ensures every detail of your journey is perfectly planned and executed, bringing 6 years of hospitality experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Itinerary Planning", "Guest Relations", "Quality Assurance"]
    },
    {
      name: "Samuel Mwangi",
      role: "Senior Safari Guide",
      bio: "Samuel's expertise in wildlife behavior and conservation makes every game drive an educational and thrilling experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Wildlife Conservation", "Bird Watching", "Nature Photography"]
    }
  ];

  const certifications = [
    "Kenya Association of Tour Operators (KATO) Member",
    "Kenya Wildlife Service Licensed",
    "International Association of Tour Managers (IATM)",
    "First Aid & CPR Certified Guides",
    "Eco-Tourism Kenya Certified",
    "ISO 9001:2015 Quality Management"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-heading text-4xl md:text-6xl mb-6 animate-fade-in">
            About Vybz Tours KE
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up">
            Your trusted partner for authentic Kenyan adventures since 2019
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Vybz Tours KE was born from a simple dream: to share the incredible beauty and rich culture of Kenya 
                  with travelers from around the world. Founded by David Kimani, a passionate safari guide with deep 
                  roots in the Maasai Mara region, our company started as a small family business.
                </p>
                <p>
                  What began as weekend trips for friends has grown into a trusted tour operator serving hundreds of 
                  satisfied travelers annually. We believe that travel should be transformative, affordable, and 
                  authentic - principles that guide every tour we create.
                </p>
                <p>
                  Today, we're proud to be one of Kenya's most vibrant and energetic tour companies, known for our 
                  Instagram presence @vybztours_ke and our commitment to creating unforgettable memories while 
                  supporting local communities.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Safari adventure"
                className="rounded-lg shadow-card hover:shadow-card-hover transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-bounce-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate people behind your unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 text-center border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary/20"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6">{member.bio}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Specialties:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="hero-heading text-3xl md:text-5xl text-foreground mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by industry bodies and certified for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 text-center border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-heading text-3xl md:text-5xl mb-6 animate-fade-in">
            Ready to Explore Kenya?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join our family of satisfied travelers and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button variant="secondary" size="lg" className="text-lg">
              View Our Packages
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://wa.me/254700000000?text=Hi! I\'d like to learn more about your tours.', '_blank')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;