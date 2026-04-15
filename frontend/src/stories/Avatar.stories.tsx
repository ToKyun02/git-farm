import { Avatar } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
    title: 'Design System / Base / Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl'],
        },
        variant: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'game', 'game-gold'],
        },
        status: {
            control: 'select',
            options: ['none', 'online', 'offline', 'busy', 'away'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        alt: 'Dev Farmer',
        size: 'default',
        variant: 'default',
        status: 'none',
    },
};

export const WithImage: Story = {
    args: {
        src: 'https://github.com/shadcn.png',
        alt: 'shadcn',
        size: 'lg',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className='flex items-end gap-3'>
            {(['xs', 'sm', 'default', 'lg', 'xl', '2xl'] as const).map((size) => (
                <Avatar key={size} alt='Dev Farmer' size={size} />
            ))}
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div className='flex items-center gap-4'>
            <Avatar alt='Default' variant='default' size='lg' />
            <Avatar alt='Primary' variant='primary' size='lg' />
            <Avatar alt='Game' variant='game' size='lg' />
            <Avatar alt='Gold' variant='game-gold' size='lg' />
        </div>
    ),
};

export const StatusIndicators: Story = {
    render: () => (
        <div className='flex items-center gap-4'>
            <div className='flex flex-col items-center gap-1'>
                <Avatar alt='Online' size='lg' status='online' />
                <span className='text-muted-foreground text-xs'>온라인</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <Avatar alt='Offline' size='lg' status='offline' />
                <span className='text-muted-foreground text-xs'>오프라인</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <Avatar alt='Busy' size='lg' status='busy' />
                <span className='text-muted-foreground text-xs'>바쁨</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <Avatar alt='Away' size='lg' status='away' />
                <span className='text-muted-foreground text-xs'>자리비움</span>
            </div>
        </div>
    ),
};
