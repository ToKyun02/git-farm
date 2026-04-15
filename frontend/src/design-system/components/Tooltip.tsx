import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const tooltipVariants = cva(
    [
        'z-50 overflow-hidden rounded-md px-3 py-1.5',
        'text-xs font-medium',
        'shadow-md',
        'animate-in fade-in-0 zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
    ],
    {
        variants: {
            variant: {
                default: 'bg-foreground text-background',
                primary: 'bg-primary text-primary-foreground',
                game: ['bg-card text-card-foreground', 'border-2 border-border', 'shadow-lg'],
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {
    content: React.ReactNode;
    children: React.ReactNode;
    side?: TooltipSide;
    delayDuration?: number;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, side = 'top', delayDuration = 300, variant, className }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const tooltipRef = React.useRef<HTMLDivElement>(null);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

    const showTooltip = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delayDuration);
    };

    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };

    React.useEffect(() => {
        if (isVisible && triggerRef.current && tooltipRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const offset = 8;

            let top = 0;
            let left = 0;

            switch (side) {
                case 'top':
                    top = triggerRect.top - tooltipRect.height - offset;
                    left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                    break;
                case 'bottom':
                    top = triggerRect.bottom + offset;
                    left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                    break;
                case 'left':
                    top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                    left = triggerRect.left - tooltipRect.width - offset;
                    break;
                case 'right':
                    top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                    left = triggerRect.right + offset;
                    break;
            }

            setPosition({ top, left });
        }
    }, [isVisible, side]);

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={triggerRef} onMouseEnter={showTooltip} onMouseLeave={hideTooltip} onFocus={showTooltip} onBlur={hideTooltip} className='inline-flex'>
                {children}
            </div>
            {isVisible && (
                <div ref={tooltipRef} data-side={side} className={cn(tooltipVariants({ variant, className }), 'fixed')} style={{ top: position.top, left: position.left }} role='tooltip'>
                    {content}
                </div>
            )}
        </>
    );
};

export { Tooltip, tooltipVariants };
