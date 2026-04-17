import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const resourceBadgeVariants = cva(['inline-flex items-center gap-1.5', 'font-mono font-semibold', 'border-2 transition-all duration-200'], {
    variants: {
        resource: {
            gold: ['bg-gold/20 text-gold-foreground border-gold/40'],
            commits: ['bg-success/20 text-success dark:text-success border-success/40'],
            stars: ['bg-accent/20 text-accent-foreground border-accent/40'],
            energy: ['bg-primary/20 text-primary border-primary/40'],
        },
        size: {
            sm: 'px-2 py-0.5 text-xs rounded-md',
            md: 'px-3 py-1 text-sm rounded-lg',
            lg: 'px-4 py-1.5 text-base rounded-xl',
        },
        animated: {
            true: 'animate-[bounce-gentle_2s_ease-in-out_infinite]',
            false: '',
        },
    },
    defaultVariants: {
        resource: 'gold',
        size: 'md',
        animated: false,
    },
});

export interface ResourceBadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'resource'>, VariantProps<typeof resourceBadgeVariants> {
    icon?: React.ReactNode;
    value: number | string;
    label?: string;
}

export const ResourceBadge = forwardRef<HTMLDivElement, ResourceBadgeProps>(({ className, resource, size, animated, icon, value, label, ...props }, ref) => {
    const formatValue = (val: number | string) => {
        if (typeof val === 'number') {
            if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
            if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
            return val.toLocaleString();
        }
        return val;
    };

    return (
        <div ref={ref} className={twMerge(resourceBadgeVariants({ resource, size, animated }), className)} {...props}>
            {icon}
            <span>{formatValue(value)}</span>
            {label && <span className='text-muted-foreground font-normal'>{label}</span>}
        </div>
    );
});

ResourceBadge.displayName = 'ResourceBadge';

export { resourceBadgeVariants };
