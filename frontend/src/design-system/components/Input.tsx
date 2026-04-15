import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const inputVariants = cva(
    [
        'flex w-full rounded-lg',
        'bg-input text-foreground',
        'border-2 border-border',
        'px-3 py-2 text-sm',
        'transition-all duration-200',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    {
        variants: {
            variant: {
                default: ['bg-input', 'hover:border-muted-foreground/30', 'focus:border-primary'],
                filled: ['bg-muted', 'border-transparent', 'hover:bg-muted/80', 'focus:bg-input focus:border-primary'],
                ghost: ['bg-transparent', 'border-transparent', 'hover:bg-muted/50', 'focus:bg-input focus:border-primary'],
                game: [
                    'bg-card',
                    'border-2 border-border',
                    'shadow-[inset_0_2px_4px_0] shadow-foreground/5',
                    'hover:border-primary/50',
                    'focus:border-primary focus:shadow-[inset_0_2px_4px_0,0_0_0_3px] focus:shadow-primary/20',
                ],
                error: ['bg-input', 'border-destructive', 'focus:border-destructive focus:ring-destructive/30'],
            },
            inputSize: {
                default: 'h-10',
                sm: 'h-8 text-xs px-2 rounded-md',
                lg: 'h-12 text-base px-4',
                xl: 'h-14 text-lg px-5 rounded-xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            inputSize: 'default',
        },
    },
);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, variant, inputSize, leftIcon, rightIcon, ...props }, ref) => {
    if (leftIcon ?? rightIcon) {
        return (
            <div className='relative flex w-full items-center'>
                {leftIcon && <div className='text-muted-foreground absolute left-3 [&_svg]:size-4'>{leftIcon}</div>}
                <input type={type} className={cn(inputVariants({ variant, inputSize, className }), leftIcon && 'pl-10', rightIcon && 'pr-10')} ref={ref} {...props} />
                {rightIcon && <div className='text-muted-foreground absolute right-3 [&_svg]:size-4'>{rightIcon}</div>}
            </div>
        );
    }

    return <input type={type} className={cn(inputVariants({ variant, inputSize, className }))} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input, inputVariants };
