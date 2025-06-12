import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Code, Users, Zap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Kalakaar',
    type: 'Freelance',
    duration: '2023 - Present',
    location: 'Remote',
    description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Built responsive web applications using React and Node.js',
      'Implemented RESTful APIs and database optimization',
      'Improved application performance by 40%',
      'Collaborated with designers to create intuitive user interfaces'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS'],
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Data Analytics Intern',
    company: 'Pantech Solutions',
    type: 'Internship',
    duration: '2022',
    location: 'Remote',
    description: 'Worked on end-to-end data analysis and machine learning workflows using Python, SQL, and visualization tools.',
    achievements: [
      'Applied Python (NumPy, Pandas, Matplotlib, Seaborn) and SQL (MySQL, MongoDB) for data manipulation and analysis',
      'Built predictive models using CNNs for COVID-19 detection',
      'Implemented NLP methods for tag identification and text analytics',
      'Created interactive dashboards using Tableau and Power BI',
      'Gained hands-on experience in preprocessing, model evaluation, and hyperparameter tuning',
      'Worked with deep learning frameworks such as TensorFlow and Keras'
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'TensorFlow', 'Keras', 'NLP'],
    icon: <Code className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Project Management Trainee',
    company: 'Siemens Mobility — Forage Virtual',
    type: 'Virtual Internship',
    duration: '2022',
    location: 'Remote',
    description: 'Completed a simulation-based project management training focused on rail infrastructure projects.',
    achievements: [
      'Designed strategic KPIs to monitor project performance aligned with organizational goals',
      'Created and presented dashboards using Microsoft Excel and data visualization techniques',
      'Demonstrated adaptability and stakeholder management through scenario-based challenges'
    ],
    technologies: ['Excel', 'Data Visualization', 'KPI Design'],
    icon: <Users className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Full Stack Java Developer Intern',
    company: 'Cranes Varsity, Bangalore',
    type: 'Internship',
    duration: '2021',
    location: 'Bangalore, India',
    description: 'Developed a student attendance management system using a full-stack Java approach.',
    achievements: [
      'Built frontend with HTML, CSS, and JavaScript',
      'Implemented backend with Java and MySQL',
      'Enabled features like live attendance marking, report generation, and alert notifications'
    ],
    technologies: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: <Code className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Deep Learning Intern',
    company: 'Pantech Solutions',
    type: 'Internship',
    duration: '2021',
    location: 'Remote',
    description: 'Completed a practical deep learning internship with real-time projects and applications.',
    achievements: [
      'Built and trained neural networks including CNNs, RNNs, LSTMs, and applied Transfer Learning',
      'Worked with TensorFlow, PyTorch, Keras, MXNet, and Caffe frameworks',
      'Developed and deployed real-time applications: Face Mask Detection, Social Distance Monitoring, Diabetes Prediction, YOLO Object Detection, and Image Segmentation'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Keras', 'MXNet', 'Caffe', 'Computer Vision', 'YOLO'],
    icon: <Zap className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500'
  }
];


  const skills = [
    {
      category: 'Technical Skills',
      icon: <Code className="w-5 h-5" />,
      items: ['Full-Stack Development', 'Machine Learning', 'Data Analysis', 'Web Scraping', 'API Development']
    },
    {
      category: 'Soft Skills',
      icon: <Users className="w-5 h-5" />,
      items: ['Team Collaboration', 'Problem Solving', 'Communication', 'Project Management', 'Adaptability']
    },
    {
      category: 'Tools & Platforms',
      icon: <Zap className="w-5 h-5" />,
      items: ['Git/GitHub', 'VS Code', 'Docker', 'AWS', 'Linux']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My professional journey and the skills I've developed along the way
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>
                  
                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 ml-16 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className={`absolute left-0 top-6 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {exp.icon}
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.1 * achIndex }}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Skills & Expertise
              </motion.h3>

              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                      {skillGroup.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h4>
                  </div>
                  
                  <div className="space-y-2">
                    {skillGroup.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * itemIndex }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Call to Action */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-6 text-white text-center"
              >
                <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-lg font-semibold mb-2">
                  Looking for Opportunities
                </h4>
                <p className="text-primary-100 mb-4">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;