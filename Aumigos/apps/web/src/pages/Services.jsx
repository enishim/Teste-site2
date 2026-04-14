import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Target, LineChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Zap,
      number: '01',
      title: 'Strategy and consulting',
      description: 'We analyze your business objectives and develop tailored strategies that align with your long-term vision. Our consultants bring deep industry expertise to every engagement.'
    },
    {
      icon: Target,
      number: '02',
      title: 'Digital transformation',
      description: 'Transform your operations with modern digital tools and processes. We guide organizations through every stage of their digital journey, from planning to execution.'
    },
    {
      icon: LineChart,
      number: '03',
      title: 'Data analytics',
      description: 'Turn raw data into actionable insights. Our analytics services help you understand trends, predict outcomes, and make informed decisions based on solid evidence.'
    },
    {
      icon: Users,
      number: '04',
      title: 'Team development',
      description: 'Build capable, confident teams through targeted training and development programs. We help organizations cultivate the skills needed for sustained success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Your Company Name</title>
        <meta name="description" content="Explore our comprehensive range of services designed to help your business grow and succeed in today's competitive landscape." />
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
              What we offer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive solutions designed to address your unique challenges and drive measurable results
            </motion.p>
          </div>
        </header>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid md:grid-cols-12 gap-8 items-center"
                >
                  <div className="md:col-span-2">
                    <span className="text-7xl font-bold text-primary/20" style={{ letterSpacing: '-0.02em' }}>
                      {service.number}
                    </span>
                  </div>
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Ready to start your project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss how our services can help you achieve your business objectives
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 transition-all active:scale-[0.98]">
                  Get in touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;