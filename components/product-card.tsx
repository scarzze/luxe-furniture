"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/currency";

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
}

export default function ProductCard({ product, onView }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden mb-4">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-black/30 flex items-center justify-center gap-4 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button
            size="icon"
            className="rounded-full bg-white text-black hover:bg-white/90 hover:text-black"
            onClick={() => onView(product)}
          >
            <Eye className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-muted-foreground mb-2">{product.category}</p>
      <p className="font-semibold">{formatPrice(product.price)}</p>
    </motion.div>
  );
}