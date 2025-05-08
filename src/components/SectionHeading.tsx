
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
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
      <p className="text-lg md:text-xl opacity-70 max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
