import { Card, CardContent } from "@/components/ui/card";

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
              <ul className="list-disc pl-5 space-y-2">
                <li>Source only the finest authentic Mohmand marble</li>
                <li>Provide expert guidance throughout your selection process</li>
                <li>Ensure timely and careful delivery across Pakistan</li>
                <li>Maintain complete transparency in quality and pricing</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Genuine Quality</h3>
                <p className="text-sm text-gray-600">Authentic Mohmand marble directly sourced from mines</p>
              </CardContent>
            </Card>
            
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">Fair prices with no hidden costs</p>
              </CardContent>
            </Card>
            
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Expert Guidance</h3>
                <p className="text-sm text-gray-600">Professional advice for all your marble needs</p>
              </CardContent>
            </Card>
            
            <Card className="marble-card bg-marble-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Nationwide Delivery</h3>
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
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 group">
              <div className="relative">
                <img 
                  src="public/lovable-uploads/fd036fa4-938a-4f1d-aac2-104110215b0e.png" 
                  alt="Ziarat marble factory and processing facility" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-medium">Our modern marble processing facility</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full z-[-1] opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-marble-200 to-marble-100 rounded-full z-[-1] opacity-70"></div>
          </div>
          
          <div className="order-1 md:order-2 prose max-w-none reveal-from-right">
            <h3 className="font-serif text-2xl font-medium mb-4 text-gold-600">A Legacy of Excellence</h3>
            <p className="mb-4 text-lg leading-relaxed">
              For centuries, Ziarat marble has been celebrated for its exceptional quality and distinctive patterns, 
              making it a symbol of elegance and luxury throughout Pakistan's architectural history.
            </p>
            
            <div className="p-4 border-l-4 border-gold-400 bg-marble-100 rounded-r-lg my-6">
              <p className="italic text-gray-700">
                "The stone from Mohmand's quarries has adorned some of the most prestigious buildings across the country,
                from historic mosques to luxury residences."
              </p>
            </div>
            
            <p className="mb-4">
              This premium stone has been a cornerstone of Pakistani architecture for generations, with mining techniques refined 
              over time to preserve the natural beauty and structural integrity of each piece.
            </p>
            
            <div className="grid grid-cols-3 gap-3 my-6">
              <div className="bg-marble-100 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-gold-600">100+</span>
                <span className="text-sm text-gray-600">Years of Heritage</span>
              </div>
              <div className="bg-marble-100 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-gold-600">3</span>
                <span className="text-sm text-gray-600">Major Quarries</span>
              </div>
              <div className="bg-marble-100 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-gold-600">1000+</span>
                <span className="text-sm text-gray-600">Projects Completed</span>
              </div>
            </div>
            
            <p>
              Today, we continue this rich tradition by bringing authentic Ziarat marble directly from the source 
              to customers who appreciate its historical significance and timeless appeal. Each slab tells a story 
              of Pakistan's natural heritage and craftsmanship excellence.
            </p>
            
            <button className="mt-4 cta-button hover-lift flex items-center gap-2 group">
              <span>Explore Our Heritage</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
