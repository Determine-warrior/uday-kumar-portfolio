import React from 'react';
import { useState, useRef } from 'react';
import { Download, Code, Database, Brain, Zap, GraduationCap, Award, BookOpen, Cloud, Settings, Users, Monitor, TestTube, Globe, BarChart3, Cpu, MessageSquare, Star } from 'lucide-react';

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);
  const ref = useRef(null);

  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      technologies: ['TensorFlow', 'Keras', 'Scikit-learn', 'Neural Networks', 'Model Evaluation'],
      color: 'from-purple-500 to-pink-500',
      description: 'Supervised and unsupervised learning, linear & logistic regression, decision trees, support vector machines, K-nearest neighbors, clustering, neural networks, model evaluation'
    },
    {
      category: 'Data Science & Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      technologies: ['Python', 'R', 'Matplotlib', 'Seaborn', 'Plotly'],
      color: 'from-green-500 to-emerald-500',
      description: 'Data cleaning, wrangling, exploratory data analysis (EDA), statistical analysis, hypothesis testing, feature engineering, data visualization, correlation analysis, A/B testing, KPIs and metrics'
    },
    {
      category: 'Analytics & BI Tools',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Excel', 'Power BI', 'Tableau', 'Google Sheets'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Microsoft Excel (formulas, pivot tables, charts, data validation), Google Sheets, Power BI, Tableau'
    },
    {
      category: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Python', 'R', 'Java', 'Shell Scripting'],
      color: 'from-orange-500 to-red-500',
      description: 'Python, R, Java (basic), Shell scripting'
    }
  ];

  const technicalSkillsDetailed = [
    {
      category: 'Artificial Intelligence & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-purple-600',
      skills: 'Supervised and unsupervised learning, linear & logistic regression, decision trees, support vector machines, K-nearest neighbors, clustering, neural networks, model evaluation, scikit-learn, TensorFlow, Keras'
    },
    {
      category: 'Data Science & Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'text-green-600',
      skills: 'Data cleaning, wrangling, exploratory data analysis (EDA), statistical analysis, hypothesis testing, feature engineering, data visualization (Matplotlib, Seaborn, Plotly), correlation analysis, A/B testing, KPIs and metrics'
    },
    {
      category: 'Analytics & BI Tools',
      icon: <Database className="w-5 h-5" />,
      color: 'text-blue-600',
      skills: 'Microsoft Excel (formulas, pivot tables, charts, data validation), Google Sheets, Power BI, Tableau'
    },
    {
      category: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      color: 'text-orange-600',
      skills: 'Python, R, Java (basic), Shell scripting'
    },
    {
      category: 'Software Development',
      icon: <Settings className="w-5 h-5" />,
      color: 'text-indigo-600',
      skills: 'Object-oriented programming (OOP), version control (Git, GitHub), REST APIs, debugging, modular design, Software Development Life Cycle (SDLC)'
    },
    {
      category: 'Web Technologies',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-cyan-600',
      skills: 'HTML, CSS, JavaScript (basic)'
    },
    {
      category: 'Database Management',
      icon: <Database className="w-5 h-5" />,
      color: 'text-emerald-600',
      skills: 'SQL, MySQL, database design, ER diagrams, CRUD operations, DBMS concepts'
    },
    {
      category: 'Software Testing',
      icon: <TestTube className="w-5 h-5" />,
      color: 'text-red-600',
      skills: 'Manual testing, test case writing, bug tracking, black-box testing, basics of Selenium and JUnit'
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud className="w-5 h-5" />,
      color: 'text-sky-600',
      skills: 'Google Drive API, Google Colab Pro, AWS EC2, AWS S3 (basic)'
    },
    {
      category: 'Development & Productivity Tools',
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-violet-600',
      skills: 'VS Code, Jupyter Notebook, Google Colab, Eclipse, PyCharm, Postman'
    },
    {
      category: 'Project Management & Collaboration',
      icon: <Users className="w-5 h-5" />,
      color: 'text-pink-600',
      skills: 'Agile methodology, Kanban boards, Trello, Jira (basic), Microsoft Project (basic), stakeholder management, team coordination, Slack, Google Workspace (Docs, Sheets, Slides)'
    },
    {
      category: 'Technical Communication',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'text-amber-600',
      skills: 'Report writing, presentation skills, documentation, ability to explain complex concepts to technical and non-technical audiences'
    },
    {
      category: 'Operating Systems',
      icon: <Monitor className="w-5 h-5" />,
      color: 'text-gray-600',
      skills: 'Windows, Linux (basic terminal commands)'
    },
    {
      category: 'Soft Skills',
      icon: <Star className="w-5 h-5" />,
      color: 'text-yellow-600',
      skills: 'Problem-solving, critical thinking, team collaboration, communication, adaptability, time management, attention to detail'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with expertise in AI, Machine Learning, and Full-Stack Development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hello! I'm Uday Kumar V, a passionate Information Science and Engineering student 
                at HKBK College of Engineering, Bangalore. I specialize in Artificial Intelligence, 
                Machine Learning, and Full-Stack Development.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in technology started with curiosity about how AI can solve real-world problems. 
                This led me to explore various programming languages, machine learning algorithms, and 
                modern web development frameworks, eventually specializing in creating intelligent 
                applications that make a difference.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new AI technologies, contributing to 
                research projects, or sharing my knowledge through publications and presentations. 
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            
          </div>

          {/* Right Column - Quick Skills Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setActiveSkillCategory(index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-3`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={tech} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      

        {/* Comprehensive Technical Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Comprehensive Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkillsDetailed.map((skillCategory, index) => (
              <div
                key={skillCategory.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <h4 className={`text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center ${skillCategory.color}`}>
                  {skillCategory.icon}
                  <span className="ml-2 text-gray-900 dark:text-white">{skillCategory.category}</span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skillCategory.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '8.32', label: 'CGPA', icon: '🎓' },
            { number: '10+', label: 'Projects Completed', icon: '💻' },
            { number: '2', label: 'Publications', icon: '📚' },
            { number: '1', label: 'Research Funding', icon: '💡' }
          ].map((stat, index) => (
            <div key={stat.label} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-100 dark:border-gray-600 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;