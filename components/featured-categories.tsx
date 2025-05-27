"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Sofas",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    link: "/products?category=sofas",
  },
  {
    name: "Beds",
    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
    link: "/products?category=beds",
  },
  {
    name: "Office Desks",
    image: "https://images.pexels.com/photos/5089178/pexels-photo-5089178.jpeg",
    link: "/products?category=desks",
  },
  {
    name: "Coffee Tables",
    image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
    link: "/products?category=tables",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated furniture categories, each piece
            crafted with precision and elegance to elevate your living space.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={item}>
              <Link href={category.link} className="group block">
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-playfair font-semibold text-white">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-white/80">
                      View Collection
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}