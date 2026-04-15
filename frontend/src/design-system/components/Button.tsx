import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2',
        'whitespace-nowrap rounded-lg text-sm font-semibold',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'active:scale-[0.98]',
        '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    ],
    {
        variants: {
            variant: {
                default: ['bg-primary text-primary-foreground', 'shadow-md hover:shadow-lg', 'hover:bg-primary/90', 'border-2 border-primary/20'],
                secondary: ['bg-secondary text-secondary-foreground', 'shadow-sm hover:shadow-md', 'hover:bg-secondary/80', 'border-2 border-secondary/30'],
                destructive: ['bg-destructive text-destructive-foreground', 'shadow-md hover:shadow-lg', 'hover:bg-destructive/90', 'border-2 border-destructive/20'],
                outline: ['bg-background text-foreground', 'border-2 border-input', 'hover:bg-accent hover:text-accent-foreground', 'shadow-sm hover:shadow-md'],
                ghost: ['text-foreground', 'hover:bg-accent hover:text-accent-foreground'],
                link: ['text-primary underline-offset-4', 'hover:underline'],
                gold: ['bg-gold text-gold-foreground', 'shadow-md hover:shadow-lg', 'hover:bg-gold/90', 'border-2 border-gold/30'],
                success: ['bg-success text-success-foreground', 'shadow-md hover:shadow-lg', 'hover:bg-success/90', 'border-2 border-success/20'],
                game: [
                    'bg-gradient-to-b from-primary to-primary/80',
                    'text-primary-foreground',
                    'shadow-[0_4px_0_0] shadow-primary/50',
                    'hover:shadow-[0_2px_0_0] hover:translate-y-[2px]',
                    'active:shadow-none active:translate-y-[4px]',
                    'border-2 border-primary-foreground/10',
                ],
                'game-gold': [
                    'bg-gradient-to-b from-gold to-gold/80',
                    'text-gold-foreground',
                    'shadow-[0_4px_0_0] shadow-gold/50',
                    'hover:shadow-[0_2px_0_0] hover:translate-y-[2px]',
                    'active:shadow-none active:translate-y-[4px]',
                    'border-2 border-gold-foreground/10',
                ],
                'game-success': [
                    'bg-gradient-to-b from-success to-success/80',
                    'text-success-foreground',
                    'shadow-[0_4px_0_0] shadow-success/50',
                    'hover:shadow-[0_2px_0_0] hover:translate-y-[2px]',
                    'active:shadow-none active:translate-y-[4px]',
                    'border-2 border-success-foreground/10',
                ],
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-8 px-3 text-xs rounded-md',
                lg: 'h-12 px-6 text-base rounded-xl',
                xl: 'h-14 px-8 text-lg rounded-xl',
                icon: 'h-10 w-10',
                'icon-sm': 'h-8 w-8',
                'icon-lg': 'h-12 w-12',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
        <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled={disabled || loading} {...props}>
            {loading && (
                <svg className='mr-2 -ml-1 h-4 w-4 animate-spin' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                </svg>
            )}
            {children}
        </button>
    );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
