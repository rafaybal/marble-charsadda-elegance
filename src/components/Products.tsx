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
  
  const products: MarbleProduct[] = [
    {
      id: 1,
      name: "Ziarat White Marble",
      description: "Premium white marble with subtle gray veining from Ziarat mines",
      price: "Rs. 180-220/sq.ft",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2594&auto=format&fit=crop",
      category: "flooring",
      source: "ziarat",
      color: "white"
    },
    {
      id: 2,
      name: "Supreme White Marble",
      description: "Exquisite pure white marble from Khanqaa region",
      price: "Rs. 220-260/sq.ft",
      image: "https://images.unsplash.com/photo-1582225193877-0b745a0a9e1e?q=80&w=2574&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2574&auto=format&fit=crop",
      category: "flooring",
      source: "khanqaa",
      color: "beige"
    },
    {
      id: 6,
      name: "Coral Pink Marble",
      description: "Elegant pink-toned marble for luxury interiors",
      price: "Rs. 260-310/sq.ft",
      image: "https://images.unsplash.com/photo-1547499417-61a435d27cb3?q=80&w=2574&auto=format&fit=crop",
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

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Premium Marble</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of high-quality Mohmand marble, sourced directly from
            Pakistan's finest mines and processed to perfection.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-marble-100">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="flooring">Flooring</TabsTrigger>
              <TabsTrigger value="countertop">Countertops</TabsTrigger>
              <TabsTrigger value="wall">Wall Cladding</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Source:</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
              >
                {mineOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Color:</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="flooring" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts
                .filter(product => product.category === "flooring")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="countertop" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts
                .filter(product => product.category === "countertop")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wall" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  return (
    <Card className="marble-card overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="marble-card-overlay">
          <Button variant="secondary" className="bg-white/80 hover:bg-white">
            View Details
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-medium mb-2">{product.name}</h3>
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
          className="border-gold-400 text-gold-700 hover:bg-gold-100"
        >
          Add to Cart
        </Button>
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <MessageSquare className="mr-2 h-4 w-4" /> Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Products;
