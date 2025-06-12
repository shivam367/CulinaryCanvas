import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionWrapper({
  children,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  ...props
}: SectionWrapperProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)} {...props}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12 text-center">
            {title && (
              <h2 className={cn("text-3xl md:text-4xl font-headline font-bold text-primary mb-2", titleClassName)}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn("text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
