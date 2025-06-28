export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks: A Complete Guide",
    slug: "understanding-react-hooks-complete-guide",
    excerpt: "Dive deep into React Hooks and learn how they revolutionize state management and side effects in functional components.",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features in functional components. They provide a more direct API to the React concepts you already know.</p>
      
      <h3>Why Hooks Matter</h3>
      <p>Before Hooks, you had to convert functional components to class components to use state. Hooks eliminate this need and provide several benefits:</p>
      <ul>
        <li>Simpler component logic</li>
        <li>Better code reusability</li>
        <li>Easier testing</li>
        <li>Smaller bundle sizes</li>
      </ul>
      
      <h3>Essential Hooks</h3>
      
      <h4>1. useState Hook</h4>
      <p>The useState Hook lets you add state to functional components:</p>
      <pre><code>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
      
      <h4>2. useEffect Hook</h4>
      <p>The useEffect Hook lets you perform side effects in functional components:</p>
      <pre><code>
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() =&gt; {
    document.title = \`You clicked \${count} times\`;
  });
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
      
      <h3>Custom Hooks</h3>
      <p>Custom Hooks are JavaScript functions that start with "use" and can call other Hooks. They let you extract component logic into reusable functions:</p>
      <pre><code>
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () =&gt; setCount(count + 1);
  const decrement = () =&gt; setCount(count - 1);
  const reset = () =&gt; setCount(initialValue);
  
  return { count, increment, decrement, reset };
}
      </code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Only call Hooks at the top level of your React functions</li>
        <li>Only call Hooks from React functions</li>
        <li>Use the ESLint plugin for Hooks to enforce these rules</li>
        <li>Extract custom Hooks when you have complex stateful logic</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>React Hooks provide a powerful and flexible way to manage state and side effects in functional components. They make your code more readable, testable, and reusable. Start incorporating Hooks into your React applications today!</p>
    `,
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    date: "2024-01-15",
    readTime: 8,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Next.js 14: What's New and How to Get Started",
    slug: "nextjs-14-whats-new-getting-started",
    excerpt: "Explore the latest features in Next.js 14 including the App Router, Server Components, and improved performance optimizations.",
    content: `
      <h2>Next.js 14: The Latest Evolution</h2>
      <p>Next.js 14 brings significant improvements to the React framework, focusing on performance, developer experience, and new features that make building web applications even more efficient.</p>
      
      <h3>Key Features in Next.js 14</h3>
      
      <h4>1. App Router (Stable)</h4>
      <p>The App Router is now stable and provides a new way to structure your Next.js applications:</p>
      <pre><code>
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  blog/
    [slug]/
      page.tsx
      </code></pre>
      
      <h4>2. Server Components</h4>
      <p>Server Components allow you to render components on the server, reducing client-side JavaScript:</p>
      <pre><code>
// This component runs on the server
async function BlogPost({ params }) {
  const post = await fetchPost(params.slug);
  
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/article&gt;
  );
}
      </code></pre>
      
      <h4>3. Improved Performance</h4>
      <p>Next.js 14 includes several performance improvements:</p>
      <ul>
        <li>Faster local development server</li>
        <li>Improved build times</li>
        <li>Better memory usage</li>
        <li>Enhanced image optimization</li>
      </ul>
      
      <h3>Getting Started with Next.js 14</h3>
      
      <h4>Installation</h4>
      <pre><code>
npx create-next-app@latest my-app
cd my-app
npm run dev
      </code></pre>
      
      <h4>Project Structure</h4>
      <p>With the App Router, your project structure looks like this:</p>
      <pre><code>
my-app/
  app/
    globals.css
    layout.tsx
    page.tsx
  public/
  next.config.js
  package.json
      </code></pre>
      
      <h3>Migration from Pages Router</h3>
      <p>If you're migrating from the Pages Router, here's what you need to know:</p>
      <ul>
        <li>Move your pages from <code>pages/</code> to <code>app/</code></li>
        <li>Update your routing structure</li>
        <li>Convert to Server Components where possible</li>
        <li>Update your data fetching methods</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use Server Components by default</li>
        <li>Only use Client Components when necessary</li>
        <li>Leverage the new data fetching patterns</li>
        <li>Optimize your images with the Image component</li>
        <li>Use TypeScript for better development experience</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Next.js 14 represents a major step forward in React development. The App Router and Server Components provide new ways to build faster, more efficient web applications. Start exploring these features in your next project!</p>
    `,
    category: "Next.js",
    tags: ["Next.js", "React", "Server Components", "App Router"],
    date: "2024-01-10",
    readTime: 10,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for React Developers",
    slug: "typescript-best-practices-react-developers",
    excerpt: "Learn essential TypeScript patterns and best practices that will make your React applications more robust and maintainable.",
    content: `
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript adds static type checking to JavaScript, which helps catch errors early and makes your React applications more reliable and maintainable.</p>
      
      <h3>Setting Up TypeScript with React</h3>
      <pre><code>
npx create-react-app my-app --template typescript
# or
npx create-next-app@latest my-app --typescript
      </code></pre>
      
      <h3>Essential TypeScript Patterns for React</h3>
      
      <h4>1. Component Props Typing</h4>
      <pre><code>
interface ButtonProps {
  children: React.ReactNode;
  onClick: () =&gt; void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC&lt;ButtonProps&gt; = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) =&gt; {
  return (
    &lt;button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    &gt;
      {children}
    &lt;/button&gt;
  );
};
      </code></pre>
      
      <h4>2. State Typing with useState</h4>
      <pre><code>
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () =&gt; {
  const [user, setUser] = useState&lt;User | null&gt;(null);
  const [loading, setLoading] = useState&lt;boolean&gt;(false);
  
  // Component logic here
};
      </code></pre>
      
      <h4>3. Event Handlers</h4>
      <pre><code>
const Form: React.FC = () =&gt; {
  const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
    e.preventDefault();
    // Handle form submission
  };
  
  const handleInputChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    // Handle input change
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input onChange={handleInputChange} /&gt;
    &lt;/form&gt;
  );
};
      </code></pre>
      
      <h3>Advanced Patterns</h3>
      
      <h4>1. Generic Components</h4>
      <pre><code>
interface ListProps&lt;T&gt; {
  items: T[];
  renderItem: (item: T) =&gt; React.ReactNode;
}

function List&lt;T&gt;({ items, renderItem }: ListProps&lt;T&gt;) {
  return (
    &lt;ul&gt;
      {items.map((item, index) =&gt; (
        &lt;li key={index}&gt;{renderItem(item)}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
      </code></pre>
      
      <h4>2. Custom Hooks with TypeScript</h4>
      <pre><code>
interface UseApiResult&lt;T&gt; {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi&lt;T&gt;(url: string): UseApiResult&lt;T&gt; {
  const [data, setData] = useState&lt;T | null&gt;(null);
  const [loading, setLoading] = useState&lt;boolean&gt;(true);
  const [error, setError] = useState&lt;string | null&gt;(null);
  
  useEffect(() =&gt; {
    // Fetch data logic
  }, [url]);
  
  return { data, loading, error };
}
      </code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use interfaces for object shapes and types for unions</li>
        <li>Prefer composition over inheritance</li>
        <li>Use strict TypeScript configuration</li>
        <li>Leverage utility types like Partial, Pick, and Omit</li>
        <li>Create reusable type definitions</li>
        <li>Use enums for constants</li>
      </ul>
      
      <h3>Common Pitfalls to Avoid</h3>
      <ul>
        <li>Using <code>any</code> type excessively</li>
        <li>Not typing component props properly</li>
        <li>Ignoring TypeScript errors</li>
        <li>Over-complicating type definitions</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>TypeScript significantly improves the React development experience by providing type safety, better IDE support, and catching errors early. Start incorporating these patterns into your React projects for more robust applications.</p>
    `,
    category: "TypeScript",
    tags: ["TypeScript", "React", "Best Practices", "Type Safety"],
    date: "2024-01-05",
    readTime: 12,
    image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
    slug: "modern-css-techniques-grid-flexbox-beyond",
    excerpt: "Master modern CSS layout techniques including CSS Grid, Flexbox, and new CSS features that will transform your web designs.",
    content: `
      <h2>The Evolution of CSS Layout</h2>
      <p>CSS has evolved significantly over the years. Modern CSS provides powerful layout tools that make creating responsive, flexible designs easier than ever before.</p>
      
      <h3>CSS Grid: The Ultimate Layout Tool</h3>
      <p>CSS Grid is a two-dimensional layout system that gives you complete control over both rows and columns.</p>
      
      <h4>Basic Grid Setup</h4>
      <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.grid-item {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
      </code></pre>
      
      <h4>Advanced Grid Techniques</h4>
      <pre><code>
.complex-grid {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
      </code></pre>
      
      <h3>Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox is perfect for one-dimensional layouts and component-level design.</p>
      
      <h4>Flex Container Properties</h4>
      <pre><code>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.flex-item {
  flex: 1 1 300px; /* grow, shrink, basis */
}
      </code></pre>
      
      <h4>Common Flexbox Patterns</h4>
      <pre><code>
/* Center content */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Equal height cards */
.card-container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
}
      </code></pre>
      
      <h3>Modern CSS Features</h3>
      
      <h4>1. CSS Custom Properties (Variables)</h4>
      <pre><code>
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --spacing-unit: 8px;
  --border-radius: 8px;
}

.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
}
      </code></pre>
      
      <h4>2. Container Queries</h4>
      <pre><code>
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
      </code></pre>
      
      <h4>3. CSS Logical Properties</h4>
      <pre><code>
.element {
  margin-inline: auto; /* Instead of margin-left and margin-right */
  padding-block: 20px; /* Instead of padding-top and padding-bottom */
  border-inline-start: 2px solid blue; /* Instead of border-left */
}
      </code></pre>
      
      <h3>Responsive Design Patterns</h3>
      
      <h4>1. Intrinsic Web Design</h4>
      <pre><code>
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
      </code></pre>
      
      <h4>2. Clamp for Responsive Typography</h4>
      <pre><code>
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.container {
  width: clamp(300px, 90%, 1200px);
  margin: 0 auto;
}
      </code></pre>
      
      <h3>Performance Considerations</h3>
      <ul>
        <li>Use <code>transform</code> and <code>opacity</code> for animations</li>
        <li>Minimize layout thrashing with <code>will-change</code></li>
        <li>Use <code>content-visibility</code> for performance optimization</li>
        <li>Leverage CSS containment</li>
      </ul>
      
      <h3>Browser Support and Fallbacks</h3>
      <pre><code>
.grid-fallback {
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  .grid-fallback {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
      </code></pre>
      
      <h3>Conclusion</h3>
      <p>Modern CSS provides powerful tools for creating flexible, responsive layouts. By mastering Grid, Flexbox, and new CSS features, you can create more maintainable and performant web designs. Experiment with these techniques in your next project!</p>
    `,
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
    date: "2023-12-28",
    readTime: 15,
    image: "https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: "JavaScript Performance Optimization Techniques",
    slug: "javascript-performance-optimization-techniques",
    excerpt: "Discover advanced JavaScript optimization techniques to make your web applications faster and more efficient.",
    content: `
      <h2>Why JavaScript Performance Matters</h2>
      <p>JavaScript performance directly impacts user experience. Slow JavaScript can lead to unresponsive interfaces, poor Core Web Vitals scores, and ultimately, user abandonment.</p>
      
      <h3>Measuring Performance</h3>
      
      <h4>1. Browser DevTools</h4>
      <pre><code>
// Measure execution time
console.time('myFunction');
myFunction();
console.timeEnd('myFunction');

// Performance API
const start = performance.now();
myFunction();
const end = performance.now();
console.log(\`Execution time: \${end - start} milliseconds\`);
      </code></pre>
      
      <h4>2. Core Web Vitals</h4>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Loading performance</li>
        <li><strong>FID (First Input Delay):</strong> Interactivity</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Visual stability</li>
      </ul>
      
      <h3>Optimization Techniques</h3>
      
      <h4>1. Efficient DOM Manipulation</h4>
      <pre><code>
// Bad: Multiple DOM queries
function updateElements() {
  document.getElementById('title').textContent = 'New Title';
  document.getElementById('subtitle').textContent = 'New Subtitle';
  document.getElementById('content').textContent = 'New Content';
}

// Good: Cache DOM references
function updateElements() {
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const content = document.getElementById('content');
  
  title.textContent = 'New Title';
  subtitle.textContent = 'New Subtitle';
  content.textContent = 'New Content';
}

// Better: Use DocumentFragment for multiple insertions
function addMultipleElements(items) {
  const fragment = document.createDocumentFragment();
  
  items.forEach(item =&gt; {
    const element = document.createElement('div');
    element.textContent = item;
    fragment.appendChild(element);
  });
  
  document.getElementById('container').appendChild(fragment);
}
      </code></pre>
      
      <h4>2. Debouncing and Throttling</h4>
      <pre><code>
// Debounce: Execute after delay
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() =&gt; func.apply(this, args), delay);
  };
}

// Throttle: Execute at most once per interval
function throttle(func, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime &gt;= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// Usage
const debouncedSearch = debounce(searchFunction, 300);
const throttledScroll = throttle(scrollHandler, 100);
      </code></pre>
      
      <h4>3. Lazy Loading and Code Splitting</h4>
      <pre><code>
// Dynamic imports for code splitting
async function loadModule() {
  const { heavyFunction } = await import('./heavy-module.js');
  return heavyFunction();
}

// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries) =&gt; {
  entries.forEach(entry =&gt; {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img =&gt; {
  imageObserver.observe(img);
});
      </code></pre>
      
      <h4>4. Memory Management</h4>
      <pre><code>
// Avoid memory leaks
class ComponentManager {
  constructor() {
    this.listeners = [];
  }
  
  addListener(element, event, handler) {
    element.addEventListener(event, handler);
    this.listeners.push({ element, event, handler });
  }
  
  cleanup() {
    this.listeners.forEach(({ element, event, handler }) =&gt; {
      element.removeEventListener(event, handler);
    });
    this.listeners = [];
  }
}

// Use WeakMap for private data
const privateData = new WeakMap();

class MyClass {
  constructor(data) {
    privateData.set(this, { data });
  }
  
  getData() {
    return privateData.get(this).data;
  }
}
      </code></pre>
      
      <h3>Advanced Optimization Strategies</h3>
      
      <h4>1. Web Workers for Heavy Computations</h4>
      <pre><code>
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ numbers: [1, 2, 3, 4, 5] });

worker.onmessage = function(e) {
  console.log('Result:', e.data.result);
};

// worker.js
self.onmessage = function(e) {
  const { numbers } = e.data;
  const result = numbers.reduce((sum, num) =&gt; sum + num * num, 0);
  
  self.postMessage({ result });
};
      </code></pre>
      
      <h4>2. RequestAnimationFrame for Smooth Animations</h4>
      <pre><code>
function smoothAnimation() {
  let start = null;
  const duration = 1000;
  
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = (timestamp - start) / duration;
    
    if (progress &lt; 1) {
      // Update animation
      element.style.transform = \`translateX(\${progress * 100}px)\`;
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}
      </code></pre>
      
      <h4>3. Virtual Scrolling for Large Lists</h4>
      <pre><code>
class VirtualList {
  constructor(container, items, itemHeight) {
    this.container = container;
    this.items = items;
    this.itemHeight = itemHeight;
    this.visibleItems = Math.ceil(container.clientHeight / itemHeight);
    this.startIndex = 0;
    
    this.render();
    this.container.addEventListener('scroll', this.onScroll.bind(this));
  }
  
  onScroll() {
    const scrollTop = this.container.scrollTop;
    const newStartIndex = Math.floor(scrollTop / this.itemHeight);
    
    if (newStartIndex !== this.startIndex) {
      this.startIndex = newStartIndex;
      this.render();
    }
  }
  
  render() {
    const endIndex = Math.min(
      this.startIndex + this.visibleItems,
      this.items.length
    );
    
    // Render only visible items
    this.container.innerHTML = '';
    for (let i = this.startIndex; i &lt; endIndex; i++) {
      const item = document.createElement('div');
      item.textContent = this.items[i];
      item.style.height = this.itemHeight + 'px';
      this.container.appendChild(item);
    }
  }
}
      </code></pre>
      
      <h3>Performance Best Practices</h3>
      <ul>
        <li>Minimize DOM queries and cache references</li>
        <li>Use event delegation for dynamic content</li>
        <li>Implement lazy loading for images and components</li>
        <li>Optimize loops and avoid nested iterations</li>
        <li>Use appropriate data structures (Map, Set, WeakMap)</li>
        <li>Minimize bundle size with tree shaking</li>
        <li>Implement proper error boundaries</li>
      </ul>
      
      <h3>Tools for Performance Monitoring</h3>
      <ul>
        <li>Chrome DevTools Performance tab</li>
        <li>Lighthouse for auditing</li>
        <li>WebPageTest for real-world testing</li>
        <li>Bundle analyzers (webpack-bundle-analyzer)</li>
        <li>Performance monitoring services (Sentry, DataDog)</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>JavaScript performance optimization is an ongoing process. By implementing these techniques and continuously monitoring your application's performance, you can create fast, responsive web experiences that delight your users.</p>
    `,
    category: "JavaScript",
    tags: ["JavaScript", "Performance", "Optimization", "Web Development"],
    date: "2023-12-20",
    readTime: 18,
    image: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    title: "Building Scalable React Applications: Architecture Patterns",
    slug: "building-scalable-react-applications-architecture-patterns",
    excerpt: "Learn proven architectural patterns and best practices for building large-scale React applications that are maintainable and performant.",
    content: `
      <h2>The Challenge of Scale</h2>
      <p>As React applications grow, maintaining code quality, performance, and developer productivity becomes increasingly challenging. Proper architecture is crucial for long-term success.</p>
      
      <h3>Folder Structure and Organization</h3>
      
      <h4>Feature-Based Structure</h4>
      <pre><code>
src/
  components/
    ui/
      Button/
        Button.tsx
        Button.test.tsx
        Button.stories.tsx
        index.ts
  features/
    auth/
      components/
      hooks/
      services/
      types/
      index.ts
    dashboard/
      components/
      hooks/
      services/
      types/
      index.ts
  shared/
    hooks/
    utils/
    constants/
    types/
  app/
    store/
    router/
    App.tsx
      </code></pre>
      
      <h3>State Management Patterns</h3>
      
      <h4>1. Context + Reducer Pattern</h4>
      <pre><code>
// types.ts
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  loading: boolean;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_LOADING'; payload: boolean };

// reducer.ts
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

// context.tsx
const AppContext = createContext&lt;{
  state: AppState;
  dispatch: Dispatch&lt;AppAction&gt;;
} | null&gt;(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    &lt;AppContext.Provider value={{ state, dispatch }}&gt;
      {children}
    &lt;/AppContext.Provider&gt;
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
      </code></pre>
      
      <h4>2. Custom Hooks for Business Logic</h4>
      <pre><code>
// useAuth.ts
export function useAuth() {
  const { state, dispatch } = useAppContext();
  
  const login = useCallback(async (credentials: LoginCredentials) =&gt; {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const user = await authService.login(credentials);
      dispatch({ type: 'SET_USER', payload: user });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [dispatch]);
  
  const logout = useCallback(() =&gt; {
    authService.logout();
    dispatch({ type: 'SET_USER', payload: null });
  }, [dispatch]);
  
  return {
    user: state.user,
    loading: state.loading,
    login,
    logout,
    isAuthenticated: !!state.user
  };
}
      </code></pre>
      
      <h3>Component Patterns</h3>
      
      <h4>1. Compound Components</h4>
      <pre><code>
// Modal compound component
const Modal = ({ children, isOpen, onClose }) =&gt; {
  if (!isOpen) return null;
  
  return (
    &lt;div className="modal-overlay" onClick={onClose}&gt;
      &lt;div className="modal-content" onClick={e =&gt; e.stopPropagation()}&gt;
        {children}
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

const ModalHeader = ({ children }) =&gt; (
  &lt;div className="modal-header"&gt;{children}&lt;/div&gt;
);

const ModalBody = ({ children }) =&gt; (
  &lt;div className="modal-body"&gt;{children}&lt;/div&gt;
);

const ModalFooter = ({ children }) =&gt; (
  &lt;div className="modal-footer"&gt;{children}&lt;/div&gt;
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

// Usage
&lt;Modal isOpen={isOpen} onClose={handleClose}&gt;
  &lt;Modal.Header&gt;
    &lt;h2&gt;Confirm Action&lt;/h2&gt;
  &lt;/Modal.Header&gt;
  &lt;Modal.Body&gt;
    &lt;p&gt;Are you sure you want to proceed?&lt;/p&gt;
  &lt;/Modal.Body&gt;
  &lt;Modal.Footer&gt;
    &lt;Button onClick={handleClose}&gt;Cancel&lt;/Button&gt;
    &lt;Button onClick={handleConfirm}&gt;Confirm&lt;/Button&gt;
  &lt;/Modal.Footer&gt;
&lt;/Modal&gt;
      </code></pre>
      
      <h4>2. Render Props Pattern</h4>
      <pre><code>
interface DataFetcherProps&lt;T&gt; {
  url: string;
  children: (data: {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () =&gt; void;
  }) =&gt; ReactNode;
}

function DataFetcher&lt;T&gt;({ url, children }: DataFetcherProps&lt;T&gt;) {
  const [data, setData] = useState&lt;T | null&gt;(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState&lt;string | null&gt;(null);
  
  const fetchData = useCallback(async () =&gt; {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);
  
  useEffect(() =&gt; {
    fetchData();
  }, [fetchData]);
  
  return children({ data, loading, error, refetch: fetchData });
}

// Usage
&lt;DataFetcher&lt;User[]&gt; url="/api/users"&gt;
  {({ data, loading, error, refetch }) =&gt; {
    if (loading) return &lt;Spinner /&gt;;
    if (error) return &lt;ErrorMessage error={error} onRetry={refetch} /&gt;;
    return &lt;UserList users={data} /&gt;;
  }}
&lt;/DataFetcher&gt;
      </code></pre>
      
      <h3>Performance Optimization</h3>
      
      <h4>1. Code Splitting with React.lazy</h4>
      <pre><code>
// Lazy load components
const Dashboard = lazy(() =&gt; import('./features/dashboard/Dashboard'));
const Profile = lazy(() =&gt; import('./features/profile/Profile'));

function App() {
  return (
    &lt;Router&gt;
      &lt;Suspense fallback={&lt;PageLoader /&gt;}&gt;
        &lt;Routes&gt;
          &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;
          &lt;Route path="/profile" element={&lt;Profile /&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/Suspense&gt;
    &lt;/Router&gt;
  );
}
      </code></pre>
      
      <h4>2. Memoization Strategies</h4>
      <pre><code>
// Memoize expensive calculations
const ExpensiveComponent = ({ items, filter }) =&gt; {
  const filteredItems = useMemo(() =&gt; {
    return items.filter(item =&gt; 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  const handleItemClick = useCallback((id: string) =&gt; {
    // Handle click
  }, []);
  
  return (
    &lt;div&gt;
      {filteredItems.map(item =&gt; (
        &lt;MemoizedItem 
          key={item.id} 
          item={item} 
          onClick={handleItemClick}
        /&gt;
      ))}
    &lt;/div&gt;
  );
};

const MemoizedItem = memo(({ item, onClick }) =&gt; {
  return (
    &lt;div onClick={() =&gt; onClick(item.id)}&gt;
      {item.name}
    &lt;/div&gt;
  );
});
      </code></pre>
      
      <h3>Error Handling</h3>
      
      <h4>Error Boundaries</h4>
      <pre><code>
class ErrorBoundary extends Component&lt;
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean; error?: Error }
&gt; {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || &lt;ErrorFallback error={this.state.error} /&gt;;
    }
    
    return this.props.children;
  }
}

// Usage
&lt;ErrorBoundary fallback={&lt;CustomErrorPage /&gt;}&gt;
  &lt;App /&gt;
&lt;/ErrorBoundary&gt;
      </code></pre>
      
      <h3>Testing Strategies</h3>
      
      <h4>Component Testing</h4>
      <pre><code>
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () =&gt; {
  it('renders with correct text', () =&gt; {
    render(&lt;Button&gt;Click me&lt;/Button&gt;);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () =&gt; {
    const handleClick = jest.fn();
    render(&lt;Button onClick={handleClick}&gt;Click me&lt;/Button&gt;);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when disabled prop is true', () =&gt; {
    render(&lt;Button disabled&gt;Click me&lt;/Button&gt;);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
      </code></pre>
      
      <h3>Best Practices Summary</h3>
      <ul>
        <li>Use TypeScript for type safety</li>
        <li>Implement proper error boundaries</li>
        <li>Follow consistent naming conventions</li>
        <li>Keep components small and focused</li>
        <li>Use custom hooks for business logic</li>
        <li>Implement proper testing strategies</li>
        <li>Optimize bundle size with code splitting</li>
        <li>Use proper state management patterns</li>
        <li>Implement proper error handling</li>
        <li>Document your architecture decisions</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Building scalable React applications requires careful planning, proper architecture, and adherence to best practices. By implementing these patterns and strategies, you can create applications that are maintainable, performant, and enjoyable to work with as they grow.</p>
    `,
    category: "React",
    tags: ["React", "Architecture", "Scalability", "Best Practices"],
    date: "2023-12-15",
    readTime: 20,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];