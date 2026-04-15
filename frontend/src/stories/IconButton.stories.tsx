import { IconButton } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Bell, Coins, GitCommit, Settings, Star } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
    title: 'Design System / Base / IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'game', 'game-primary', 'game-gold'],
        },
        size: { control: 'select', options: ['sm', 'default', 'lg', 'xl'] },
        rounded: { control: 'select', options: ['default', 'full'] },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    args: {
        label: '설정',
        variant: 'default',
        children: <Settings />,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <IconButton label='기본' variant='default'>
                <Bell />
            </IconButton>
            <IconButton label='보조' variant='secondary'>
                <Bell />
            </IconButton>
            <IconButton label='외곽선' variant='outline'>
                <Bell />
            </IconButton>
            <IconButton label='고스트' variant='ghost'>
                <Bell />
            </IconButton>
            <IconButton label='게임' variant='game'>
                <Settings />
            </IconButton>
            <IconButton label='게임-주요' variant='game-primary'>
                <GitCommit />
            </IconButton>
            <IconButton label='골드' variant='game-gold'>
                <Coins />
            </IconButton>
        </div>
    ),
};

export const Rounded: Story = {
    render: () => (
        <div className='flex items-center gap-3'>
            <IconButton label='기본 라운드' variant='game' rounded='default'>
                <Star />
            </IconButton>
            <IconButton label='원형' variant='game' rounded='full'>
                <Star />
            </IconButton>
            <IconButton label='골드 원형' variant='game-gold' rounded='full' size='lg'>
                <Coins />
            </IconButton>
        </div>
    ),
};
