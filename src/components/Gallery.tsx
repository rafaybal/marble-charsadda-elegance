
import { useState } from "react";
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

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2574&auto=format&fit=crop",
      category: "kitchen",
      title: "Modern Kitchen Countertop"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1543377421-1bf97f4efa4d?q=80&w=2574&auto=format&fit=crop",
      category: "floor",
      title: "Luxury Marble Flooring"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600607687020-9653a88e8018?q=80&w=2574&auto=format&fit=crop",
      category: "kitchen",
      title: "Elegant Kitchen Island"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=2670&auto=format&fit=crop",
      category: "staircase",
      title: "Grand Marble Staircase"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1604014438553-83a98fb1ff50?q=80&w=2670&auto=format&fit=crop",
      category: "commercial",
      title: "Executive Office Reception"
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
    <section id="gallery" className="section-padding bg-marble-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <GalleryHorizontal className="h-6 w-6 text-gold-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Our Gallery</h2>
          </div>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore real installations featuring our premium Mohmand marble in various settings,
            from elegant residential spaces to prestigious commercial projects.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-marble-100">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="floor">Flooring</TabsTrigger>
              <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </Tabs>
      </div>
      
      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gold-400 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-serif">{selectedImage.title}</p>
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
  return (
    <div 
      className="relative overflow-hidden rounded-lg cursor-pointer marble-card h-64"
      onClick={onClick}
    >
      <img 
        src={image.url} 
        alt={image.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white font-medium">{image.title}</p>
      </div>
    </div>
  );
};

export default Gallery;
