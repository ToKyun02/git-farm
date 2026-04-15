import { Skeleton, SkeletonAvatar, SkeletonCard, SkeletonText } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
    title: 'Design System / Base / Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'primary', 'game'] },
        shape: { control: 'select', options: ['default', 'circle', 'square', 'pill'] },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: { className: 'h-4 w-48' },
};

export const Shapes: Story = {
    render: () => (
        <div className='flex items-center gap-4'>
            <Skeleton className='h-12 w-12' shape='circle' />
            <Skeleton className='h-12 w-12' shape='default' />
            <Skeleton className='h-12 w-32' shape='pill' />
            <Skeleton className='h-12 w-12' shape='square' />
        </div>
    ),
};

export const TextLines: Story = {
    render: () => (
        <div className='w-72'>
            <SkeletonText lines={4} />
        </div>
    ),
};

export const CardLoading: Story = {
    render: () => (
        <div className='border-border w-80 rounded-2xl border-2'>
            <SkeletonCard />
        </div>
    ),
};

export const GameLoading: Story = {
    render: () => (
        <div className='border-border bg-card/95 w-80 space-y-3 rounded-2xl border-2 p-4'>
            <div className='flex items-center gap-3'>
                <SkeletonAvatar size='lg' />
                <div className='flex-1 space-y-2'>
                    <Skeleton className='h-4 w-28' />
                    <Skeleton className='h-3 w-20' variant='primary' />
                </div>
                <Skeleton className='h-6 w-12' shape='pill' />
            </div>
            <Skeleton className='h-3 w-full' variant='game' />
            <div className='grid grid-cols-3 gap-2'>
                <Skeleton className='h-16 rounded-xl' />
                <Skeleton className='h-16 rounded-xl' />
                <Skeleton className='h-16 rounded-xl' />
            </div>
        </div>
    ),
};
