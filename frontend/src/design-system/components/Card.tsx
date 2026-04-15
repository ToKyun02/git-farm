import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const cardVariants = cva(['rounded-xl', 'bg-card text-card-foreground', 'transition-all duration-200'], {
    variants: {
        variant: {
            default: ['border border-border', 'shadow-sm'],
            elevated: ['border border-border', 'shadow-md hover:shadow-lg'],
            outline: ['border-2 border-border', 'bg-transparent'],
            filled: ['bg-muted', 'border-none'],
            ghost: ['bg-transparent', 'border-none'],
            interactive: ['border border-border', 'shadow-sm', 'cursor-pointer', 'hover:shadow-md hover:border-primary/50', 'active:scale-[0.99]'],
            game: ['bg-card/95 backdrop-blur-sm', 'border-2 border-border', 'shadow-lg', 'rounded-2xl'],
            'game-elevated': [
                'bg-card/95 backdrop-blur-sm',
                'border-2 border-border',
                'shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
                'rounded-2xl',
                'hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)]',
                'hover:-translate-y-1',
            ],
            'game-gold': ['bg-gradient-to-br from-gold/20 to-gold/5', 'border-2 border-gold/30', 'shadow-lg shadow-gold/10', 'rounded-2xl'],
            'game-primary': ['bg-gradient-to-br from-primary/20 to-primary/5', 'border-2 border-primary/30', 'shadow-lg shadow-primary/10', 'rounded-2xl'],
            'game-success': ['bg-gradient-to-br from-success/20 to-success/5', 'border-2 border-success/30', 'shadow-lg shadow-success/10', 'rounded-2xl'],
        },
        padding: {
            default: 'p-6',
            none: 'p-0',
            xs: 'p-2',
            sm: 'p-4',
            lg: 'p-8',
            xl: 'p-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        padding: 'default',
    },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, padding, ...props }, ref) => {
    return <div ref={ref} className={cn(cardVariants({ variant, padding, className }))} {...props} />;
});
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-foreground text-lg leading-none font-semibold tracking-tight', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('pt-0', className)} {...props} />);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-4', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cardVariants };
