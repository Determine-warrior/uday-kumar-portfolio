import React from 'react';

const TechMarquee = () => {
  const technologies = [
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 
    'PostgreSQL', 'Express.js', 'Next.js', 'TailwindCSS', 'Git', 'Docker',
    'AWS', 'Machine Learning', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Technologies I Work With
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Constantly learning and adapting to new technologies
        </p>
      </div>

      <marquee behavior="scroll" direction="left" scrollamount="20">
        <div className="flex space-x-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="inline-block px-6 py-3 bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-200 dark:border-gray-600 mx-2"
            >
              <span className="text-gray-800 dark:text-gray-200 font-medium whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default TechMarquee;
