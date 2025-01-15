import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WobbleCard } from "./ui/wobble-card";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// const portfolioData: PortfolioItem[] = [
//     { id: 1, title: "Laravel", category: "Backend Framework", image: "/images/portfolio/laravel.jpg", description: "Laravel is a web application framework with expressive, elegant syntax." },
//     { id: 2, title: "PHP", category: "Programming Language", image: "/images/portfolio/php.png", description: "PHP is a popular general-purpose scripting language that is especially suited to web development." },
//     { id: 3, title: "React", category: "Frontend Library", image: "/images/portfolio/react.png", description: "React is a JavaScript library for building user interfaces." },
//     { id: 4, title: "Next.js", category: "React Framework", image: "/images/portfolio/next.jpg", description: "Next.js gives you the best developer experience with all the features you need for production." },
//     { id: 5, title: "Python", category: "Programming Language", image: "/images/portfolio/python.jpg", description: "Python is an interpreted, high-level and general-purpose programming language." },
//     { id: 6, title: "Django", category: "Backend Framework", image: "/images/portfolio/django.png", description: "Django is a high-level Python Web framework that encourages rapid development." },
//     { id: 7, title: "MySQL", category: "Database", image: "/images/portfolio/mysql.jpg", description: "MySQL is an open-source relational database management system." },
//     { id: 8, title: "PostgreSQL", category: "Database", image: "/images/portfolio/postgresql.png", description: "PostgreSQL is a powerful, open source object-relational database system." },
//     { id: 9, title: "GraphQL", category: "API Query Language", image: "/images/portfolio/graphql.png", description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your data." },
// ];

const portfolioData: PortfolioItem[] = [
  { id: 1, title: "PIHS", category: "Prime Institute of Health Sciences", image: "", description: `This is an online college admission portal where students can register and complete the entire admission process in a 
  step-by-step manner. The portal utilizes HTML5, CSS3, Bootstrap 4, JavaScript, Ajax, jQuery, PHP, Laravel, and MySQL. You can 
  visit it at https://pihs.edu.pk/` },
  { id: 2, title: "Bright sky solutions", category: "Solar panel company", image: "/images/portfolio/php.png", description: "BrightSky Energy Services offers sustainable energy solutions, including solar power installations and energy management, to help reduce costs and environmental impact. We are committed to delivering reliable, efficient, and eco-friendly energy solutions. You can visit it at https://www.brightskyenergyservices.com/" },
  { id: 3, title: "Prohost Biotech", category: "Biotech insights and market trends", image: "/images/portfolio/react.png", description: "Prohost Biotech offers market insights and scientific analyses on biotechnology advancements, clinical trials, therapeutic innovations, and stock updates. It features news on emerging biotech firms, product approvals, and investment opportunities in the biotech industry. Visit Prohost Biotech for more details. You can visit it at https://prohostf.smartnoticeboard.io/" },
  { id: 4, title: "Checkin Checkout system", category: "Attendance management system", image: "/images/portfolio/next.jpg", description: "The primary purpose of the check in check out application is to automate the check-in/check-out process for employees working in various companies. This system enables efficient management of employees, customers, and schedules, streamlining operations and enhancing productivity." },
  { id: 5, title: "J7 global", category: " J7 Global Constructions ERP system", image: "/images/portfolio/python.jpg", description: "The J7 Global Constructions ERP system is designed to streamline organizational operations for J7 Global. It includes a comprehensive HRM system and procurement functionalities. The system is built with HTML, CSS, Bootstrap, JavaScript, and Laravel, and uses Pusher for real-time notifications." },
  { id: 6, title: "Wholesale Management system", category: "Wholesale management system", image: "/images/portfolio/django.png", description: "The Wholesale Management System is crafted to effectively handle wholesale operations. It includes a flexible folder structure enabling users to create nested folders with a recursive pattern, and it also manages both order and shipment flows." },
  { id: 7, title: "Hodlneers", category: "Hodlneers", image: "/images/portfolio/mysql.jpg", description: "This project focuses on cryptocurrencies, allowing users to upload content related to crypto. Users can link their social media accounts (Twitter and YouTube) with Hodlneer and can also post or comment directly on their social media profiles from within the system. The technology stack includes HTML5, CSS3, Bootstrap 4, JavaScript, Vue.js, Nuxt.js, PHP, Laravel, and MySQL. It also integrates REST APIs, Twitter APIs, and YouTube APIs, with version control managed using Git. " },
  { id: 8, title: "Algolia Search", category: "Algolia Search", image: "/images/portfolio/postgresql.png", description: "This project is built on Algolia search and is a single-page application that retrieves Twitter posts via an API. Each post includes a link, and users can perform real-time searches based on the content of the posts or the users. The technology stack includes HTML5, CSS3, Bootstrap 4, JavaScript, TypeScript, and Algolia search. " },
  { id: 9, title: "Greenland Ruby", category: "ERP system", image: "/images/portfolio/graphql.png", description: "This is an Enterprise Resource Planning (ERP) system for gemstones, covering the entire lifecycle of a stone—from mining and processing to sales. Stones can be published to the associated website, RubyCloud, where customers can purchase them. Sales companies also have the option to sell stones directly to their customers without using the website. The system utilizes HTML5, CSS3, Bootstrap 4, JavaScript, jQuery, Ajax, Vue.js, PHP, Laravel, and MySQL. Additionally, it includes Redis for queue job monitoring and integrates with the third-party marketing app Klaviyo." },
];

const Portfolio: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing more/less

  const handleCardClick = (card: PortfolioItem) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  const displayedItems = showAll ? portfolioData : portfolioData.slice(0, 6);

  return (
    <section className="text-white my-20">
      <div className="container mx-auto text-center">
  
          <div className="text-center relative w-fit mx-auto mb-10">
            <h2 className="text-yellow-400 font-semibold text-3xl uppercase tracking-widest">
              Portfolio
            </h2>
            <div className="relative mt-2">
              <div className="absolute inset-0 h-[2px] bg-gray-600"></div>
              <div className="mx-auto h-[2px] w-12 bg-yellow-400 relative z-10"></div>
            </div>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((card: PortfolioItem) => (
              <WobbleCard key={card.id} containerClassName="col-span-1 min-h-[300px]" onClick={() => handleCardClick(card)}>
                  <p className="mt-4 text-center max-w-[26rem] text-neutral-200 text-xl uppercase">
                    {card.title}
                  </p>
                  <p className="mt-4 text-center max-w-[26rem] text-neutral-200">
                    {card.category}
                  </p>
              </WobbleCard>
          ))}
        </div>

        <button
          className="mt-8 px-6 py-3 bg-yellow-500 text-black text-md rounded-lg hover:bg-yellow-600 transition"
          onClick={() => setShowAll(!showAll)} 
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Modal for Card Details */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="bg-[#1A202E] text-white">
          <DialogHeader>
            <DialogTitle>{selectedCard?.title}</DialogTitle>
          </DialogHeader>
          <p className="mt-4 text-gray-300">{selectedCard?.description}</p>
          <p className="mt-2 text-gray-400">{selectedCard?.category}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
