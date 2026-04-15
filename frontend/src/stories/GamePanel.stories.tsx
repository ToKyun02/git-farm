import { Badge, GameButton, GamePanel } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Coins, GitCommit, Star } from 'lucide-react';

const meta: Meta<typeof GamePanel> = {
    title: 'Design System / Game / GamePanel',
    component: GamePanel,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'elevated', 'accent', 'gold', 'glass', 'solid'],
        },
        size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
        interactive: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof GamePanel>;

export const Default: Story = {
    render: (args) => (
        <GamePanel {...args} className='w-64'>
            <p className='text-sm font-medium'>기본 게임 패널</p>
            <p className='text-muted-foreground mt-1 text-xs'>카드, 위젯, 팝업에 사용</p>
        </GamePanel>
    ),
    args: { variant: 'default', size: 'md' },
};

export const AllVariants: Story = {
    render: () => (
        <div className='grid grid-cols-2 gap-4'>
            {(['default', 'elevated', 'accent', 'gold', 'glass', 'solid'] as const).map((v) => (
                <GamePanel key={v} variant={v} size='md' className='min-w-40'>
                    <p className='text-sm font-semibold'>{v}</p>
                    <p className='text-muted-foreground mt-1 text-xs'>패널 예시</p>
                </GamePanel>
            ))}
        </div>
    ),
};

export const HUDPanel: Story = {
    render: () => (
        <GamePanel variant='glass' size='md' className='w-72'>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-sm font-bold'>내 자원</span>
                <Badge variant='game-level'>Lv.12</Badge>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <div className='flex flex-col items-center gap-1'>
                    <Coins className='text-gold h-5 w-5' />
                    <span className='font-mono text-xs font-bold'>1,250</span>
                    <span className='text-muted-foreground text-[10px]'>Gold</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <GitCommit className='text-success h-5 w-5' />
                    <span className='font-mono text-xs font-bold'>42</span>
                    <span className='text-muted-foreground text-[10px]'>Commits</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <Star className='text-accent-foreground h-5 w-5' />
                    <span className='font-mono text-xs font-bold'>128</span>
                    <span className='text-muted-foreground text-[10px]'>Stars</span>
                </div>
            </div>
        </GamePanel>
    ),
};

export const Interactive: Story = {
    render: () => (
        <div className='flex gap-4'>
            {['일반', '강화', '전설'].map((name) => (
                <GamePanel key={name} variant='default' size='md' interactive className='w-32 text-center'>
                    <p className='text-sm font-semibold'>{name}</p>
                    <p className='text-muted-foreground text-xs'>클릭 가능</p>
                </GamePanel>
            ))}
        </div>
    ),
};

export const GoldPanel: Story = {
    render: () => (
        <GamePanel variant='gold' size='lg' className='w-72'>
            <div className='mb-3 flex items-center gap-2'>
                <Coins className='text-gold h-6 w-6' />
                <span className='text-lg font-bold'>황금 보상</span>
            </div>
            <p className='text-muted-foreground mb-4 text-sm'>오늘의 커밋 목표를 달성하셨습니다! 특별 보상을 받아가세요.</p>
            <GameButton variant='gold' size='lg' className='w-full'>
                <Coins className='h-4 w-4' /> 2,500 Gold 받기
            </GameButton>
        </GamePanel>
    ),
};
