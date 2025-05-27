"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { products } from "@/lib/data";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProducts = products.filter((product) => product.featured);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in your furniture collection!");
    window.open(`https://wa.me/254774650407?text=${message}`, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {featuredProducts.map((product, index) => (
        <div 
          key={product.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6"
          >
            Crafting Comfort with Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Discover our exquisite collection of handcrafted furniture designed to transform your space with timeless elegance and unparalleled comfort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={openWhatsApp}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat with Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
        size="lg"
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Chat on WhatsApp
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
