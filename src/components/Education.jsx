import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
    <section id="education" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
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
            Education & Achievements
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My academic journey, achievements, and contributions to research
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center mb-8"
            >
              <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-3xl font-bold gradient-text">Education</h3>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    HKBK College of Engineering, Bangalore
                  </h4>
                  <p className="text-lg text-primary-600 dark:text-primary-400 mb-3">
                    Bachelor of Engineering in Information Science and Engineering
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>2021 - 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={16} />
                      <span>CGPA: 8.32/ 10</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures', 'Computer Networks', 'DBMS', 
                        'Operating Systems', 'Python', 'MongoDB', 'AngularJS'
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Academic Performance */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Academic Performance
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">8.32</div>
                  <div className="text-primary-100">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">2025</div>
                  <div className="text-primary-100">Expected Graduation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements & Publications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold gradient-text">Achievements</h3>
              </div>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        🏆 2nd Place - Inter-Department Web Designing Competition
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Received cash prize for outstanding web design and development skills
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                      <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        💰 KSCST Research Funding
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Final Year Project funded by Karnataka State Council for Science and Technology (KSCST)
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Publications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold gradient-text">Publications</h3>
              </div>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        "The Progression of ChatGPT: An Evolutionary Study from GPT-1 to GPT-4"
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        MAT Journals Pvt. Ltd., Volume 3, Issue 3, 2024
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-500">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Research Paper</span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">AI/ML</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        "AI-Powered Virtual Assistant Enhanced Productivity"
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        Presented at NCIT-2025, organized by ISTE and HKBK College of Engineering, Bengaluru
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        April 11–12, 2025
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-500">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Conference Presentation</span>
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded">Virtual Assistant</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Research Interests */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Research Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence', 'Machine Learning', 'Natural Language Processing',
                  'Virtual Assistants', 'Data Science', 'Web Development'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;