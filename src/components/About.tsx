
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Gem, Medal, ShieldCheck, Truck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-marble-50 py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">About Our Marble</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We source the finest Mohmand marble directly from Pakistan's premium mines, 
            ensuring quality, authenticity, and exceptional craftsmanship in every piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p>
                Based in Charsadda, KP, Pakistan, our company specializes in sourcing high-quality Mohmand marble 
                directly from renowned mines like Ziarat, Gumbatay, and Khanqaa. Our processing facilities at 
                Subhan Khwar Industrial Estate ensure that each piece meets our exacting standards.
              </p>
              
              <h3 className="font-serif text-xl font-medium mt-6 mb-4">Our Mission</h3>
              <p>
                We are committed to providing genuine, premium-quality marble while offering expert guidance, 
                reliable nationwide delivery, and complete transparency in all our business dealings.
              </p>
              
              <h3 className="font-serif text-xl font-medium mt-6 mb-4">Service Goals</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 h-5 w-5 flex-shrink-0" />
                  <span>Source only the finest authentic Mohmand marble</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 h-5 w-5 flex-shrink-0" />
                  <span>Provide expert guidance throughout your selection process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 h-5 w-5 flex-shrink-0" />
                  <span>Ensure timely and careful delivery across Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 h-5 w-5 flex-shrink-0" />
                  <span>Maintain complete transparency in quality and pricing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gradient-to-br from-gold-100 to-gold-200 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Gem className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-gold-600 transition-colors">Genuine Quality</h3>
                <p className="text-sm text-gray-600">Authentic Mohmand marble directly sourced from mines</p>
              </CardContent>
            </Card>
            
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gradient-to-br from-gold-100 to-gold-200 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <ShieldCheck className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-gold-600 transition-colors">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">Fair prices with no hidden costs</p>
              </CardContent>
            </Card>
            
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gradient-to-br from-gold-100 to-gold-200 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Medal className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-gold-600 transition-colors">Expert Guidance</h3>
                <p className="text-sm text-gray-600">Professional advice for all your marble needs</p>
              </CardContent>
            </Card>
            
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gradient-to-br from-gold-100 to-gold-200 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Truck className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-gold-600 transition-colors">Nationwide Delivery</h3>
                <p className="text-sm text-gray-600">Safe and timely delivery across Pakistan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="section-divider"></div>
      
      <div className="container-custom mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">History of Ziarat Marble</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative reveal-from-left">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 group gold-border-gradient">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/f78efe67-448f-4a89-b8bd-17ee30743a99.png" 
                  alt="Ziarat marble quarry and processing facility" 
                  className="w-full h-auto image-rendering-crisp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-lg font-medium mb-2">Ziarat Marble Quarry</p>
                  <p className="text-sm opacity-80">Our state-of-the-art extracting and processing facility</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full z-[-1] opacity-70 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-marble-200 to-marble-100 rounded-full z-[-1] opacity-70"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 -left-3 w-6 h-24 bg-gradient-to-r from-gold-300/50 to-transparent rounded-l-full z-[-1]"></div>
          </div>
          
          <div className="order-1 md:order-2 prose max-w-none reveal-from-right">
            <h3 className="font-serif text-2xl font-medium mb-4 text-gold-600">A Legacy of Excellence</h3>
            <p className="mb-4 text-lg leading-relaxed">
              For centuries, Ziarat marble has been celebrated for its exceptional quality and distinctive patterns, 
              making it a symbol of elegance and luxury throughout Pakistan's architectural history.
            </p>
            
            <div className="p-6 border-l-4 border-gold-400 bg-marble-100 rounded-r-lg my-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-100/10 to-transparent opacity-40"></div>
              <p className="italic text-gray-700 relative z-10">
                "The stone from Mohmand's quarries has adorned some of the most prestigious buildings across the country,
                from historic mosques to luxury residences and modern commercial spaces."
              </p>
              <div className="h-0.5 w-1/3 bg-gold-300 mt-4"></div>
            </div>
            
            <p className="mb-4">
              This premium stone has been a cornerstone of Pakistani architecture for generations, with mining techniques refined 
              over time to preserve the natural beauty and structural integrity of each piece.
            </p>
            
            <div className="grid grid-cols-3 gap-3 my-6">
              <div className="bg-gradient-to-br from-marble-100 to-marble-50 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span className="block text-2xl font-bold text-gold-600 mb-1">100+</span>
                <span className="text-sm text-gray-600">Years of Heritage</span>
              </div>
              <div className="bg-gradient-to-br from-marble-100 to-marble-50 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span className="block text-2xl font-bold text-gold-600 mb-1">3</span>
                <span className="text-sm text-gray-600">Major Quarries</span>
              </div>
              <div className="bg-gradient-to-br from-marble-100 to-marble-50 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span className="block text-2xl font-bold text-gold-600 mb-1">1000+</span>
                <span className="text-sm text-gray-600">Projects Completed</span>
              </div>
            </div>
            
            <p>
              Today, we continue this rich tradition by bringing authentic Ziarat marble directly from the source 
              to customers who appreciate its historical significance and timeless appeal. Each slab tells a story 
              of Pakistan's natural heritage and craftsmanship excellence.
            </p>
            
            <button className="mt-6 cta-button hover-lift flex items-center gap-2 group button-glow">
              <span>Explore Our Heritage</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
