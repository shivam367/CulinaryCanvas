"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { MenuCategory } from '@/components/sections/menu/MenuCategory';
import { MOCK_MENU_ITEMS } from '@/lib/constants';
import type { MenuItem } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type DietFilter = "all" | "veg" | "non-veg";

export default function MenuPage() {
  const [dietFilter, setDietFilter] = useState<DietFilter>("all");

  const filterItems = (items: MenuItem[]): MenuItem[] => {
    if (dietFilter === "all") return items;
    return items.filter(item => item.type === dietFilter);
  };

  const categories = Object.keys(MOCK_MENU_ITEMS) as Array<keyof typeof MOCK_MENU_ITEMS>;

  return (
    <SectionWrapper title="Our Culinary Delights" subtitle="Explore a symphony of flavors crafted with passion.">
      <div className="mb-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Label className="text-lg font-medium">Filter by:</Label>
        <RadioGroup
          defaultValue="all"
          onValueChange={(value: DietFilter) => setDietFilter(value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="veg" id="veg" />
            <Label htmlFor="veg">Veg</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="non-veg" id="non-veg" />
            <Label htmlFor="non-veg">Non-Veg</Label>
          </div>
        </RadioGroup>
      </div>

      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <MenuCategory title={category} items={filterItems(MOCK_MENU_ITEMS[category])} />
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}
