"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { MenuItemCard } from '@/components/sections/menu/MenuItemCard';
import { CartItem as CartItemComponent } from '@/components/sections/order/CartItem';
import { OrderSummary } from '@/components/sections/order/OrderSummary';
import { MOCK_MENU_ITEMS } from '@/lib/constants';
import type { MenuItem, CartItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, User, Phone, HomeIcon, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from '@/components/ui/badge';

const allMenuItems: MenuItem[] = Object.values(MOCK_MENU_ITEMS).flat();
const categories = Object.keys(MOCK_MENU_ITEMS) as Array<keyof typeof MOCK_MENU_ITEMS>;

const checkoutFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  address: z.string().min(5, { message: "Address is required." }),
});
type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export default function OrderOnlinePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderStatus, setOrderStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: { name: "", phone: "", address: "" },
  });

  const addToCart = (item: MenuItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  
  async function onCheckoutSubmit(data: CheckoutFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Checkout data:", data, "Cart:", cartItems);
    setOrderStatus({ type: 'success', message: `Thank you, ${data.name}! Your order has been placed and will be delivered to ${data.address}.` });
    setCartItems([]);
    setShowCheckout(false);
    form.reset();
  }

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <SectionWrapper title="Order Online" subtitle="Enjoy our delicious food at your doorstep.">
      {orderStatus && (
        <Alert variant={orderStatus.type === 'success' ? "default" : "destructive"} className="mb-6 bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-700">
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
          <AlertTitle>{orderStatus.type === 'success' ? 'Order Placed!' : 'Error'}</AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300">{orderStatus.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MOCK_MENU_ITEMS[category].map((item) => (
                    <MenuItemCard key={item.id} item={item} onAddToCart={addToCart} showAddToCartButton />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline flex items-center justify-between">
                <span>Your Cart</span> 
                <Badge variant="secondary" className="text-sm">
                  <ShoppingCart className="mr-2 h-4 w-4" /> {totalItemsInCart} item(s)
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">Your cart is empty. Add some items!</p>
              ) : (
                <>
                  <div className="max-h-96 overflow-y-auto pr-2 -mr-2 mb-4">
                    {cartItems.map((item) => (
                      <CartItemComponent
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemoveItem={removeItem}
                      />
                    ))}
                  </div>
                  <OrderSummary cartItems={cartItems} />
                  <Button 
                    onClick={() => setShowCheckout(true)} 
                    className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground" 
                    size="lg"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {showCheckout && cartItems.length > 0 && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card className="w-full max-w-lg shadow-2xl bg-background">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Checkout</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onCheckoutSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><FormControl><Input placeholder="John Doe" {...field} className="pl-10" /></FormControl></div>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><FormControl><Input type="tel" placeholder="123-456-7890" {...field} className="pl-10" /></FormControl></div>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Address</FormLabel>
                      <div className="relative"><HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><FormControl><Input placeholder="123 Main St, City" {...field} className="pl-10" /></FormControl></div>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="flex justify-end space-x-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowCheckout(false)}>Cancel</Button>
                    <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Placing Order..." : "Place Order"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      )}
    </SectionWrapper>
  );
}
