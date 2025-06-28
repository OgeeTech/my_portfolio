import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../utils/BlogData';
import { FaClock, FaCalendar, FaArrowLeft, FaTag } from 'react-icons/fa';
import AnimatedSection from '../utils/AnimationSection';
import WhatsAppLink from '../utils/WhatsappLink';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (!post) {
    return (
      <div className='dark:bg-[#252025] dark:text-white min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Article Not Found</h1>
          <Link to="/blog" className='text-blue-600 hover:text-blue-800'>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className='dark:bg-[#252025] dark:text-white min-h-screen' ref={contactRef}>
      <article className='max-w-4xl mx-auto px-5 md:px-10 py-10'>
        <AnimatedSection animationType='fade'>
          <Link 
            to="/blog" 
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors'
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </AnimatedSection>

        <AnimatedSection animationType='slide'>
          <header className='mb-8'>
            <div className='mb-4'>
              <span className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium'>
                {post.category}
              </span>
            </div>
            
            <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
              {post.title}
            </h1>
            
            <div className='flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-6'>
              <div className='flex items-center gap-2'>
                <FaCalendar size={14} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaClock size={14} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <div className='flex flex-wrap gap-2 mb-8'>
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className='bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>
        </AnimatedSection>

        <AnimatedSection animationType='zoom'>
          <div className='mb-8'>
            <img 
              src={post.image} 
              alt={post.title}
              className='w-full h-64 md:h-96 object-cover rounded-lg shadow-xl'
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animationType='fade'>
          <div className='prose prose-lg dark:prose-invert max-w-none'>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </AnimatedSection>

        <AnimatedSection animationType='slide'>
          <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
            <div className='flex justify-between items-center'>
              <Link 
                to="/blog" 
                className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors'
              >
                ← More Articles
              </Link>
              <Link 
                to="/contact" 
                className='bg-gray-200 dark:bg-[#1b1b1bee] hover:bg-gray-300 dark:hover:bg-[#2a2a2a] px-6 py-3 rounded-lg transition-colors'
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </article>
      
      <WhatsAppLink />
    </div>
  );
}

export default BlogPost;