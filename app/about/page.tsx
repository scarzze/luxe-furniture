'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MessageSquare } from 'lucide-react';

const team = [
  {
    name: 'James Mwangi',
    role: 'Master Carpenter',
    bio: 'With over 20 years of experience, James specializes in hand-carved wooden furniture, bringing traditional craftsmanship to modern designs.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Grace Wanjiku',
    role: 'Upholstery Expert',
    bio: 'Grace transforms furniture with her expert upholstery skills, combining luxurious fabrics with timeless designs for ultimate comfort.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'David Ochieng',
    role: 'Furniture Designer',
    bio: 'David blends contemporary aesthetics with functional design, creating statement pieces that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Amina Hassan',
    role: 'Finishing Specialist',
    bio: 'Amina ensures every piece that leaves our workshop meets the highest standards of quality and finish.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555041463-a586c61ea9bc?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Furniture"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting Timeless Elegance
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where Art Meets Function in Every Handcrafted Piece
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nestled in the heart of Ngong Road, Nairobi, Luxe Living began as a small workshop with a big dream: to bring handcrafted, luxurious furniture to discerning homeowners across Kenya.
                </p>
                <p>
                  Founded in 2015, our journey started with a team of three passionate artisans dedicated to reviving the lost art of fine furniture making. Today, we've grown into a family of skilled craftsmen and designers, but our commitment to quality and attention to detail remains unchanged.
                </p>
                <p>
                  Each piece in our collection is a testament to our dedication to excellence, blending traditional techniques with contemporary design to create furniture that tells a story.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Workshop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Craftsmanship */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Craftsmanship</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Every piece is a labor of love, crafted by hand using time-honored techniques and the finest materials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Materials',
                description: 'We source only the finest hardwoods, premium fabrics, and sustainable materials from trusted suppliers across Africa and beyond.'
              },
              {
                title: 'Technique',
                description: 'Our artisans combine traditional joinery techniques with modern technology to create pieces that are built to last for generations.'
              },
              {
                title: 'Design',
                description: 'Every design balances form and function, creating pieces that are as beautiful as they are practical for everyday living.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Artisans */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-4">Meet Our Artisans</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The talented individuals who bring our furniture to life with their skill, passion, and attention to detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">Visit Our Showroom</h2>
                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    Experience our collection in person at our Ngong Road showroom. Our design consultants are available to help you find or customize the perfect pieces for your space.
                  </p>
                  <p className="font-medium">
                    Ngong Road, Nairobi, Kenya
                  </p>
                  <p>
                    Open Monday - Saturday: 9:00 AM - 7:00 PM
                  </p>
                </div>
                <Button size="lg" className="gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Schedule a Consultation
                </Button>
              </div>
              <div className="h-80 md:h-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815599999999!2d36.82114531533087!3d-1.2866407359776156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1ca6f7c3d%3A0x5e1c05d1b5e5b8e5!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
