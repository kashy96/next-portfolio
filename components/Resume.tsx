import React from "react";

const Resume = () => {
  const educationData = [
    {
      title: "Computer Software engineering",
      duration: "2015 - 2019",
      institution: "University of engineering & technology, Peshawar",
      description:
        "I completed four years of my Bachelor's degree in Computer Software Engineering at the University of Engineering and Technology (UET) Peshawar, Mardan Campus.",
    },
    {
      title: "F.Sc",
      duration: "2012-2014",
      institution: "Govt College, Peshawar",
      description:
        "I have done my intermediate schooling from Government College, Peshawar.",
    },
  ];

  const experienceData = [
    {
      title: "Full stack developer",
      duration: "September 2019 - Present",
      company: "Akhtars IT Solutions",
      description:
        "I began my journey at AKITS as a Laravel intern and am currently working as a Full Stack Developer. Over the course of my time here, I have contributed to multiple projects.",
    },
  ];

  return (
    <div className="my-20 text-white">
      <div className="container mx-auto px-4">
        {/* Resume Title */}
        <div className="text-center mb-12">

          <div className="text-center relative w-fit mx-auto mb-10">
            <h2 className="text-yellow-400 font-semibold text-3xl uppercase tracking-widest">
              Resume
            </h2>
            <div className="relative mt-2">
              <div className="absolute inset-0 h-[2px] bg-gray-600"></div>
              <div className="mx-auto h-[2px] w-12 bg-yellow-400 relative z-10"></div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons text-yellow-500 mr-2">School</span>
              Education
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 h-full border-l border-gray-700"></div>
                  <div className="absolute left-0 top-0 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-yellow-500">
                    {edu.title}
                  </h3>
                  <span className="text-sm">{edu.duration}</span>
                  <p className="text-sm font-light">{edu.institution}</p>
                  <p className="text-sm mt-2 text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons text-yellow-500 mr-2">
                Work Outline
              </span>
              Experience
            </h2>
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 h-full border-l border-gray-700"></div>
                  <div className="absolute left-0 top-0 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-yellow-500">
                    {exp.title}
                  </h3>
                  <span className="text-sm">{exp.duration}</span>
                  <p className="text-sm font-light">{exp.company}</p>
                  <p className="text-sm mt-2 text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
