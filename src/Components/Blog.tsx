import React, { useState, useMemo } from 'react';
import { blogPosts, BlogPost } from '../utils/BlogData';
import AnimatedSection from '../utils/AnimationSection';
import { FaClock, FaCalendar, FaTag, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WhatsAppLink from '../utils/WhatsappLink';

function Blog() {
  const contactRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  React.useEffect(() => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogPosts.map(post => post.category))];
    return cats;
  }, []);

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className='dark:bg-[#252025] dark:text-white min-h-screen' ref={contactRef}>
      <section className='px-5 md:px-10 lg:px-24 py-10'>
        <AnimatedSection animationType='fade'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold mb-4'>Programming Blog</h1>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Insights, tutorials, and thoughts on modern web development, React, Next.js, and frontend engineering best practices.
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection animationType='slide'>
          <div className='mb-8 space-y-4'>
            {/* Search Bar */}
            <div className='relative max-w-md mx-auto'>
              <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1b1b1bee] focus:border-blue-500 outline-none transition-colors'
              />
            </div>

            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-3'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-[#1b1b1bee] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#2a2a2a]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPosts.map((post, index) => (
            <AnimatedSection key={post.id} animationType='zoom'>
              <article className='bg-white dark:bg-[#1b1b1bee] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                <div className='relative'>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className='w-full h-48 object-cover'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium'>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className='p-6'>
                  <h2 className='text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors'>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>
                  
                  <div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4'>
                    <div className='flex items-center gap-2'>
                      <FaCalendar size={12} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaClock size={12} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className='bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs'
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors'
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 dark:text-gray-400 text-lg'>
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </section>
      
      <WhatsAppLink />
    </div>
  );
}

export default Blog;