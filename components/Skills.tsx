import React from 'react'
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  return (
    <div className="my-20">
      <div className="text-center relative w-fit mx-auto mb-10">
        <h2 className="text-yellow-400 font-semibold text-3xl uppercase tracking-widest">
          Skills
        </h2>
        
        <div className="relative mt-2">
          <div className="absolute inset-0 h-[2px] bg-gray-600"></div>
          <div className="mx-auto h-[2px] w-12 bg-yellow-400 relative z-10"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <div className="flex flex-col justify-start w-full space-y-4">
          <h2 className="md:text-4xl text-3xl lg:text-4xl text-white relative z-20">
            {`All the skills that I have in that field of work are mentioned.`}
          </h2>

          <p className="text-lg leading-relaxed">
            I am proficient in various technologies and frameworks, which allow me to deliver efficient, scalable, and high-quality solutions. In the <span className="text-yellow-500">frontend</span>, I specialize in frameworks like <span className="text-yellow-500">React</span>, <span className="text-yellow-500">Next.js</span>, and <span className="text-yellow-500">Vue.js</span> to create dynamic and user-friendly interfaces. For the <span className="text-yellow-500">backend</span>, I am highly skilled in <span className="text-yellow-500">PHP</span> and <span className="text-yellow-500">Laravel</span>, with a solid understanding of <span className="text-yellow-500">Python</span> and <span className="text-yellow-500">Django</span> for data-driven applications and automation. I am also proficient in <span className="text-yellow-500">JavaScript</span> and <span className="text-yellow-500">TypeScript</span> to enhance the development of dynamic, robust user experiences. For <span className="text-yellow-500">database</span> management, I have experience with <span className="text-yellow-500">MySQL</span>, <span className="text-yellow-500">PostgreSQL</span>, and <span className="text-yellow-500">GraphQL</span> for handling complex queries and API integrations. These skills reflect my commitment to mastering a full stack of technologies that drive innovation and create high-performing solutions.
          </p>
        </div>

        <div className="flex flex-col gap-2 space-y-2">
          {[
            { name: 'PHP', value: 95 },
            { name: 'Laravel', value: 95 },
            { name: 'JavaScript', value: 90 },
            { name: 'TypeScript', value: 90 },
            { name: 'React', value: 90 },
            { name: 'Next.js', value: 90 },
            { name: 'Vue.js', value: 80 },
            { name: 'Python', value: 80 },
            { name: 'Django', value: 80 },
            { name: 'MySQL', value: 90 },
            { name: 'PostgreSQL', value: 90 },
            { name: 'GraphQL', value: 85 },
          ].map((skill) => (
            <div key={skill.name} className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-white">{skill.name}</p>
                <p className="text-white">{skill.value}%</p>
              </div>
              <Progress value={skill.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
