"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ShoppingBag, X, Menu } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const routes = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/booking", label: "Book Appointment" },
];

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      // If on homepage, smooth scroll to contact section
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, navigate to homepage then scroll to contact
      window.location.href = "/#contact";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold font-playfair text-primary"
          >
            Luxe Living
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm transition-colors hover:text-primary font-medium",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-sm transition-colors hover:text-primary font-medium text-foreground cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </Button>
            <Button>Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-20 px-6 md:hidden">
          <nav className="flex flex-col space-y-6 py-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                handleContactClick(e);
                setIsOpen(false);
              }}
              className="text-lg font-medium cursor-pointer"
            >
              Contact
            </a>
            <Button className="w-full">Book Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
}