import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl mb-4",
        centered && "text-center" // Center the title text
      )}>{title}</h2>
      <p className={cn(
        "text-lg md:text-xl opacity-70 max-w-2xl",
        centered && "text-center mx-auto" // Center the subtitle text and the paragraph block
      )}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;