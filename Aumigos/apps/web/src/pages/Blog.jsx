import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building resilient teams in uncertain times',
      excerpt: 'Learn how to foster strong, adaptable teams that can navigate challenges and deliver results even when facing uncertainty.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      date: 'March 12, 2026',
      author: 'Elena Martinez'
    },
    {
      title: 'Data-driven decision making for modern businesses',
      excerpt: 'Discover practical strategies for incorporating analytics into your decision-making process and achieving better outcomes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      date: 'March 8, 2026',
      author: 'Marcus Chen'
    },
    {
      title: 'The future of digital transformation',
      excerpt: 'Explore emerging trends in digital transformation and how organizations can prepare for the next wave of technological change.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      date: 'March 5, 2026',
      author: 'Sophia Anderson'
    },
    {
      title: 'Effective communication in remote work environments',
      excerpt: 'Master the art of remote collaboration with proven techniques for keeping teams connected and productive.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      date: 'February 28, 2026',
      author: 'Elena Martinez'
    },
    {
      title: 'Measuring success beyond traditional metrics',
      excerpt: 'Rethink how you evaluate performance with holistic approaches that capture the full picture of organizational health.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      date: 'February 24, 2026',
      author: 'Marcus Chen'
    },
    {
      title: 'Creating a culture of continuous improvement',
      excerpt: 'Build systems and mindsets that encourage ongoing learning and iterative enhancement across your organization.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      date: 'February 20, 2026',
      author: 'Sophia Anderson'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Your Company Name</title>
        <meta name="description" content="Read our latest insights, industry analysis, and practical advice on business strategy, digital transformation, and organizational development." />
      </Helmet>

      <div className="bg-background">
        <header className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Insights and ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Explore our latest thinking on business strategy, technology, and organizational excellence
            </motion.p>
          </div>
        </header>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col h-full group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 bg-muted aspect-[4/3] shadow-md">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link to="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;