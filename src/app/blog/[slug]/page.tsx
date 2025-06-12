import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MOCK_BLOG_POSTS } from '@/lib/constants';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CalendarDays, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return MOCK_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SectionWrapper>
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-6">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            {post.author && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1.5" />
                {post.author}
              </div>
            )}
             <Badge variant="secondary">Culinary Tips</Badge> {/* Example category */}
          </div>
        </div>

        {post.imageUrl && (
          <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={post.imageAiHint}
            />
          </div>
        )}
        
        <Separator className="my-8" />

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-primary prose-p:text-foreground/80 prose-a:text-accent hover:prose-a:text-accent/80">
          {/* Render markdown content here if it were actual markdown. For now, splitting by newline. */}
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <Separator className="my-12" />

        <div className="text-center">
            <p className="text-muted-foreground mb-2">Enjoyed this article?</p>
            <Button asChild>
                <Link href="/blog">Explore More Posts</Link>
            </Button>
        </div>

      </article>
    </SectionWrapper>
  );
}
