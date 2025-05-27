'use client';

import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCart } from '@/contexts/cart-context';
import { formatPrice } from '@/lib/currency';
import Image from 'next/image';
import Link from 'next/link';

export function Cart() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    totalItems, 
    totalPrice 
  } = useCart();



  return (
    <Dialog open={isCartOpen} onOpenChange={closeCart}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Cart ({totalItems})
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={closeCart}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {cart.length === 0 ? (
          <div className="py-12 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2">Add some items to get started</p>
            <Button className="mt-6" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.name}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground capitalize">
                      {item.category}
                    </p>
                    <p className="font-medium">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6 space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/checkout" onClick={closeCart}>
                    Proceed to Checkout
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <Link href="/cart" onClick={closeCart}>
                    View Cart
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
