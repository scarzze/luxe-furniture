"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/lib/data";
import { Check, X, ShoppingBag, MessageSquare } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/currency";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  if (!product) return null;



  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBookConsultation = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${product.name} (${product.category}).\n\n` +
      `Price: ${formatPrice(product.price)}\n\n` +
      `I would like to schedule a consultation to discuss this product.`
    );
    window.open(`https://wa.me/254774650407?text=${message}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">
          {product.name} Details
        </DialogTitle>
        <div className="flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="md:w-1/2 bg-muted">
            <div className="relative h-72 md:h-[500px] w-full">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex p-2 gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-border"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            <h2 className="text-2xl font-playfair font-bold mb-2">
              {product.name}
            </h2>
            <p className="text-xl font-semibold mb-4">
              {formatPrice(product.price)}
            </p>

            <Tabs defaultValue="details" className="flex-1">
              <TabsList className="mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="h-full">
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Category</h4>
                  <p className="capitalize">{product.category}</p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="h-full">
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>

            <div className="mt-auto pt-6 flex flex-col gap-4">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={handleBookConsultation}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}