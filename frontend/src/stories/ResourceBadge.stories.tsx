import { ResourceBadge } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Coins, GitCommit, Star, Zap } from 'lucide-react';

const meta: Meta<typeof ResourceBadge> = {
    title: 'Design System / Game / ResourceBadge',
    component: ResourceBadge,
    tags: ['autodocs'],
    argTypes: {
        resource: {
            control: 'select',
            options: ['gold', 'commits', 'stars', 'energy'],
        },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        animated: { control: 'boolean' },
        value: { control: 'text' },
        label: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ResourceBadge>;

export const Default: Story = {
    args: {
        resource: 'gold',
        value: 1250,
        icon: <Coins className='h-4 w-4' />,
    },
};

export const AllResources: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <ResourceBadge resource='gold' value={1250} icon={<Coins className='h-4 w-4' />} />
            <ResourceBadge resource='commits' value={42} icon={<GitCommit className='h-4 w-4' />} />
            <ResourceBadge resource='stars' value={128} icon={<Star className='h-4 w-4' />} />
            <ResourceBadge resource='energy' value={85} icon={<Zap className='h-4 w-4' />} label='%' />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className='flex flex-wrap items-center gap-3'>
            <ResourceBadge resource='gold' value={1250} size='sm' icon={<Coins className='h-3 w-3' />} />
            <ResourceBadge resource='gold' value={1250} size='md' icon={<Coins className='h-4 w-4' />} />
            <ResourceBadge resource='gold' value={1250} size='lg' icon={<Coins className='h-5 w-5' />} />
        </div>
    ),
};

export const LargeNumbers: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <ResourceBadge resource='gold' value={1250000} icon={<Coins className='h-4 w-4' />} label='Gold' />
            <ResourceBadge resource='commits' value={9800} icon={<GitCommit className='h-4 w-4' />} label='Commits' />
            <ResourceBadge resource='stars' value={4200} icon={<Star className='h-4 w-4' />} label='Stars' />
        </div>
    ),
};

export const Animated: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <ResourceBadge resource='gold' value={2500} animated icon={<Coins className='h-4 w-4' />} label='획득!' />
            <ResourceBadge resource='commits' value={10} animated icon={<GitCommit className='h-4 w-4' />} label='연속!' />
        </div>
    ),
};

export const HUDLayout: Story = {
    render: () => (
        <div className='bg-card/95 border-border flex items-center gap-2 rounded-2xl border-2 px-4 py-2 shadow-lg backdrop-blur-sm'>
            <ResourceBadge resource='gold' value={1250} icon={<Coins className='h-4 w-4' />} />
            <div className='bg-border h-5 w-px' />
            <ResourceBadge resource='commits' value={42} icon={<GitCommit className='h-4 w-4' />} />
            <div className='bg-border h-5 w-px' />
            <ResourceBadge resource='energy' value={85} icon={<Zap className='h-4 w-4' />} label='%' />
        </div>
    ),
};
