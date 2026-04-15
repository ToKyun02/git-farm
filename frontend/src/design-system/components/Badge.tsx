import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const badgeVariants = cva(['inline-flex items-center justify-center gap-1', 'rounded-full', 'text-xs font-semibold', 'transition-colors duration-200', '[&_svg]:size-3'], {
    variants: {
        variant: {
            default: ['bg-primary text-primary-foreground', 'border border-primary/20'],
            secondary: ['bg-secondary text-secondary-foreground', 'border border-secondary/30'],
            destructive: ['bg-destructive text-destructive-foreground', 'border border-destructive/20'],
            outline: ['bg-transparent text-foreground', 'border-2 border-border'],
            muted: ['bg-muted text-muted-foreground', 'border border-border'],
            gold: ['bg-gold text-gold-foreground', 'border border-gold/30', 'shadow-sm shadow-gold/20'],
            success: ['bg-success text-success-foreground', 'border border-success/20'],
            accent: ['bg-accent text-accent-foreground', 'border border-accent/30'],
            'game-level': ['bg-gradient-to-r from-primary to-primary/80', 'text-primary-foreground', 'border-2 border-primary-foreground/10', 'shadow-md'],
            'game-resource': ['bg-card', 'text-foreground', 'border-2 border-border', 'shadow-sm'],
            'game-notification': ['bg-destructive', 'text-destructive-foreground', 'border-none', 'animate-pulse'],
            'game-commit': ['bg-success/20', 'text-success', 'border border-success/30'],
            'game-xp': ['bg-accent/20', 'text-accent-foreground', 'border border-accent/30'],
        },
        size: {
            default: 'px-2.5 py-0.5',
            sm: 'px-2 py-px text-[10px]',
            lg: 'px-3 py-1 text-sm',
            xl: 'px-4 py-1.5 text-base',
            icon: 'p-1',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant, size, ...props }, ref) => {
    return <div ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props} />;
});
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
