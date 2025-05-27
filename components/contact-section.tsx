"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in your furniture collection!");
    window.open(`https://wa.me/254774650407?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Visit Our Showroom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our furniture in person. Our consultants are ready to help you find the perfect pieces for your space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-sm bg-card h-[400px] relative">
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818821444332!2d36.81963!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d0db00e65b%3A0x31d1cf76c4b7c36b!2sNairobi%20CBD%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1711455138703!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              className="w-full h-full"
            ></iframe>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-playfair font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-muted-foreground">Nairobi CBD, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-muted-foreground">+254 774 650 407</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-muted-foreground">hoseabiwott8@gmail.com</p>
                </div>
              </div>
            </div>
            
            <Button onClick={openWhatsApp} className="w-full">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}