
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import OrderProcess from "../components/OrderProcess";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <OrderProcess />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
