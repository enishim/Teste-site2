import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Elena Martinez',
      role: 'Chief Executive Officer',
      bio: 'With over 15 years of experience in the industry, Elena leads our strategic vision and ensures we deliver exceptional value to every client.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Operations',
      bio: 'Marcus brings precision and efficiency to our processes, ensuring seamless execution across all projects and departments.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sophia Anderson',
      role: 'Creative Director',
      bio: 'Sophia transforms ideas into compelling visual experiences, leading our creative team with innovation and attention to detail.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Your Company Name</title>
        <meta name="description" content="Learn about our company, our mission, and the dedicated team working to deliver exceptional results for our clients." />
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
              About our company
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We are a dedicated team committed to delivering innovative solutions that help businesses succeed in an ever-changing landscape.
            </motion.p>
          </div>
        </header>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  className="rounded-2xl w-full h-full object-cover aspect-[4/3] shadow-lg"
                  alt="Modern office space with collaborative workstations"
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Our mission and values
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-prose mb-4">
                  Founded with a vision to transform how businesses approach digital solutions, our company has grown from a small startup into a trusted partner for organizations across multiple industries.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-prose mb-4">
                  We believe in transparency, collaboration, and continuous improvement. Every project we undertake is an opportunity to push boundaries and deliver results that exceed expectations.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-prose">
                  Our approach combines strategic thinking with hands-on execution, ensuring that every solution is both innovative and practical for real-world application.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Meet our team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented individuals driving our success
              </p>
            </div>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <img
                    className="mx-auto h-48 w-48 rounded-xl object-cover shadow-md"
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                  />
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your project? Get in touch with our team and let's explore how we can help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 transition-all active:scale-[0.98]">
                Contact our team
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;