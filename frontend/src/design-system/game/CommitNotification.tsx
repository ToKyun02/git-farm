import { cva, type VariantProps } from 'class-variance-authority';
import { GitCommit, Minus, Plus } from 'lucide-react';
import { forwardRef, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const commitNotificationVariants = cva(['flex items-start gap-3 p-4', 'bg-card/95 backdrop-blur-sm', 'border-2 border-border rounded-2xl', 'shadow-lg transition-all duration-300'], {
    variants: {
        status: {
            new: 'border-l-4 border-l-success animate-[slideIn_0.3s_ease-out]',
            processed: 'opacity-80',
            error: 'border-l-4 border-l-destructive',
        },
        size: {
            sm: 'p-3 rounded-xl',
            md: 'p-4 rounded-2xl',
            lg: 'p-5 rounded-2xl',
        },
    },
    defaultVariants: {
        status: 'new',
        size: 'md',
    },
});

export interface CommitNotificationProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof commitNotificationVariants> {
    commitHash?: string;
    message: string;
    author?: string;
    timestamp?: string;
    additions?: number;
    deletions?: number;
    reward?: number;
    repository?: string;
}

export const CommitNotification = forwardRef<HTMLDivElement, CommitNotificationProps>(
    ({ className, status, size, commitHash, message, author, timestamp, additions = 0, deletions = 0, reward, repository, ...props }, ref) => {
        return (
            <div ref={ref} className={twMerge(commitNotificationVariants({ status, size }), className)} {...props}>
                <div className='bg-success/20 flex-shrink-0 rounded-xl p-2'>
                    <GitCommit className='text-success h-5 w-5' />
                </div>

                <div className='min-w-0 flex-1'>
                    <div className='mb-1 flex items-center gap-2'>
                        {commitHash && <code className='bg-muted rounded px-1.5 py-0.5 font-mono text-xs'>{commitHash.slice(0, 7)}</code>}
                        {repository && <span className='text-muted-foreground truncate text-xs'>{repository}</span>}
                    </div>

                    <p className='text-foreground mb-2 truncate text-sm font-medium'>{message}</p>

                    <div className='text-muted-foreground flex items-center gap-3 text-xs'>
                        {author && <span>{author}</span>}
                        {timestamp && <span>{timestamp}</span>}

                        <div className='ml-auto flex items-center gap-2'>
                            {additions > 0 && (
                                <span className='text-success flex items-center gap-0.5'>
                                    <Plus className='h-3 w-3' />
                                    {additions}
                                </span>
                            )}
                            {deletions > 0 && (
                                <span className='text-destructive flex items-center gap-0.5'>
                                    <Minus className='h-3 w-3' />
                                    {deletions}
                                </span>
                            )}
                        </div>
                    </div>

                    {reward && (
                        <div className='border-border mt-2 border-t pt-2'>
                            <span className='text-gold inline-flex items-center gap-1 text-sm font-semibold'>
                                <span className='text-lg'>+{reward}</span>
                                <span className='text-xs'>Gold</span>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        );
    },
);

CommitNotification.displayName = 'CommitNotification';

export { commitNotificationVariants };
