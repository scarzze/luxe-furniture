import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/contexts/cart-context";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Cart } from '@/components/cart';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Luxe Living | Modern Furniture',
  description: 'Crafting Comfort with Elegance - Premium furniture for your home and office',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col bg-background text-foreground">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Cart />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}