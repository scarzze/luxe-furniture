"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data";
import ProductCard from "@/components/product-card";
import ProductDetailModal from "@/components/product-detail-modal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [category, setCategory] = useState<string>(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = category === "all" 
    ? products 
    : products.filter((product) => product.category === category);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our premium furniture collection, crafted with the finest materials
            and attention to detail.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs defaultValue={category} onValueChange={handleCategoryChange}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-lg">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sofas">Sofas</TabsTrigger>
              <TabsTrigger value="beds">Beds</TabsTrigger>
              <TabsTrigger value="desks">Desks</TabsTrigger>
              <TabsTrigger value="tables">Tables</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={handleViewProduct}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-4">No products found</h3>
            <p className="text-muted-foreground mb-8">
              We couldn't find any products in this category.
            </p>
            <Button onClick={() => setCategory("all")}>View All Products</Button>
          </div>
        )}
      </div>

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}