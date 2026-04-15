import { Button } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Coins, GitCommit, Star } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Design System / Base / Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'gold', 'success', 'game', 'game-gold', 'game-success'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: { children: '커밋하기', variant: 'default' },
};

export const AllVariants: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <Button variant='default'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='gold'>
                <Coins className='h-4 w-4' /> Gold
            </Button>
            <Button variant='success'>
                <GitCommit className='h-4 w-4' /> Success
            </Button>
            <Button variant='game'>Game</Button>
            <Button variant='game-gold'>
                <Star className='h-4 w-4' /> Game Gold
            </Button>
            <Button variant='game-success'>Game Success</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className='flex flex-wrap items-center gap-3'>
            <Button size='sm'>Small</Button>
            <Button size='default'>Default</Button>
            <Button size='lg'>Large</Button>
            <Button size='xl'>XLarge</Button>
        </div>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <Button variant='default'>
                <GitCommit className='h-4 w-4' /> 커밋
            </Button>
            <Button variant='gold'>
                <Coins className='h-4 w-4' /> 1,250 Gold
            </Button>
            <Button variant='game-gold' size='lg'>
                <Star className='h-4 w-4' /> 보상 받기
            </Button>
        </div>
    ),
};

export const Loading: Story = {
    args: { children: '처리 중...', loading: true, variant: 'default' },
};

export const Disabled: Story = {
    render: () => (
        <div className='flex flex-wrap gap-3'>
            <Button disabled>Disabled Primary</Button>
            <Button disabled variant='gold'>
                <Coins className='h-4 w-4' /> Disabled Gold
            </Button>
        </div>
    ),
};
