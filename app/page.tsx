import HeroSection from "@/components/hero-section";
import FeaturedCategories from "@/components/featured-categories";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}