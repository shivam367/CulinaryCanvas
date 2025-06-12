import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingDisplayProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  starClassName?: string;
}

export function StarRatingDisplay({
  rating,
  maxRating = 5,
  size = 20,
  className,
  starClassName,
}: StarRatingDisplayProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center", className)} aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="currentColor" strokeWidth={0} className={cn("text-accent", starClassName)} style={{ width: size, height: size }} />
      ))}
      {halfStar && <StarHalf key="half" fill="currentColor" strokeWidth={0} className={cn("text-accent", starClassName)} style={{ width: size, height: size }} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} strokeWidth={1} className={cn("text-muted-foreground", starClassName)} style={{ width: size, height: size }} />
      ))}
    </div>
  );
}
