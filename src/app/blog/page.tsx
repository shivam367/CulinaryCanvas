import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { BlogCard } from '@/components/sections/blog/BlogCard';
import { MOCK_BLOG_POSTS } from '@/lib/constants';

export default function BlogPage() {
  return (
    <SectionWrapper title="Our Culinary Chronicles" subtitle="Insights, stories, and updates from the Culinary Canvas kitchen.">
      {MOCK_BLOG_POSTS.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
      )}
    </SectionWrapper>
  );
}
