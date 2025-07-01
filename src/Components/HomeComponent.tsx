import React from 'react'
import Profile from '../Image/OG PROFILE.jpg'
import AnimatedSection from '../utils/AnimationSection'
import WordCycler from '../utils/WordCycler'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion'
import WhatsAppLink from '../utils/WhatsappLink';

function HomeComponent() {

  
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/gift.wada@yahoo.com-2 copy copy.pdf';
    link.download = 'Wada_Gift_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    const words = ['Frontend Engineer', 'React Developer', 'Next.js Specialist', 'UI/UX Developer'];
    const duration = 3000;

    const animationVariants = {
        left: {
          x: 0, // Move to the left (in pixels)
          transition: {
            type: 'spring',
            stiffness: 5,
            damping: 5,
            repeat: Infinity,
            repeatType: 'reverse' as const, // Use 'as const' for literal types
            duration: 3,
          },
        },
        right: {
          x: -30, // Move to the right (in pixels)
          transition: {
            type: 'spring',
            stiffness: 10,
            damping: 5,
            repeat: Infinity,
            repeatType: 'reverse' as const, // Use 'as const' for literal types
            duration: 3,
          },
        },
      };


  return (

        <div className=' dark:bg-[#252025] dark:text-white h-[120vh] md:h-[110vh]' ref={contactRef}>
            
            <section className='flex justify-center px-5 lg:px-32   gap-10 flex-wrap md:flex-nowrap'>
                <AnimatedSection animationType='left'>
            <motion.div      variants={animationVariants}
            initial="left"
            animate={['left', 'right']} >
            <img src={Profile} className='object-contain w-full max-w-md rounded-2xl shadow-2xl' alt="Wada Gift - Frontend Engineer" />  
            </motion.div>
            </AnimatedSection>

            <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='self-center mt-10 md:w-[75%] lg:w-[60%] h-[10vh] text-start space-y-6'
        >
          <div className=' text-4xl font-medium'>
            <WordCycler words={words} duration={duration} />
          </div>
             
<p className='font-semibold'>Experienced Frontend Engineer with 3+ Years of Expertise</p>
<p>Frontend engineer specializing in React and Next.js with 3+ years of experience building high-performance web applications. Passionate about creating exceptional user experiences with clean, maintainable code.</p>

                    <div className="flex space-x-4 dark:text-white mt-5">
      <a href="https://github.com/OgeeTech" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-700 hover:text-black dark:text-white" size={20} />
      </a>
      <a href="https://www.linkedin.com/in/wada-gift-b62967164" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-700 hover:text-blue-700 dark:text-white" size={20} />
      </a>
      <a href="mailto:wgift41@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className="text-gray-700 hover:text-red-600 dark:text-white" size={20} />
      </a>
    </div>

    <div className="mt-6">
      <button 
        onClick={handleDownloadCV}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
      >
        <FaDownload size={16} />
        Download CV
      </button>
    </div>

            </motion.div>
            </section>

         
         <WhatsAppLink />

        </div>
  )
}

export default HomeComponent