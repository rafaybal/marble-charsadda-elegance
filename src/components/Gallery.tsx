
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryHorizontal } from "lucide-react";

type GalleryImage = {
  id: number;
  url: string;
  category: string;
  title: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Simulate images loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation for tab change
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category);
    
    // Simulate category change loading
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "public/lovable-uploads/9324670b-b749-459f-a322-06569b968d4a.png",
      category: "kitchen",
      title: "Ziarat White Marble Kitchen"
    },
    {
      id: 2,
      url: "public/lovable-uploads/5c0e3084-d1f3-4a30-9ce9-55d72c42e460.png",
      category: "floor",
      title: "Khanqaa Marble Flooring"
    },
    {
      id: 3,
      url: "public/lovable-uploads/2ea41a4e-58d7-4f17-ad20-d12f4fe91de1.png",
      category: "kitchen",
      title: "Elegant Kitchen Installation"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=2670&auto=format&fit=crop",
      category: "staircase",
      title: "Grand Marble Staircase"
    },
    {
      id: 5,
      url: "public/lovable-uploads/e66aaa2f-4457-423a-b5f1-260ec52127da.png",
      category: "commercial",
      title: "Commercial Interior"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1637138729374-6a0114219a54?q=80&w=2670&auto=format&fit=crop",
      category: "floor",
      title: "Classic Marble Floor Pattern"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1616594266774-769089560e47?q=80&w=2574&auto=format&fit=crop",
      category: "bathroom",
      title: "Luxurious Bathroom Design"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop",
      category: "commercial",
      title: "Hotel Lobby Installation"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
      category: "bathroom",
      title: "Modern Bathroom Features"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-marble-50 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="parallax-bg" data-speed="0.05" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832&auto=format&fit=crop')",
          backgroundSize: "cover",
          height: "120%",
          top: "-10%"
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal-from-bottom">
          <div className="inline-flex items-center justify-center mb-4 transform transition-all duration-700 hover:scale-110">
            <GalleryHorizontal className="h-6 w-6 text-gold-500 mr-2 animated-rotate-in" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gradient">Our Gallery</h2>
          </div>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6 animated-scale-in"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animated-fade-up" style={{animationDelay: "0.3s"}}>
            Explore real installations featuring our premium Mohmand marble in various settings,
            from elegant residential spaces to prestigious commercial projects.
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="w-full"
          onValueChange={handleCategoryChange}
        >
          <div className="flex justify-center mb-8 reveal-from-top">
            <TabsList className="bg-marble-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <TabsTrigger value="all" className="hover-lift">All Projects</TabsTrigger>
              <TabsTrigger value="kitchen" className="hover-lift">Kitchen</TabsTrigger>
              <TabsTrigger value="floor" className="hover-lift">Flooring</TabsTrigger>
              <TabsTrigger value="bathroom" className="hover-lift">Bathroom</TabsTrigger>
              <TabsTrigger value="commercial" className="hover-lift">Commercial</TabsTrigger>
            </TabsList>
          </div>
          
          <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-animation">
                {galleryImages.map((image) => (
                  <GalleryItem 
                    key={image.id} 
                    image={image} 
                    onClick={() => setSelectedImage(image)} 
                  />
                ))}
              </div>
            </TabsContent>
            
            {["kitchen", "floor", "bathroom", "commercial", "staircase"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-animation">
                  {galleryImages
                    .filter((img) => img.category === category)
                    .map((image) => (
                      <GalleryItem 
                        key={image.id} 
                        image={image} 
                        onClick={() => setSelectedImage(image)} 
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
      
      {/* Image Lightbox with enhanced animations */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full animate-scale-in" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gold-400 z-10 transform transition-transform hover:rotate-90 duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-center mt-4 text-xl font-serif animated-fade-up">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg cursor-pointer marble-card h-64 reveal-on-scroll"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image.url} 
        alt={image.title} 
        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 filter brightness-110' : ''}`}
      />
      <div className={`absolute inset-0 transition-all duration-500 flex flex-col justify-end p-4 
        ${isHovered ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-20'}`}>
        <div className={`transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-white font-medium text-lg">{image.title}</p>
          <div className="w-full h-0.5 bg-gold-400 mt-2 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
          <p className="text-white text-sm mt-2 opacity-80">Click to view larger</p>
        </div>
      </div>
      <div className={`absolute inset-0 border-2 border-gold-400 opacity-0 rounded-lg transform transition-all duration-500 
        ${isHovered ? 'scale-95 opacity-100' : 'scale-110 opacity-0'}`}></div>
    </div>
  );
};

export default Gallery;
