import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const gameButtonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2',
        'font-semibold transition-all duration-200',
        'active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    ],
    {
        variants: {
            variant: {
                primary: ['bg-primary text-primary-foreground', 'hover:brightness-110', 'shadow-[var(--shadow-game)] hover:shadow-[var(--shadow-game-hover)]'],
                secondary: ['bg-secondary text-secondary-foreground', 'hover:bg-secondary/80', 'border-2 border-secondary-foreground/20'],
                gold: [
                    'bg-gold text-gold-foreground dark:text-foreground',
                    'hover:brightness-110',
                    'shadow-[var(--shadow-game)] hover:shadow-[var(--shadow-game-hover)]',
                    'animate-[pulse-glow_2s_ease-in-out_infinite]',
                ],
                success: ['bg-success text-success-foreground', 'hover:brightness-110', 'shadow-[var(--shadow-game)]'],
                ghost: ['bg-transparent text-foreground', 'hover:bg-muted'],
                outline: ['bg-transparent text-foreground', 'border-2 border-border', 'hover:bg-muted hover:border-foreground/30'],
            },
            size: {
                sm: 'h-8 px-3 text-xs rounded-lg',
                md: 'h-10 px-4 text-sm rounded-xl',
                lg: 'h-12 px-6 text-base rounded-xl',
                xl: 'h-14 px-8 text-lg rounded-2xl',
                icon: 'h-10 w-10 rounded-xl',
                'icon-sm': 'h-8 w-8 rounded-lg',
                'icon-lg': 'h-12 w-12 rounded-xl',
            },
            rounded: {
                default: '',
                full: '!rounded-full',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            rounded: 'default',
        },
    },
);

export interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof gameButtonVariants> {
    isLoading?: boolean;
}

export const GameButton = forwardRef<HTMLButtonElement, GameButtonProps>(({ className, variant, size, rounded, isLoading, children, disabled, ...props }, ref) => {
    return (
        <button ref={ref} className={twMerge(gameButtonVariants({ variant, size, rounded }), className)} disabled={disabled ?? isLoading} {...props}>
            {isLoading ? <span className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' /> : null}
            {children}
        </button>
    );
});

GameButton.displayName = 'GameButton';

export { gameButtonVariants };
