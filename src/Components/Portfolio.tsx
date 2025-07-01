import React from 'react'
import { Portfolios } from '../utils/Data'
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'
import AnimatedSection from '../utils/AnimationSection'
import WhatsAppLink from '../utils/WhatsappLink';

function Portfolio() {
  
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className='dark:bg-[#252025] dark:text-white min-h-screen' ref={contactRef}>
      <section className='px-5 md:px-10 lg:px-24 py-10'>
        <AnimatedSection animationType='fade'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold mb-4'>My Portfolio</h1>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Recent projects showcasing expertise in modern web development and responsive design.
            </p>
          </div>
        </AnimatedSection>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Portfolios.map((port, index) => (
            <AnimatedSection key={index} animationType='zoom'>
              <div className='group relative bg-white dark:bg-[#1b1b1bee] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                {/* Project Image */}
                <div className='relative overflow-hidden'>
                  <img 
                    src={port.image} 
                    alt={port.name}
                    className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' 
                  />
                  
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='flex gap-4'>
                      <a 
                        href={port.liveLink} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 transform hover:scale-105'
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={port.githubLink} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 transform hover:scale-105'
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaCode className='text-blue-600' />
                    <h2 className='text-xl font-bold text-gray-800 dark:text-white'>
                      {port.name}
                    </h2>
                  </div>
                  
                  <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3'>
                    {port.desc}
                  </p>
                  
                  {/* Technologies Used */}
                  <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                      {port.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links - Always Visible on Mobile */}
                  <div className='flex gap-3 md:hidden'>
                    <a 
                      href={port.liveLink} 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-center text-sm transition-colors duration-200'
                    >
                      <FaExternalLinkAlt className='inline mr-2' size={14} />
                      Live Demo
                    </a>
                    <a 
                      href={port.githubLink} 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className='flex-1 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded text-center text-sm transition-colors duration-200'
                    >
                      <FaGithub className='inline mr-2' size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animationType='fade'>
          <div className='text-center mt-16'>
            <h3 className='text-2xl font-bold mb-4'>Ready to Work Together?</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto'>
              Let's discuss how I can help bring your ideas to life with modern web technologies.
            </p>
            <a 
              href="/contact" 
              className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105'
            >
              Get In Touch
            </a>
          </div>
        </AnimatedSection>
      </section>
      
      <WhatsAppLink />
    </div>
  )
}

export default Portfolio