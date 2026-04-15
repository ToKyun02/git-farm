import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Lock } from 'lucide-react';
import { forwardRef, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const buildingCardVariants = cva(['relative overflow-hidden', 'border-2 transition-all duration-300', 'cursor-pointer'], {
    variants: {
        status: {
            available: ['bg-card border-border', 'hover:border-primary hover:shadow-lg hover:scale-105'],
            owned: ['bg-success/10 border-success/50', 'hover:shadow-lg'],
            locked: ['bg-muted/50 border-muted', 'opacity-60 cursor-not-allowed'],
            selected: ['bg-primary/10 border-primary', 'ring-2 ring-primary ring-offset-2 ring-offset-background', 'shadow-xl scale-105'],
        },
        size: {
            sm: 'p-3 rounded-xl',
            md: 'p-4 rounded-2xl',
            lg: 'p-5 rounded-2xl',
        },
    },
    defaultVariants: {
        status: 'available',
        size: 'md',
    },
});

export interface BuildingCardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof buildingCardVariants> {
    name: string;
    description?: string;
    cost?: number;
    level?: number;
    maxLevel?: number;
    icon?: React.ReactNode;
    preview?: React.ReactNode;
    bonus?: string;
}

export const BuildingCard = forwardRef<HTMLDivElement, BuildingCardProps>(({ className, status, size, name, description, cost, level, maxLevel, icon, preview, bonus, ...props }, ref) => {
    return (
        <div ref={ref} className={twMerge(buildingCardVariants({ status, size }), className)} {...props}>
            {status === 'locked' && (
                <div className='bg-muted absolute top-2 right-2 rounded-lg p-1.5'>
                    <Lock className='text-muted-foreground h-4 w-4' />
                </div>
            )}
            {status === 'owned' && (
                <div className='bg-success absolute top-2 right-2 rounded-lg p-1.5'>
                    <Check className='text-success-foreground h-4 w-4' />
                </div>
            )}

            <div className='bg-muted/50 mb-3 flex aspect-square items-center justify-center rounded-xl'>{preview ?? icon ?? <div className='bg-muted h-12 w-12 rounded-lg' />}</div>

            <div className='space-y-1'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-foreground truncate font-semibold'>{name}</h3>
                    {level !== undefined && maxLevel !== undefined && (
                        <span className='text-muted-foreground font-mono text-xs'>
                            Lv.{level}/{maxLevel}
                        </span>
                    )}
                </div>

                {description && <p className='text-muted-foreground line-clamp-2 text-xs'>{description}</p>}

                {bonus && <p className='text-success text-xs font-medium'>{bonus}</p>}

                {cost !== undefined && status !== 'owned' && (
                    <div className='flex items-center justify-between pt-2'>
                        <span className='text-gold text-sm font-semibold'>{cost.toLocaleString()} Gold</span>
                    </div>
                )}
            </div>
        </div>
    );
});

BuildingCard.displayName = 'BuildingCard';

export { buildingCardVariants };
