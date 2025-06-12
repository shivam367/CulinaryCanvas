
import Image from 'next/image';
import Link from 'next/link';
import { Award as AwardIcon, Star, Trophy, Utensils, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { MOCK_AWARDS, MOCK_CHEFS, APP_NAME } from '@/lib/constants';
import type { Award as AwardType, Chef } from '@/lib/types';

const iconMap: { [key: string]: React.ElementType } = {
  Award: AwardIcon,
  Star: Star,
  Trophy: Trophy,
  Default: AwardIcon,
};

function HeroSection() {
  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-lg shadow-xl">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="Restaurant ambiance"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-75"
        data-ai-hint="restaurant interior"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-white mb-4 drop-shadow-lg">
          Welcome to {APP_NAME}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
          An unforgettable dining experience where culinary art meets warm hospitality.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/reservations">Reserve a Table</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white bg-transparent hover:bg-white/10">
            <Link href="/menu">View Menu</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <SectionWrapper title="Our Story" subtitle="Crafting memories, one dish at a time.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Restaurant cuisine"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="gourmet dish"
          />
        </div>
        <div className="text-lg text-foreground/80 space-y-4">
          <p>
            Nestled in the heart of the city, {APP_NAME} offers a unique blend of traditional flavors and contemporary culinary techniques. Our ambiance is designed to be warm and inviting, perfect for intimate dinners, family gatherings, or celebrating special moments.
          </p>
          <p>
            We pride ourselves on using the freshest, locally-sourced ingredients to create dishes that delight the senses. Our commitment to quality and passion for food is evident in every plate we serve.
          </p>
          <div className="flex space-x-6 mt-6 text-sm text-primary">
            <span className="flex items-center"><Utensils className="mr-2 h-5 w-5" /> Exquisite Cuisine</span>
            <span className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> Prime Location</span>
            <span className="flex items-center"><Users className="mr-2 h-5 w-5" /> Warm Ambiance</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function AwardsSection() {
  return (
    <SectionWrapper title="Accolades & Recognition" subtitle="Celebrating our commitment to excellence." className="bg-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MOCK_AWARDS.map((award: AwardType) => {
          const IconComponent = iconMap[award.icon || 'Default'] || iconMap.Default;
          return (
            <Card key={award.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2">
                  <IconComponent className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-primary">{award.name}</CardTitle>
                <CardDescription>{award.year}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

function ChefsSection() {
  return (
    <SectionWrapper title="Meet Our Culinary Artists" subtitle="The passion and talent behind every dish.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {MOCK_CHEFS.map((chef: Chef) => (
          <Card key={chef.id} className="overflow-hidden shadow-lg flex flex-col sm:flex-row">
            <div className="sm:w-1/3">
              <Image
                src={chef.photoUrl}
                alt={chef.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                data-ai-hint={chef.photoAiHint}
              />
            </div>
            <div className="sm:w-2/3">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{chef.name}</CardTitle>
                <CardDescription className="text-primary">{chef.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{chef.bio}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <ChefsSection />
    </>
  );
}
