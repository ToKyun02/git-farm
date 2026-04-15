import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const skeletonVariants = cva('animate-pulse rounded-md bg-muted', {
    variants: {
        variant: {
            default: 'bg-muted',
            primary: 'bg-primary/20',
            game: 'bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-shimmer',
        },
        shape: {
            default: 'rounded-md',
            circle: 'rounded-full',
            square: 'rounded-none',
            pill: 'rounded-full',
        },
    },
    defaultVariants: {
        variant: 'default',
        shape: 'default',
    },
});

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, variant, shape, ...props }, ref) => {
    return <div ref={ref} className={cn(skeletonVariants({ variant, shape, className }))} {...props} />;
});
Skeleton.displayName = 'Skeleton';

const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className }) => (
    <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
            <Skeleton key={i} className={cn('h-4', i === lines - 1 && 'w-4/5')} />
        ))}
    </div>
);

const SkeletonAvatar: React.FC<{ size?: 'sm' | 'default' | 'lg'; className?: string }> = ({ size = 'default', className }) => {
    const sizeMap = {
        sm: 'h-8 w-8',
        default: 'h-10 w-10',
        lg: 'h-12 w-12',
    };
    return <Skeleton shape='circle' className={cn(sizeMap[size], className)} />;
};

const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
    <div className={cn('space-y-4 p-4', className)}>
        <div className='flex items-center gap-3'>
            <SkeletonAvatar />
            <div className='flex-1 space-y-2'>
                <Skeleton className='h-4 w-1/3' />
                <Skeleton className='h-3 w-1/4' />
            </div>
        </div>
        <SkeletonText lines={2} />
        <Skeleton className='h-32 w-full' />
    </div>
);

export { Skeleton, SkeletonAvatar, SkeletonCard, SkeletonText, skeletonVariants };
