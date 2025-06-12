import React, { useState } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight, Calendar, Building, FileText } from 'lucide-react';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // TO ADD NEW CERTIFICATES: Add them to this array
  const certificates = [
    {
      title: 'Python Certification',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Comprehensive Python training covering programming fundamentals, functions, data types, and scripting.',
      pdf: '/certificates!!/python certification.pdf',
      link: 'https://drive.google.com/drive/folders/14U-eCOUEGet5ReiZUNpNFrjtjlh0Xkzg',
      skills: ['Python', 'Scripting', 'Programming Basics'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'UI/UX Foundations',
      issuer: 'Google (Coursera)',
      date: '2024',
      description: 'Foundational course on user experience design, wireframes, usability, and visual design principles.',
      pdf: '/certificates!!/uiux.pdf',
      link: 'https://www.coursera.org/account/accomplishments/certificate/UI_UX_CERT',
      skills: ['UI/UX', 'Design Thinking', 'Wireframes'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Meta (Coursera)',
      date: '2024',
      description: 'Backend development training focusing on servers, databases, APIs, and deployment best practices.',
      pdf: '/certificates!!/full stack.pdf',
      link: '/certificates!!/full stack.pdf',
      skills: ['APIs', 'Backend', 'Databases'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SQL Certificate',
      issuer: 'Udemy',
      date: '2024',
      description: 'Structured Query Language (SQL) training including SELECT, JOIN, GROUP BY, and data manipulation.',
      pdf: '/certificates!!/sql udemy!!.pdf',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0661adcb-338c-4f79-90ad-2c0cc93fc468.pdf',
      skills: ['SQL', 'Joins', 'Data Manipulation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Science and Analytics',
      issuer: 'Udemy',
      date: '2024',
      description: 'Analytics training covering data cleaning, visualization, and business insights.',
      pdf: '/certificates!!/ds da.pdf',
      link: 'https://drive.google.com/file/d/1-y_IfFlHaDx09kwv2rQNH4__y9gholK4/view?usp=sharing',
      skills: ['Data Cleaning', 'Visualization', 'Analytics'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Entity Relationship Modeling',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Training on conceptual and logical data modeling using ER diagrams and relational design.',
      pdf: '/certificates!!/er modelling.pdf',
      link: 'https://drive.google.com/drive/folders/14U-eCOUEGet5ReiZUNpNFrjtjlh0Xkzg',
      skills: ['ER Modeling', 'Databases', 'Normalization'],
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Data Visualization',
      issuer: 'Tata',
      date: '2024',
      description: 'Course on effective visualization techniques using charts, dashboards, and storytelling.',
      pdf: '/certificates!!/tata dv.pdf',
      link: 'https://drive.google.com/drive/folders/14U-eCOUEGet5ReiZUNpNFrjtjlh0Xkzg',
      skills: ['Data Visualization', 'Dashboards', 'Storytelling'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Multidimensional Data Modelling',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Focused training on OLAP cubes, star/snowflake schema, and business intelligence architecture.',
      pdf: '/certificates!!/mdm.pdf',
      link: 'https://drive.google.com/drive/folders/14U-eCOUEGet5ReiZUNpNFrjtjlh0Xkzg',
      skills: ['OLAP', 'Star Schema', 'BI'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Power BI',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Hands-on Power BI certification including DAX, Power Query, and interactive dashboards.',
      pdf: '/certificates!!/power bi.pdf',
      link: 'https://drive.google.com/drive/folders/14U-eCOUEGet5ReiZUNpNFrjtjlh0Xkzg',
      skills: ['Power BI', 'DAX', 'Dashboards'],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Project Manager Virtual Experience',
      issuer: 'Siemens',
      date: '2024',
      description: 'Virtual project management program simulating stakeholder communication, risk assessment, and project planning.',
      pdf: '/certificates!!/pm.pdf',
      link: '#',
      skills: ['Project Management', 'Stakeholder Communication', 'Risk Analysis'],
      color: 'from-slate-500 to-gray-500'
    },
    {
      title: 'Data Analytics and Visualization',
      issuer: 'Accenture',
      date: '2024',
      description: 'Virtual internship focused on data analysis, visualization with Excel, and presenting business insights.',
      pdf: '/certificates!!/dav.pdf',
      link: '#',
      skills: ['Data Analysis', 'Excel', 'Business Insights'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Data Science Virtual Experience',
      issuer: 'British Airways',
      date: '2024',
      description: 'Intro to data science practices in aviation — data wrangling, predictive modeling, and decision making.',
      pdf: '/certificates!!/dsb.pdf',
      link: '#',
      skills: ['Data Science', 'Python', 'Predictive Modeling'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Developer Virtual Experience',
      issuer: 'Accenture',
      date: '2024',
      description: 'Virtual internship simulating frontend/backend development tasks and agile practices.',
      pdf: '/certificates!!/ace.pdf',
      link: '#',
      skills: ['Frontend', 'Backend', 'Agile'],
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Entrepreneurship and Innovation',
      issuer: 'City of Moreton Bay',
      date: '2024',
      description: 'Innovation challenges, business idea generation, and startup simulation exercises.',
      pdf: '/certificates!!/innovvation!.pdf',
      link: '#',
      skills: ['Entrepreneurship', 'Innovation', 'Business Modeling'],
      color: 'from-lime-500 to-green-500'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development through certified courses
          </p>
        </div>

        {/* Certificate Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center z-10 px-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Certificate Display */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div
                    className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl mx-auto max-w-2xl transform transition-all duration-500 ${
                      index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                    }`}
                  >
                    {/* Certificate PDF Viewer */}
                    <div className="relative bg-gray-100 dark:bg-gray-800">
                      <iframe
                        src={cert.pdf}
                        title={cert.title}
                        className="w-full h-96 border-0"
                        onError={(e) => {
                          // Fallback if PDF doesn't load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback content when PDF fails to load */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${cert.color} items-center justify-center hidden`}
                      >
                        <div className="text-center text-white">
                          <FileText size={64} className="mx-auto mb-6 opacity-80" />
                          <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                          <p className="text-lg opacity-90 mb-4">{cert.issuer}</p>
                          <p className="text-sm opacity-75">Certificate not available for preview</p>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      {/* PDF Overlay for better visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Certificate Details */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {cert.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 mb-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Building size={16} />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Skills Covered:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skill}
                              className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-medium shadow-sm`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Certificate Button */}
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125 shadow-lg'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Certificate Counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {certificates.length} certificates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;