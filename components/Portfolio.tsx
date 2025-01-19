import React from "react";
import ProjectCard from "./ProjectCard";

interface PortfolioItem {
  id: number;
  title: string;
  // category: string;
  image: string;
  description: string;
  technologies:string[]
}

const portfolioData: PortfolioItem[] = [
  { id: 1, title: "Prime Institute of Health Science", image: "/images/portfolio/pihs.png", description: `This is an online college admission portal where students can register and complete the entire admission process in a step-by-step manner . You can visit it at https://pihs.edu.pk/`, technologies:["HTML5", 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'Laravel', 'MySQL'] },
  { id: 2, title: "Bright sky solutions", image: "/images/portfolio/bsl.png", description: "BrightSky Energy Services offers sustainable energy solutions, including solar power installations and energy management, to help reduce costs and environmental impact. We are committed to delivering reliable, efficient, and eco-friendly energy solutions. You can visit it at https://www.brightskyenergyservices.com/", technologies:["HTML5", 'CSS3', 'Bootstrap', 'JavaScript', 'Laravel', 'MySQL'] },
  { id: 3, title: "Prohost Biotech", image: "/images/portfolio/pbt.png", description: "Prohost Biotech offers market insights and scientific analyses on biotechnology advancements, clinical trials, therapeutic innovations, and stock updates. It features news on emerging biotech firms, product approvals, and investment opportunities in the biotech industry. Visit Prohost Biotech for more details. You can visit it at https://prohostf.smartnoticeboard.io/", technologies:['React', 'Next.js', 'Tailwind', 'TypeScript', 'Redux', 'Laravel', 'MySQL'] },
  { id: 4, title: "Checkin Checkout system", image: "/images/portfolio/cico.png", description: "The primary purpose of the check in check out application is to automate the check-in/check-out process for employees working in various companies. This system enables efficient management of employees, customers, and schedules, streamlining operations and enhancing productivity.", technologies:['React', 'Tailwind', 'JavaScript', 'Contaxt API', 'Laravel', 'GraphQL','MySQL'] },
  // { id: 5, title: "J7 global", category: " J7 Global Constructions ERP system", image: "/images/portfolio/python.jpg", description: "The J7 Global Constructions ERP system is designed to streamline organizational operations for J7 Global. It includes a comprehensive HRM system and procurement functionalities.", technologies:['PHP', 'Laravel', 'Pusher', 'Bootstrap', 'JavaScript', 'Vue.js', 'MySQL', 'Git'] },
  { id: 6, title: "Wholesale Management system", image: "/images/portfolio/wss.png", description: "The Wholesale Management System is crafted to effectively handle wholesale operations. It includes a flexible folder structure enabling users to create nested folders with a recursive pattern, and it also manages both order and shipment flows.", technologies:['PHP', 'Laravel', 'Boostrap', 'JavaScript', 'Vue.js', 'Pusher', 'MySQL'] },
  { id: 7, title: "Portfolio", image: "/images/portfolio/portfolio.png", description: "Portfolio site using next.js with Tailwind and shadcn to highlight my services and skill set. ", technologies:['Next.js', 'React', 'Shadcn', 'motion'] },
  { id: 8, title: "Algolia Search", image: "/images/portfolio/as.png", description: "This project is built on Algolia search and is a single-page application that retrieves Twitter posts via an API. Each post includes a link, and users can perform real-time searches based on the content of the posts or the users. ", technologies:['Algolia Search', 'TypeScript', 'Node.js', 'MangoDB'] },
  { id: 9, title: "Greenland Ruby", image: "/images/portfolio/gl.png", description: "This is an Enterprise Resource Planning (ERP) system for gemstones, covering the entire lifecycle of a stone—from mining and processing to sales. Stones can be published to the associated website, RubyCloud, where customers can purchase them. Sales companies also have the option to sell stones directly to their customers without using the website." , technologies:['Laravel', 'Next.js', 'Tailwind', 'TypeScript', 'Redux', 'Laravel', 'Klaviyo', 'MySQL', 'Git']},
];

const Portfolio: React.FC = () => {

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
        
          {portfolioData.map((card: PortfolioItem, index: number) => (
            <ProjectCard
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.image}
              technologies={card.technologies}
              index={index} // Pass index to determine image positioning
            />
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
