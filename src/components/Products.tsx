
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare } from "lucide-react";

type MarbleProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  source: string;
  color: string;
};

const Products = () => {
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);
  
  // Using the custom scroll reveal hook from existing code
  
  const products: MarbleProduct[] = [
    {
      id: 1,
      name: "Ziarat White Marble",
      description: "Premium white marble with subtle gray veining from Ziarat mines",
      price: "Rs. 180-220/sq.ft",
      image: "public/lovable-uploads/9324670b-b749-459f-a322-06569b968d4a.png",
      category: "flooring",
      source: "ziarat",
      color: "white"
    },
    {
      id: 2,
      name: "Supreme White Marble",
      description: "Exquisite pure white marble from Khanqaa region",
      price: "Rs. 220-260/sq.ft",
      image: "public/lovable-uploads/5c0e3084-d1f3-4a30-9ce9-55d72c42e460.png",
      category: "countertop",
      source: "khanqaa",
      color: "white"
    },
    {
      id: 3,
      name: "Black & Gold Marble",
      description: "Sophisticated black marble with striking gold veining",
      price: "Rs. 280-320/sq.ft",
      image: "https://images.unsplash.com/photo-1601354458668-6a9b1b631e0e?q=80&w=2564&auto=format&fit=crop",
      category: "flooring",
      source: "gumbatay",
      color: "black"
    },
    {
      id: 4,
      name: "Jungle Green Marble",
      description: "Vibrant green marble with unique forest-like patterns",
      price: "Rs. 240-290/sq.ft",
      image: "https://images.unsplash.com/photo-1597844756732-e2cb67775f25?q=80&w=2670&auto=format&fit=crop",
      category: "wall",
      source: "ziarat",
      color: "green"
    },
    {
      id: 5,
      name: "Beige Desert Marble",
      description: "Warm beige marble with soft patterns",
      price: "Rs. 170-210/sq.ft",
      image: "public/lovable-uploads/e66aaa2f-4457-423a-b5f1-260ec52127da.png",
      category: "flooring",
      source: "khanqaa",
      color: "beige"
    },
    {
      id: 6,
      name: "Coral Pink Marble",
      description: "Elegant pink-toned marble for luxury interiors",
      price: "Rs. 260-310/sq.ft",
      image: "public/lovable-uploads/2ea41a4e-58d7-4f17-ad20-d12f4fe91de1.png",
      category: "wall",
      source: "gumbatay",
      color: "pink"
    }
  ];

  const filteredProducts = products.filter(product => {
    return (selectedSource === "all" || product.source === selectedSource) && 
           (selectedColor === "all" || product.color === selectedColor);
  });

  const mineOptions = [
    { value: "all", label: "All Sources" },
    { value: "ziarat", label: "Ziarat Mine" },
    { value: "khanqaa", label: "Khanqaa Mine" },
    { value: "gumbatay", label: "Gumbatay Mine" }
  ];

  const colorOptions = [
    { value: "all", label: "All Colors" },
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
    { value: "green", label: "Green" },
    { value: "beige", label: "Beige" },
    { value: "pink", label: "Pink" }
  ];

  // Trigger animations when components come into view
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationTriggered) {
          entry.target.classList.add('revealed');
          setAnimationTriggered(true);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [animationTriggered]);

  return (
    <section id="products" className="section-padding bg-white animated-bg">
      <div className="container-custom">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gradient animated-scale-in">Our Premium Marble</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6 animated-scale-in" style={{animationDelay: "0.3s"}}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animated-fade-up" style={{animationDelay: "0.5s"}}>
            Explore our collection of high-quality Mohmand marble, sourced directly from
            Pakistan's finest mines and processed to perfection.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-12 reveal-on-scroll">
          <div className="flex justify-center mb-8 animated-fade-down" style={{animationDelay: "0.3s"}}>
            <TabsList className="bg-marble-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <TabsTrigger value="all" className="hover-lift">All Products</TabsTrigger>
              <TabsTrigger value="flooring" className="hover-lift">Flooring</TabsTrigger>
              <TabsTrigger value="countertop" className="hover-lift">Countertops</TabsTrigger>
              <TabsTrigger value="wall" className="hover-lift">Wall Cladding</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 reveal-on-scroll animated-fade-up" style={{animationDelay: "0.5s"}}>
            <div className="transform transition-all duration-500 hover:scale-105">
              <label className="block text-sm font-medium mb-2">Filter by Source:</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md hover:border-gold-400 transition-colors duration-300 shadow-sm focus:ring-2 focus:ring-gold-200"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
              >
                {mineOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="transform transition-all duration-500 hover:scale-105">
              <label className="block text-sm font-medium mb-2">Filter by Color:</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md hover:border-gold-400 transition-colors duration-300 shadow-sm focus:ring-2 focus:ring-gold-200"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {colorOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="flooring" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {filteredProducts
                .filter(product => product.category === "flooring")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="countertop" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {filteredProducts
                .filter(product => product.category === "countertop")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wall" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {filteredProducts
                .filter(product => product.category === "wall")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: MarbleProduct }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="marble-card overflow-hidden reveal-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 filter brightness-105' : ''}`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isHovered ? 'bg-opacity-20' : 'bg-opacity-0'}`}></div>
        <div className={`marble-card-overlay transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button variant="secondary" className="bg-white/80 hover:bg-white hover-lift transform transition-all duration-300 hover:scale-110">
            View Details
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-medium mb-2 hover-shine">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gold-700">{product.price}</span>
          <span className="text-xs px-3 py-1 bg-marble-100 rounded-full">
            {product.source.charAt(0).toUpperCase() + product.source.slice(1)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="bg-marble-50 p-4 flex justify-between">
        <Button 
          variant="outline"
          className="border-gold-400 text-gold-700 hover:bg-gold-100 hover-lift transition-all duration-300"
        >
          Add to Cart
        </Button>
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white hover-shine transition-all duration-300"
        >
          <MessageSquare className="mr-2 h-4 w-4" /> Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Products;
