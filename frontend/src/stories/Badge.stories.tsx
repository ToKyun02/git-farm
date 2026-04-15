import { Badge } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { GitCommit, Star, Zap } from 'lucide-react';

const meta: Meta<typeof Badge> = {
    title: 'Design System / Base / Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'destructive', 'outline', 'muted', 'gold', 'success', 'accent', 'game-level', 'game-resource', 'game-notification', 'game-commit', 'game-xp'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'xl', 'icon'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: { children: 'Lv.12', variant: 'default' },
};

export const AllVariants: Story = {
    render: () => (
        <div className='flex flex-wrap gap-2'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='destructive'>Destructive</Badge>
            <Badge variant='outline'>Outline</Badge>
            <Badge variant='muted'>Muted</Badge>
            <Badge variant='gold'>Gold</Badge>
            <Badge variant='success'>Success</Badge>
            <Badge variant='accent'>Accent</Badge>
            <Badge variant='game-level'>Lv.42</Badge>
            <Badge variant='game-resource'>💎 1,500</Badge>
            <Badge variant='game-notification'>3</Badge>
            <Badge variant='game-commit'>
                <GitCommit className='h-3 w-3' /> +42 XP
            </Badge>
            <Badge variant='game-xp'>
                <Zap className='h-3 w-3' /> 820 XP
            </Badge>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className='flex flex-wrap items-center gap-2'>
            <Badge size='sm'>Small</Badge>
            <Badge size='default'>Default</Badge>
            <Badge size='lg'>Large</Badge>
            <Badge size='xl'>XLarge</Badge>
        </div>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <div className='flex flex-wrap gap-2'>
            <Badge variant='game-commit'>
                <GitCommit className='h-3 w-3' /> 커밋 완료
            </Badge>
            <Badge variant='gold'>
                <Star className='h-3 w-3' /> 스타 획득
            </Badge>
            <Badge variant='game-xp'>
                <Zap className='h-3 w-3' /> +120 XP
            </Badge>
        </div>
    ),
};
