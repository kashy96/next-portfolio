// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  index,
}) => {
  const isImageOnLeft = index % 2 === 0; // Even index: image on the left; odd index: image on the right

  return (
    <motion.div>
    <div
      className={`group relative flex flex-col md:flex-row items-center gap-8 bg-[#1A202E] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 my-3 ${
        isImageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="relative w-[300px] h-[200px] flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          layout="fill"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-white">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default ProjectCard;
