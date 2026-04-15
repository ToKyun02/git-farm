import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const avatarVariants = cva(['relative flex shrink-0 overflow-hidden rounded-full', 'bg-muted'], {
    variants: {
        size: {
            xs: 'h-6 w-6 text-[10px]',
            sm: 'h-8 w-8 text-xs',
            default: 'h-10 w-10 text-sm',
            lg: 'h-12 w-12 text-base',
            xl: 'h-16 w-16 text-lg',
            '2xl': 'h-20 w-20 text-xl',
        },
        variant: {
            default: 'bg-muted',
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            game: ['bg-gradient-to-br from-primary/30 to-accent/30', 'border-2 border-border', 'shadow-md'],
            'game-gold': ['bg-gradient-to-br from-gold/30 to-gold/10', 'border-2 border-gold/50', 'shadow-md shadow-gold/20'],
        },
        status: {
            none: '',
            online: 'ring-2 ring-success ring-offset-2 ring-offset-background',
            offline: 'ring-2 ring-muted-foreground/30 ring-offset-2 ring-offset-background',
            busy: 'ring-2 ring-destructive ring-offset-2 ring-offset-background',
            away: 'ring-2 ring-gold ring-offset-2 ring-offset-background',
        },
    },
    defaultVariants: {
        size: 'default',
        variant: 'default',
        status: 'none',
    },
});

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className, size, variant, status, src, alt, fallback, children, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    const initials = React.useMemo(() => {
        if (fallback) return fallback.slice(0, 2).toUpperCase();
        if (alt) {
            return alt
                .split(' ')
                .map((word) => word[0])
                .slice(0, 2)
                .join('')
                .toUpperCase();
        }
        return '?';
    }, [fallback, alt]);

    return (
        <div ref={ref} className={cn(avatarVariants({ size, variant, status, className }))} {...props}>
            {src && !hasError ? (
                <img src={src} alt={alt ?? 'Avatar'} className='aspect-square h-full w-full object-cover' onError={() => setHasError(true)} />
            ) : children ? (
                children
            ) : (
                <div className='text-muted-foreground flex h-full w-full items-center justify-center font-medium'>{initials}</div>
            )}
        </div>
    );
});
Avatar.displayName = 'Avatar';

export { Avatar, avatarVariants };
