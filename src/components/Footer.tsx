import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254700000000?text=Hi! I\'m interested in your tour packages.', '_blank');
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com/vybztours_ke',
      facebook: 'https://facebook.com/vybztours',
      twitter: 'https://twitter.com/vybztours'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <span className="text-white font-bold text-xl">VT</span>
              </div>
              <div>
                <h3 className="hero-heading text-xl font-bold">Vybz Tours KE</h3>
                <p className="text-sm text-primary-foreground/80">Kenya Experience</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your gateway to unforgettable Kenyan adventures. We specialize in affordable group tours, 
              weekend getaways, and custom packages that showcase the best of Kenya.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('instagram')}
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('facebook')}
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialClick('twitter')}
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'Home',
                'Destinations', 
                'Safari Packages',
                'Beach Tours',
                'Mountain Adventures',
                'Gallery',
                'About Us'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Tour Categories</h4>
            <ul className="space-y-3">
              {[
                'Safari Tours',
                'Beach Holidays',
                'Cultural Experiences',
                'Adventure Tours',
                'Honeymoon Packages',
                'Group Tours',
                'Custom Itineraries'
              ].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Nairobi, Kenya<br />
                    Tom Mboya Street
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">+254 700 000 000</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">info@vybztours.co.ke</p>
              </div>
              
              <Button
                variant="whatsapp"
                onClick={handleWhatsAppClick}
                className="w-full mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Vybz Tours KE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;