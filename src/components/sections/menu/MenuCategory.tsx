import type { MenuItem } from '@/lib/types';
import { MenuItemCard } from './MenuItemCard';

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

export function MenuCategory({ title, items }: MenuCategoryProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-headline font-semibold text-primary mb-8 border-b-2 border-primary/30 pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
