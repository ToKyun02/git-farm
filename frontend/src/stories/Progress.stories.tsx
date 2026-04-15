import { Progress } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
    title: 'Design System / Base / Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'game'] },
        size: { control: 'select', options: ['default', 'sm', 'lg', 'xl'] },
        color: {
            control: 'select',
            options: ['default', 'success', 'gold', 'accent', 'destructive', 'gradient', 'game-xp'],
        },
        value: { control: { type: 'range', min: 0, max: 100 } },
        showValue: { control: 'boolean' },
        animated: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: { value: 65, color: 'default' },
};

export const XPBar: Story = {
    render: () => (
        <div className='w-80 space-y-2'>
            <div className='flex justify-between text-sm'>
                <span className='font-medium'>경험치</span>
                <span className='text-muted-foreground'>820 / 1000 XP</span>
            </div>
            <Progress value={82} size='xl' variant='game' color='game-xp' />
        </div>
    ),
};

export const AllColors: Story = {
    render: () => (
        <div className='w-80 space-y-4'>
            {(['default', 'success', 'gold', 'accent', 'destructive', 'gradient', 'game-xp'] as const).map((color) => (
                <div key={color} className='space-y-1'>
                    <span className='text-muted-foreground text-xs'>{color}</span>
                    <Progress value={70} color={color} size='lg' />
                </div>
            ))}
        </div>
    ),
};

export const GameStats: Story = {
    render: () => (
        <div className='border-border bg-card/95 w-80 space-y-5 rounded-2xl border-2 p-4'>
            <div className='space-y-1.5'>
                <div className='flex justify-between text-sm'>
                    <span className='font-semibold'>HP</span>
                    <span className='text-muted-foreground'>85 / 100</span>
                </div>
                <Progress value={85} size='lg' variant='game' color='success' />
            </div>
            <div className='space-y-1.5'>
                <div className='flex justify-between text-sm'>
                    <span className='font-semibold'>XP</span>
                    <span className='text-muted-foreground'>620 / 1000</span>
                </div>
                <Progress value={62} size='lg' variant='game' color='game-xp' />
            </div>
            <div className='space-y-1.5'>
                <div className='flex justify-between text-sm'>
                    <span className='font-semibold'>Gold</span>
                    <span className='text-muted-foreground'>1,250 / 5,000</span>
                </div>
                <Progress value={25} size='lg' variant='game' color='gold' showValue />
            </div>
        </div>
    ),
};
