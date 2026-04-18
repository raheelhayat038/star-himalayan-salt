import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, ShoppingCart } from "lucide-react";

/**
 * Star Himalayan Pink Salt - Home Page
 * Design: Luxury Minimalism
 * - Cream/off-white background with rose gold accents
 * - Generous whitespace and elegant typography
 * - Playfair Display for headings, Inter for body
 * - Asymmetric layout with premium feel
 */

const playfairStyle = { fontFamily: "'Playfair Display', serif" };

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Coarse Pink Salt",
      description: "100% natural and unrefined Himalayan pink salt crystals",
      size: "1kg",
      price: "PKR 1,200",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663538305020/bozBD9y2ZPhUTVYKbBXsGT/hero-salt-luxury-bXSWQHCsFk9sDF58Sij2C8.webp",
    },
    {
      id: 2,
      name: "Fine Table Salt",
      description: "Granulated and fine mix for perfect seasoning",
      size: "500g",
      price: "PKR 800",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663538305020/bozBD9y2ZPhUTVYKbBXsGT/hero-salt-close-PXLL6AADCxrPbSreihxi2g.webp",
    },
    {
      id: 3,
      name: "Himalayan Bath Salt",
      description: "Premium quality for wellness and spa use",
      size: "2kg",
      price: "PKR 1,800",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663538305020/bozBD9y2ZPhUTVYKbBXsGT/hero-salt-lifestyle-VHy2aJHzJpwmRDGz6jZj.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">★</span>
            </div>
            <h1 style={playfairStyle} className="text-xl font-bold text-foreground">
              Star Himalayan Salt
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#products"
              className="text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wider uppercase text-sm">
                Premium Quality
              </p>
              <h2 style={playfairStyle} className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Pure Himalayan Pink Salt
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                Sourced directly from the pristine Himalayan mountains. 100% natural,
                unrefined, and packed with essential minerals for your health and wellness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-medium"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/5"
              >
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-sm text-foreground/60">Natural</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">84+</p>
                <p className="text-sm text-foreground/60">Minerals</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">Pure</p>
                <p className="text-sm text-foreground/60">Unrefined</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663538305020/bozBD9y2ZPhUTVYKbBXsGT/hero-salt-luxury-bXSWQHCsFk9sDF58Sij2C8.webp"
              alt="Himalayan Pink Salt"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h3 style={playfairStyle} className="text-4xl font-bold text-foreground">
              Health Benefits
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rich in Minerals",
                description:
                  "Contains 84 essential minerals and trace elements that support overall health",
              },
              {
                title: "Electrolyte Balance",
                description:
                  "Helps maintain proper hydration and electrolyte balance in your body",
              },
              {
                title: "Pure & Unrefined",
                description:
                  "No additives, no anti-caking agents, just pure natural Himalayan salt",
              },
            ].map((benefit, idx) => (
              <Card
                key={idx}
                className="p-8 bg-background border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-accent" />
                </div>
                <h4 style={playfairStyle} className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Our Collection
            </p>
            <h3 style={playfairStyle} className="text-4xl font-bold text-foreground">
              Premium Salt Products
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden bg-white border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 style={playfairStyle} className="text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">
                        Size
                      </p>
                      <p className="font-semibold text-foreground">{product.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">
                        Price
                      </p>
                      <p className="font-bold text-accent text-lg">{product.price}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-white py-20 border-t border-border"
      >
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h3 style={playfairStyle} className="text-4xl font-bold text-foreground">
              Contact Us
            </h3>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              Have questions about our products? We're here to help. Reach out through
              WhatsApp or visit us in Peshawar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* WhatsApp */}
            <Card className="p-8 bg-background border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 style={playfairStyle} className="text-lg font-bold text-foreground mb-2">
                WhatsApp
              </h4>
              <a
                href="https://wa.me/923318484115"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                +92 331 8484115
              </a>
              <p className="text-sm text-foreground/60 mt-3">
                Chat with us on WhatsApp for quick inquiries
              </p>
            </Card>

            {/* Email */}
            <Card className="p-8 bg-background border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h4 style={playfairStyle} className="text-lg font-bold text-foreground mb-2">
                Email
              </h4>
              <a
                href="mailto:info@starhimalayansalt.com"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                info@starhimalayansalt.com
              </a>
              <p className="text-sm text-foreground/60 mt-3">
                Send us an email with your inquiries
              </p>
            </Card>

            {/* Location */}
            <Card className="p-8 bg-background border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 style={playfairStyle} className="text-lg font-bold text-foreground mb-2">
                Location
              </h4>
              <p className="text-accent hover:text-accent/80 transition-colors font-medium">
                Peshawar, Pakistan
              </p>
              <p className="text-sm text-foreground/60 mt-3">
                Visit our showroom for product demonstrations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white font-bold">★</span>
                </div>
                <h3 style={playfairStyle} className="text-lg font-bold">
                  Star Himalayan Salt
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                Premium quality Himalayan pink salt sourced directly from the mountains.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://wa.me/923318484115"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +92 331 8484115
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@starhimalayansalt.com"
                    className="hover:text-white transition-colors"
                  >
                    Email: info@starhimalayansalt.com
                  </a>
                </li>
                <li className="text-white/70">Peshawar, Pakistan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/60">
              © 2026 Star Himalayan Salt. All rights reserved. | Premium Quality Salt
              Products
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
