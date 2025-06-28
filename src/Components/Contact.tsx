import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Contact() {

  
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xpwzzopy', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus('Thanks for reaching out 😁👍');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('There was an error. Please try again later.');
    }
  };

  return (
    <div className='py-10 mt-8 px-5 lg:px-24' ref={contactRef}>
      <h1 className='text-center text-2xl font-bold'>Let's Connect 🚀</h1>
      <form className='bg-white dark:bg-[#1b1b1bee] shadow-2xl flex flex-col md:flex-row rounded-md mt-10' onSubmit={handleSubmit}>
        <div className='bg-[#fdf4f4] dark:bg-[#302f2fee] py-10 px-5 md:px-10 rounded-md w-full md:w-1/3'>
          <h2 className='font-bold text-lg'>Get In Touch</h2>
          <p className='text-sm mt-2 mb-5 text-gray-600 dark:text-gray-300'>Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.</p>
          <div className='space-y-5 mt-5'>
            <div>
              <a href='mailto:wgift41@gmail.com' className='flex gap-2 items-center hover:text-blue-600 transition-colors'>
                <SiGmail className='self-center' />
                <p>wgift41@gmail.com</p>
              </a>
            </div>
            <div>
              <a href="https://github.com/OgeeTech" target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-gray-800 dark:hover:text-gray-200 transition-colors'>
                <FaGithub className="text-gray-700 dark:text-white" size={20} />
                <p>@OgeeTech</p>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/wada-gift-b62967164" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-700 transition-colors'>
                <FaLinkedin className="text-gray-700 dark:text-white" size={20} />
                <p>Wada Gift</p>
              </a>
            </div>
          </div>
        </div>

        <div className='px-5 py-10 w-full md:w-2/3 space-y-6'>
          <div className='space-y-3'>
            <label className='font-medium'>Name</label>
            <p className='border-2 px-4 flex-shrink rounded-lg focus-within:border-blue-500 transition-colors'>
              <input
                type="text"
                className='w-full outline-none bg-transparent h-[40px]'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
              />
            </p>
          </div>
          <div className='space-y-3'>
            <label className='font-medium'>Email</label>
            <p className='border-2 px-4 flex-shrink rounded-lg focus-within:border-blue-500 transition-colors'>
              <input
                type="email"
                className='w-full outline-none bg-transparent h-[40px]'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
              />
            </p>
          </div>
          <div className='space-y-3'>
            <label className='font-medium'>Message</label>
            <p className='border-2 px-4 flex-shrink rounded-lg focus-within:border-blue-500 transition-colors'>
              <textarea
                className='w-full outline-none bg-transparent py-3'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your project or how I can help..."
              />
            </p>
          </div>

          <div className='flex text-end justify-end'>
            <button type="submit" className='rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-colors font-medium'>Send Message</button>
          </div>

          {status && <p className="text-center font-medium">{status}</p>} 
        </div>
      </form>
    </div>
  );
}

export default Contact;