
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the origin of your marble?",
      answer: "Our marble is sourced directly from the premium mines in the Mohmand region of Pakistan, including renowned locations like Ziarat, Gumbatay, and Khanqaa. Each piece is carefully extracted and processed at our facilities in Subhan Khwar Industrial Estate."
    },
    {
      question: "Which areas do you deliver to?",
      answer: "We deliver to all major cities across Pakistan, including Islamabad, Lahore, Karachi, Peshawar, Quetta, and surrounding areas. For remote locations, additional delivery time and charges may apply."
    },
    {
      question: "How can I place a bulk order?",
      answer: "For bulk orders, we recommend contacting our sales team directly via WhatsApp or phone. We offer special pricing and dedicated project management for large-scale orders based on your specific requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, online payments, and cash on delivery for certain areas. For bulk orders, we typically require a 50% advance payment with the remainder due before delivery."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 2-3 business days for major cities in Pakistan. Remote areas may require additional time. Custom orders and bulk purchases might have longer processing times depending on specifications."
    },
    {
      question: "Do you offer installation services?",
      answer: "While our core business is supplying premium marble, we can recommend professional installation partners in most major cities. Please inquire when placing your order if you need installation assistance."
    },
    {
      question: "Can I request samples before ordering?",
      answer: "Yes, we offer sample kits of our various marble types for a nominal fee (refundable upon purchase). This allows you to see the actual color, pattern, and quality before making a larger investment."
    },
    {
      question: "What is your return policy?",
      answer: "We inspect all marble carefully before shipping to ensure quality. If you receive damaged merchandise, please notify us within 48 hours with photos. We do not accept returns for correctly delivered undamaged items, as marble is a natural product with inherent variations."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-marble-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our marble products, ordering process, 
            delivery, and more. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium hover:text-gold-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 bg-marble-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-serif mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to provide you with any additional information you may need.
              Feel free to reach out to us through your preferred method of contact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white rounded-md font-medium transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="https://wa.me/+923469655623" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
