import { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/booking-form";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Book an Appointment | Luxe Living",
  description: "Schedule a consultation with our furniture specialists",
};

export default function BookingPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Book Your Personalized Consultation
            </h1>
            <p className="text-muted-foreground mb-8">
              Schedule a visit to our showroom or request a virtual consultation with our furniture experts. We'll help you find the perfect pieces for your space.
            </p>
            
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
              <BookingForm />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-[300px] md:h-[600px] w-full rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" 
                alt="Luxurious showroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}