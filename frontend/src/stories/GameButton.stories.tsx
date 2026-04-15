import { GameButton } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Coins, GitCommit, Star, Zap } from 'lucide-react';

const meta: Meta<typeof GameButton> = {
    title: 'Design System / Game / GameButton',
    component: GameButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'gold', 'success', 'ghost', 'outline'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
        },
        rounded: { control: 'select', options: ['default', 'full'] },
        isLoading: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof GameButton>;

export const Default: Story = {
    args: { children: '커밋하기', variant: 'primary', size: 'md' },
};

export const AllVariants: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3 p-4'>
            <GameButton variant='primary'>
                <GitCommit className='h-4 w-4' /> Primary
            </GameButton>
            <GameButton variant='secondary'>Secondary</GameButton>
            <GameButton variant='gold'>
                <Coins className='h-4 w-4' /> Gold (Glow!)
            </GameButton>
            <GameButton variant='success'>
                <Zap className='h-4 w-4' /> Success
            </GameButton>
            <GameButton variant='ghost'>Ghost</GameButton>
            <GameButton variant='outline'>Outline</GameButton>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className='flex flex-wrap items-center gap-3 p-4'>
            <GameButton size='sm'>Small</GameButton>
            <GameButton size='md'>Medium</GameButton>
            <GameButton size='lg'>Large</GameButton>
            <GameButton size='xl'>XLarge</GameButton>
        </div>
    ),
};

export const GoldGlow: Story = {
    render: () => (
        <div className='bg-card/50 flex items-center justify-center rounded-2xl p-10'>
            <GameButton variant='gold' size='lg'>
                <Coins className='h-5 w-5' /> 1,250 Gold 받기
            </GameButton>
        </div>
    ),
};

export const Loading: Story = {
    args: { children: '처리 중...', isLoading: true, variant: 'primary', size: 'lg' },
};

export const Rounded: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3 p-4'>
            <GameButton variant='primary' rounded='full'>
                <Star className='h-4 w-4' /> 풀 라운드
            </GameButton>
            <GameButton variant='gold' size='lg' rounded='full'>
                <Coins className='h-4 w-4' /> 골드 받기
            </GameButton>
        </div>
    ),
};
