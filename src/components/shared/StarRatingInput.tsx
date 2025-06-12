"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingInputProps {
  count?: number;
  value: number;
  onChange: (value: number) => void;
  size?: number;
  className?: string;
  starClassName?: string;
  disabled?: boolean;
}

export function StarRatingInput({
  count = 5,
  value,
  onChange,
  size = 24,
  className,
  starClassName,
  disabled = false,
}: StarRatingInputProps) {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const stars = Array(count).fill(0);

  const handleClick = (newValue: number) => {
    if (!disabled) {
      onChange(newValue);
    }
  };

  const handleMouseOver = (newHoverValue: number) => {
    if (!disabled) {
      setHoverValue(newHoverValue);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverValue(undefined);
    }
  };

  return (
    <div className={cn("flex items-center space-x-1", className, disabled && "opacity-50 cursor-not-allowed")} role="radiogroup">
      {stars.map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button"
            key={index}
            role="radio"
            aria-checked={starValue === value}
            aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "cursor-pointer transition-colors",
              starClassName,
              (hoverValue || value) >= starValue ? 'text-accent' : 'text-muted-foreground',
              disabled && "cursor-not-allowed"
            )}
            style={{ width: size, height: size }}
            disabled={disabled}
          >
            <Star fill={(hoverValue || value) >= starValue ? "currentColor" : "none"} strokeWidth={1} />
          </button>
        );
      })}
    </div>
  );
}
