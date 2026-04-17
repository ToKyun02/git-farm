import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const gamePanelVariants = cva(['backdrop-blur-sm border-2 transition-all duration-200'], {
    variants: {
        variant: {
            default: ['bg-card/95 border-border', 'shadow-lg'],
            elevated: ['bg-card border-border dark:border-border/80', 'shadow-[var(--shadow-game)]'],
            accent: ['bg-accent/30 border-accent dark:bg-accent/20'],
            gold: ['bg-gold/10 border-gold/50 dark:bg-gold/15 dark:border-gold/60', 'shadow-lg'],
            glass: ['bg-background/60 border-border/50 dark:bg-background/40 dark:border-border/30', 'backdrop-blur-md'],
            solid: ['bg-card border-border', 'shadow-md'],
        },
        size: {
            sm: 'p-3 rounded-lg',
            md: 'p-4 rounded-xl',
            lg: 'p-6 rounded-2xl',
            xl: 'p-8 rounded-3xl',
        },
        interactive: {
            true: 'cursor-pointer hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]',
            false: '',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
        interactive: false,
    },
});

export interface GamePanelProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof gamePanelVariants> {}

export const GamePanel = forwardRef<HTMLDivElement, GamePanelProps>(({ className, variant, size, interactive, ...props }, ref) => {
    return <div ref={ref} className={twMerge(gamePanelVariants({ variant, size, interactive }), className)} {...props} />;
});

GamePanel.displayName = 'GamePanel';

export { gamePanelVariants };
