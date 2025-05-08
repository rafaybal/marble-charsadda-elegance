
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  id: number;
  name: string;
  location: string;
  content: string;
  image: string;
  rating: number;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Ahmad Khan",
      location: "Islamabad",
      content: "The Ziarat marble from Mohmand exceeded my expectations. The quality is exceptional, and the team provided excellent guidance throughout my selection process.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Sana Ali",
      location: "Lahore",
      content: "I was impressed by the professional service and timely delivery. The marble for my kitchen countertop is absolutely stunning and exactly what I wanted.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 3,
      name: "Hamza Ahmed",
      location: "Karachi",
      content: "For our hotel renovation, we needed premium quality marble that would make a statement. Mohmand Marble delivered exactly that, with excellent customer service.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
      rating: 4
    },
    {
      id: 4,
      name: "Fatima Zaidi",
      location: "Peshawar",
      content: "The authenticity and quality of Mohmand marble is unmatched. They helped me select the perfect type for my home renovation, and I couldn't be happier with the results.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=2578&auto=format&fit=crop",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-marble-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear what our satisfied customers have to say about
            our premium Mohmand marble and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? 'text-gold-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 flex-grow">"{review.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif mb-8">Trusted by homeowners and businesses across Pakistan</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="w-32">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-32">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5 9.2h3V19H5V9.2zM6.5 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM16.5 9c-1.9 0-3 .9-3.5 1.7V9.2h-3V19h3v-5.8c0-1.7 1.3-2.5 2.5-2.5s2 .8 2 2.5V19h3v-6.4c0-3.3-1.5-4.6-4-4.6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-32">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.417 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-32">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-1.33-6.36-.85-.15.05-.35.11-.53.17.13-.39.55-.99 1.13-1.95.64-1.08 1.06-2.42 1.06-3.22 0-1.42-.62-2.66-1.57-3.55l.27-.38c.22.34.5.64.82.89.34.27.75.47 1.2.58.45.11.95.1 1.41-.01.46-.11.89-.32 1.25-.62.36-.31.64-.69.84-1.12.19-.42.29-.88.28-1.35 0-.46-.1-.91-.29-1.33-.19-.42-.48-.79-.83-1.09C16.17 2.38 15.73 2.17 15.27 2.05c-.46-.12-.94-.12-1.4-.01-.45.11-.87.32-1.2.59-.33.26-.61.57-.79.91-.18.34-.29.71-.29 1.09 0 .84.05 1.55.43 2.25-.44.58-.95.97-1.57 1.65-.61.67-1.24 1.62-1.57 2.74-.33 1.12-.28 2.41.33 3.45.61 1.04 1.52 1.74 2.4 2.31-.36.24-.67.46-.92.64-1.85 1.34-2.91 2.07-3.35 3.33-.43 1.27-.17 2.72.39 3.83.56 1.12 1.39 1.99 2.34 2.6.95.61 2.02.96 3.11 1.01 1.09.05 2.18-.21 3.12-.75.93-.54 1.71-1.36 2.17-2.43.46-1.06.6-2.37.15-3.5-.44-1.13-1.27-1.95-2.4-2.77-1.13-.83-2.6-1.66-3.94-3.06.29-.12.55-.21.79-.31 1.75-.66 3.07-1.06 3.58-2.1.51-1.06.12-2.28-.51-3.59-.63-1.31-1.59-2.7-2.08-3.68.27-.05.51-.18.69-.38.18-.2.3-.46.32-.74.02-.28-.05-.56-.2-.79-.15-.24-.37-.42-.63-.51-.25-.1-.53-.12-.8-.05-.27.06-.51.21-.69.41-.17.21-.28.46-.3.74-.02.28.05.56.19.8.14.23.36.41.61.52z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-32">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
