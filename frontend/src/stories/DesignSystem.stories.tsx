import {
    Avatar,
    Badge,
    BuildingCard,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CommitNotification,
    GameButton,
    GamePanel,
    IconButton,
    Progress,
    ResourceBadge,
} from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Bell, Coins, GitCommit, Star, Zap } from 'lucide-react';

const meta: Meta = {
    title: 'Design System / Overview',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const ColorTokens: Story = {
    render: () => (
        <div className='space-y-6'>
            <h2 className='text-xl font-bold'>Color Tokens</h2>
            <div className='grid grid-cols-4 gap-3'>
                {[
                    { name: 'Primary (Coral)', bg: 'bg-primary', fg: 'text-primary-foreground' },
                    { name: 'Secondary (Lavender)', bg: 'bg-secondary', fg: 'text-secondary-foreground' },
                    { name: 'Accent (Sky Blue)', bg: 'bg-accent', fg: 'text-accent-foreground' },
                    { name: 'Gold', bg: 'bg-gold', fg: 'text-gold-foreground' },
                    { name: 'Success (Mint)', bg: 'bg-success', fg: 'text-success-foreground' },
                    { name: 'Destructive', bg: 'bg-destructive', fg: 'text-destructive-foreground' },
                    { name: 'Muted', bg: 'bg-muted', fg: 'text-muted-foreground' },
                    { name: 'Background', bg: 'bg-background border border-border', fg: 'text-foreground' },
                ].map(({ name, bg, fg }) => (
                    <div key={name} className={`rounded-xl p-4 ${bg}`}>
                        <p className={`text-xs font-semibold ${fg}`}>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    ),
};

export const FullGameHUD: Story = {
    render: () => (
        <div className='bg-background relative min-h-[500px] space-y-4 overflow-hidden rounded-2xl p-4'>
            {/* Top HUD */}
            <div className='flex items-center justify-between'>
                <GamePanel variant='glass' size='sm' className='flex items-center gap-2'>
                    <ResourceBadge resource='gold' value={1250} size='sm' icon={<Coins className='h-3 w-3' />} />
                    <div className='bg-border h-4 w-px' />
                    <ResourceBadge resource='commits' value={42} size='sm' icon={<GitCommit className='h-3 w-3' />} />
                    <div className='bg-border h-4 w-px' />
                    <ResourceBadge resource='energy' value={85} size='sm' icon={<Zap className='h-3 w-3' />} label='%' />
                </GamePanel>
                <div className='flex items-center gap-2'>
                    <Badge variant='game-level'>Lv.12</Badge>
                    <IconButton label='알림' variant='game' size='sm' rounded='full'>
                        <Bell />
                    </IconButton>
                    <Avatar alt='Dev Farmer' size='sm' variant='game' status='online' />
                </div>
            </div>

            {/* Content Area */}
            <div className='grid grid-cols-3 gap-4'>
                {/* Commit Feed */}
                <div className='col-span-2 space-y-2'>
                    <p className='mb-2 text-sm font-bold'>최근 커밋</p>
                    <CommitNotification
                        status='new'
                        commitHash='a1b2c3d'
                        message='feat: 게임 HUD 컴포넌트 완성'
                        author='git-farmer'
                        timestamp='방금 전'
                        additions={89}
                        deletions={12}
                        reward={250}
                        repository='git-farm'
                    />
                    <CommitNotification
                        status='processed'
                        commitHash='e4f5a6b'
                        message='fix: 리소스 배지 애니메이션 수정'
                        author='git-farmer'
                        timestamp='15분 전'
                        additions={5}
                        deletions={3}
                        repository='git-farm'
                    />
                </div>

                {/* Side Panel */}
                <div className='space-y-3'>
                    <Card variant='game-primary' padding='sm'>
                        <CardHeader>
                            <CardTitle className='text-sm'>오늘의 목표</CardTitle>
                            <CardDescription>커밋 5개 달성</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-2 pt-3'>
                            <Progress value={60} size='lg' variant='game' color='game-xp' />
                            <p className='text-muted-foreground text-xs'>3 / 5 완료</p>
                        </CardContent>
                    </Card>

                    <GamePanel variant='gold' size='sm'>
                        <div className='mb-2 flex items-center gap-2'>
                            <Star className='text-gold h-4 w-4' />
                            <span className='text-sm font-bold'>보상 대기 중</span>
                        </div>
                        <GameButton variant='gold' size='sm' className='w-full'>
                            <Coins className='h-3 w-3' /> 받기
                        </GameButton>
                    </GamePanel>
                </div>
            </div>

            {/* Building Shop Preview */}
            <div>
                <p className='mb-2 text-sm font-bold'>건물 상점</p>
                <div className='flex gap-3 overflow-x-auto pb-2'>
                    {[
                        { name: '사무실', emoji: '🏢', cost: 1500, status: 'owned' as const },
                        { name: '카페', emoji: '☕', cost: 800, status: 'available' as const },
                        { name: '서버실', emoji: '🖥️', cost: 2000, status: 'available' as const },
                        { name: '연구소', emoji: '🔬', cost: 5000, status: 'locked' as const },
                    ].map((b) => (
                        <BuildingCard key={b.name} name={b.name} cost={b.cost} status={b.status} size='sm' preview={<span className='text-3xl'>{b.emoji}</span>} className='min-w-[120px]' />
                    ))}
                </div>
            </div>
        </div>
    ),
};
