import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const progressVariants = cva(['relative w-full overflow-hidden rounded-full', 'bg-muted'], {
    variants: {
        variant: {
            default: 'bg-muted',
            game: ['bg-muted/50', 'border-2 border-border', 'shadow-[inset_0_2px_4px_0] shadow-foreground/5'],
        },
        size: {
            default: 'h-2',
            sm: 'h-1.5',
            lg: 'h-3',
            xl: 'h-4 rounded-lg',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

const progressIndicatorVariants = cva(['h-full flex-1 transition-all duration-300 ease-out', 'rounded-full'], {
    variants: {
        color: {
            default: 'bg-primary',
            success: 'bg-success',
            gold: 'bg-gold',
            accent: 'bg-accent',
            destructive: 'bg-destructive',
            gradient: 'bg-gradient-to-r from-primary via-accent to-success',
            'game-xp': 'bg-gradient-to-r from-accent to-primary',
        },
        animated: {
            true: 'animate-pulse',
            false: '',
        },
    },
    defaultVariants: {
        color: 'default',
        animated: false,
    },
});

export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof progressVariants>, VariantProps<typeof progressIndicatorVariants> {
    value?: number;
    max?: number;
    showValue?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ className, variant, size, color, animated, value = 0, max = 100, showValue, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className='relative w-full'>
            <div ref={ref} className={cn(progressVariants({ variant, size, className }))} role='progressbar' aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} {...props}>
                <div className={cn(progressIndicatorVariants({ color, animated }))} style={{ width: `${percentage}%` }} />
            </div>
            {showValue && <span className='text-muted-foreground absolute -top-5 right-0 text-xs font-medium'>{Math.round(percentage)}%</span>}
        </div>
    );
});
Progress.displayName = 'Progress';

export { Progress, progressIndicatorVariants, progressVariants };
