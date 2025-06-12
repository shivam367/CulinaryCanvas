
import Image from 'next/image';
import type { MenuItem } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void; // For order page
  showAddToCartButton?: boolean;
}

export function MenuItemCard({ item, onAddToCart, showAddToCartButton = false }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {item.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={item.imageUrl}
            alt={item.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
        {item.type && <Badge variant="outline" className="w-fit mt-1">{item.type}</Badge>}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{item.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4 border-t">
        <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
        {showAddToCartButton && onAddToCart && (
          <Button variant="outline" size="sm" onClick={() => onAddToCart(item)}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
