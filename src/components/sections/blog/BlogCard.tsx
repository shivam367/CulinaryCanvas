
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full h-56">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/blog/${post.slug}`} className="block">
          <CardTitle className="font-headline text-xl hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </Link>
        <CardDescription className="flex items-center text-xs text-muted-foreground pt-1">
          <CalendarDays className="h-4 w-4 mr-1.5" />
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 text-sm leading-relaxed">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="px-0 text-accent hover:text-accent/80">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="h-4 w-4 ml-1.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
