import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome - Your Company Name</title>
        <meta name="description" content="Discover our services and learn how we can help you achieve your goals with innovative solutions tailored to your needs." />
      </Helmet>

      <div className="bg-background">
        <section className="relative min-h-[85vh] flex items-center bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Welcome to our platform
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  We provide innovative solutions designed to help businesses grow and thrive in today's digital landscape. Our team is dedicated to delivering exceptional results.
                </p>
                <Link to="/about">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-base transition-all active:scale-[0.98]">
                    Learn more about us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                    alt="Modern office workspace with collaborative team environment"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  What we do
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-prose">
                  Our mission is to empower organizations with tools and strategies that drive measurable results. We combine industry expertise with cutting-edge technology to create solutions that are both practical and forward-thinking.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                  From initial consultation to final implementation, we work closely with our clients to ensure every project meets their unique requirements and exceeds expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                    alt="Team collaborating on project with modern technology"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                See how we work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch this video to learn more about our approach and methodology
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-muted" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Company overview video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Learn more about our team, our values, and how we can help you achieve your goals
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-base transition-all active:scale-[0.98]">
                  About our company
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;