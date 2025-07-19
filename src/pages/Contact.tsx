import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tourType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 000 000", "+254 720 000 000"],
      action: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@vybztours.co.ke", "bookings@vybztours.co.ke"],
      action: "Send us an email"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Tom Mboya Street", "Nairobi, Kenya"],
      action: "Visit our office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8AM - 6PM", "Sat - Sun: 9AM - 5PM"],
      action: "We're open!"
    }
  ];

  const tourTypes = [
    "Safari Tour",
    "Beach Holiday",
    "Mountain Adventure",
    "Cultural Tour",
    "Honeymoon Package",
    "Custom Itinerary",
    "Group Tour",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      tourType: ''
    });
    
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your tour packages and would like to get more information.");
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-heading text-4xl md:text-6xl mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up">
            Ready to start your Kenyan adventure? We're here to help plan your perfect trip
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 text-center border-0 shadow-card hover:shadow-card-hover transition-smooth hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-primary font-medium">{info.action}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-6">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your dream trip and we'll create a custom itinerary just for you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="transition-smooth"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 700 000 000"
                      className="transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="tourType" className="block text-sm font-medium text-foreground mb-2">
                      Tour Type
                    </label>
                    <select
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md transition-smooth focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select tour type</option>
                      {tourTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel plans, preferences, budget, and any special requirements..."
                    className="min-h-32 transition-smooth"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="whatsapp"
                    onClick={handleWhatsAppClick}
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </form>
            </div>

            {/* Map & Quick Contact */}
            <div className="animate-slide-up">
              <div className="space-y-8">
                {/* Quick Contact */}
                <Card className="p-8 border-0 shadow-card">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <Button
                      variant="whatsapp"
                      onClick={handleWhatsAppClick}
                      className="w-full justify-start"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp: +254 700 000 000
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.location.href = 'tel:+254700000000'}
                      className="w-full justify-start"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      Call: +254 700 000 000
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.location.href = 'mailto:info@vybztours.co.ke'}
                      className="w-full justify-start"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      Email: info@vybztours.co.ke
                    </Button>
                  </div>
                </Card>

                {/* Google Maps Embed */}
                <Card className="overflow-hidden border-0 shadow-card">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-foreground mb-2">Our Office Location</h4>
                      <p className="text-muted-foreground">
                        Tom Mboya Street<br />
                        Nairobi, Kenya
                      </p>
                      <Button variant="outline" className="mt-4">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Response Time */}
                <Card className="p-6 border-0 shadow-card">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Quick Response</h4>
                    <p className="text-muted-foreground">
                      We typically respond to all inquiries within 2-4 hours during business hours, 
                      or within 24 hours on weekends.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="hero-heading text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book my tour?",
                answer: "We recommend booking at least 2-4 weeks in advance, especially during peak seasons (July-October). However, we can often accommodate last-minute bookings subject to availability."
              },
              {
                question: "What's included in your tour packages?",
                answer: "Our packages typically include accommodation, meals as specified, transportation, park fees, professional guide services, and game drives. Specific inclusions vary by package - check individual tour details."
              },
              {
                question: "Do you offer custom tour packages?",
                answer: "Absolutely! We specialize in creating custom itineraries based on your interests, budget, and schedule. Just let us know your preferences and we'll design the perfect trip for you."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept bank transfers, mobile money (M-Pesa), major credit cards, and cash payments. A deposit is typically required to confirm your booking."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-card">
                <h4 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;