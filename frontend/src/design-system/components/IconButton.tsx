import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const iconButtonVariants = cva(
    [
        'inline-flex items-center justify-center',
        'rounded-lg',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'active:scale-95',
        '[&_svg]:shrink-0',
    ],
    {
        variants: {
            variant: {
                default: ['bg-primary text-primary-foreground', 'shadow-sm hover:shadow-md', 'hover:bg-primary/90'],
                secondary: ['bg-secondary text-secondary-foreground', 'hover:bg-secondary/80'],
                outline: ['border-2 border-input bg-background', 'hover:bg-accent hover:text-accent-foreground'],
                ghost: ['hover:bg-accent hover:text-accent-foreground'],
                destructive: ['bg-destructive text-destructive-foreground', 'hover:bg-destructive/90'],
                game: ['bg-card text-foreground', 'border-2 border-border', 'shadow-md hover:shadow-lg', 'hover:border-primary/50 hover:bg-primary/10'],
                'game-primary': ['bg-primary/10 text-primary', 'border-2 border-primary/30', 'hover:bg-primary hover:text-primary-foreground'],
                'game-gold': ['bg-gold/10 text-gold-foreground', 'border-2 border-gold/30', 'hover:bg-gold hover:text-gold-foreground'],
            },
            size: {
                default: 'h-10 w-10 [&_svg]:size-5',
                sm: 'h-8 w-8 [&_svg]:size-4',
                lg: 'h-12 w-12 [&_svg]:size-6',
                xl: 'h-14 w-14 [&_svg]:size-7 rounded-xl',
            },
            rounded: {
                default: 'rounded-lg',
                full: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounded: 'default',
        },
    },
);

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    label: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({ className, variant, size, rounded, label, children, ...props }, ref) => {
    return (
        <button ref={ref} className={cn(iconButtonVariants({ variant, size, rounded, className }))} aria-label={label} title={label} {...props}>
            {children}
        </button>
    );
});
IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
