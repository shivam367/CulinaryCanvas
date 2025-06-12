import Image from 'next/image';
import type { CartItem as CartItemType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    } else if (newQuantity === 0) {
      onRemoveItem(item.id);
    }
  };

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      {item.imageUrl && (
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md object-cover"
          data-ai-hint={item.imageAiHint}
        />
      )}
      <div className="flex-grow">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          className="w-16 text-center h-9"
          min="1"
        />
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
      <Button variant="ghost" size="icon" onClick={() => onRemoveItem(item.id)} className="text-destructive hover:text-destructive/80">
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
}
