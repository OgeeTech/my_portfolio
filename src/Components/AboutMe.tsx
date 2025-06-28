import React from 'react'
import { techIcons, Experience } from '../utils/Data'
import AnimatedSection from '../utils/AnimationSection'
import { AnimatePresence, motion } from 'framer-motion'
import WhatsAppLink from '../utils/WhatsappLink';

function AboutMe() {

    
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


  return (
    <div className='dark:bg-[#252025] dark:text-white h-full' ref={contactRef}>

        <section className='text-start space-y-5 px-5 md:px-10 lg:px-24 py-10'>
        <h1 className='font-bold text-xl'> About Me</h1>  

        <p className='leading-10'>I am a frontend web engineer with over 3 years of experience, proficient in React and Next.js. I consistently deliver high-performance, visually appealing web and mobile applications, focusing on efficient, maintainable code. My expertise spans the entire software development lifecycle, including coding, debugging, testing, and deployment.

        I am deeply committed to agile methodologies, ensuring that projects are delivered on time and meet both functional and aesthetic requirements. My attention to detail and problem-solving abilities have helped me build scalable and reliable solutions that enhance user experiences.
        </p>

        <h1 className='font-bold text-xl'>Technologies & Skills</h1> 

        <div className='flex  flex-wrap gap-5 md:gap-5'>
            {techIcons.map((tech, index) => (
                <AnimatedSection key={index} animationType='slide'>
                <p className=' px-5 py-3 rounded dark:bg-[#130e] shadow-xl'>
                    {tech.icon}
                </p>
                </AnimatedSection>
            ))

            }
        </div>

        <div className='mt-8'>
          <h2 className='font-bold text-lg mb-4'>Additional Skills</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {['Chart.js', 'Java', 'Firebase', 'GraphQL', 'Redux', 'Context API', 'Jest', 'Vercel', 'Netlify', 'Heroku', 'RESTful APIs', 'Agile Methodologies'].map((skill, index) => (
              <AnimatedSection key={index} animationType='fade'>
                <div className='bg-gray-100 dark:bg-[#130e] px-3 py-2 rounded-lg text-sm text-center shadow-md'>
                  {skill}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        </section>

        <section className='text-start px-5 md:px-10 lg:px-24 py-10'>
        <h1 className='font-bold'>Professional Experience</h1> 

        <section className='space-y-7'>
      {Experience.map((exp, index) => (
        <AnimatedSection key={index} animationType='zoom'>
        <div className='cursor-pointer dark:bg-[#1b1b1bee] shadow-xl px-5 py-5 rounded-lg space-y-2' onClick={() => handleToggle(index)}>
    <h1 className='font-poppin font-bold'>{exp.role}</h1>
    <p className='font-bold'>{exp.company} <span className='text-sm font-normal'>{exp.time}</span></p>
    <p className='text-sm text-gray-600 dark:text-gray-400'>{exp.location}</p>
    {openIndex !== index && (
    <em className='text-sm'>Click for more details</em>
    )}

    <div className='flex gap-2'>
        <p className='dark:bg-white w-[0.1%] h-auto bg-black'></p>
        <div className='self-start'>
  
        <AnimatePresence>
        {openIndex === index && (
            <motion.div     initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
        <p>Key Achievements & Responsibilities</p>
        <ul className='list-disc pl-5 text-sm '>
              {exp.responsibilities.map((res, resIndex) =>(<li key={resIndex} className='mt-4'>{res}</li>))}
        </ul>
            </motion.div>
   
     )}

        </AnimatePresence>
        </div>
            </div>
        </div>
        </AnimatedSection>
        ))}
        </section>

        <section className='mt-10'>
          <h1 className='font-bold mb-5'>Education</h1>
          <div className='space-y-5'>
            <AnimatedSection animationType='slide'>
              <div className='dark:bg-[#1b1b1bee] shadow-xl px-5 py-5 rounded-lg'>
                <h2 className='font-bold'>University of Calabar</h2>
                <p className='font-semibold'>B.Sc. in Computer Science</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>2018 – 2023</p>
                <p className='mt-2 text-sm'>Completed coursework in software development, data structures, algorithms, and database management. Engaged in projects focusing on web development and application design.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType='slide'>
              <div className='dark:bg-[#1b1b1bee] shadow-xl px-5 py-5 rounded-lg'>
                <h2 className='font-bold'>Altschool Africa</h2>
                <p className='font-semibold'>Diploma in Backend Engineering</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>Expected 2025</p>
                <p className='mt-2 text-sm'>Coursework in server-side development, databases, and APIs. Participated in practical projects bridging backend systems with frontend interfaces.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        </section>
        <WhatsAppLink />
    </div>
  )
}

export default AboutMe