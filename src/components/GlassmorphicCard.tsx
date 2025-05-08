
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(
      'glassmorphic p-6 transition-all duration-300 hover:shadow-lg',
      className
    )}>
      {children}
    </div>
  );
};

export default GlassmorphicCard;
