
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-marble-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="font-serif text-2xl text-gold-400 font-bold">Mohmand</span>
              <span className="font-serif text-2xl ml-1 text-white">Marble</span>
            </div>
            <p className="text-marble-300">
              Premium quality Mohmand marble sourced directly from Pakistan's finest mines. 
              Delivering excellence and elegance across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-marble-800 flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-marble-800 flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="h-10 w-10 rounded-full bg-marble-800 flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Youtube"
                className="h-10 w-10 rounded-full bg-marble-800 flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Products</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#order" className="hover:text-gold-400 transition-colors">How to Order</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Ziarat White Marble</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Supreme White Marble</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Black & Gold Marble</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Jungle Green Marble</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Beige Desert Marble</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition-colors">Coral Pink Marble</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-marble-300 mb-4">
              Subscribe to our newsletter for the latest products, offers, and marble industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Your email" 
                type="email" 
                className="bg-marble-800 border-marble-700 text-white placeholder:text-marble-400"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-marble-400 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-marble-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-marble-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mohmand Marble. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-marble-400 hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-marble-400 hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-marble-400 hover:text-gold-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
