import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { GitCommit } from 'lucide-react';

const meta: Meta<typeof Card> = {
    title: 'Design System / Base / Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'elevated', 'outline', 'filled', 'ghost', 'interactive', 'game', 'game-elevated', 'game-gold', 'game-primary', 'game-success'],
        },
        padding: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'default', 'lg', 'xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: (args) => (
        <Card {...args} className='w-80'>
            <CardHeader>
                <CardTitle>내 개발 농장</CardTitle>
                <CardDescription>오늘도 열심히 커밋했어요!</CardDescription>
            </CardHeader>
            <CardContent className='pt-4'>
                <p className='text-muted-foreground text-sm'>총 커밋 수: 42개</p>
            </CardContent>
            <CardFooter>
                <Button variant='default' size='sm'>
                    자세히 보기
                </Button>
            </CardFooter>
        </Card>
    ),
    args: { variant: 'default' },
};

export const AllVariants: Story = {
    render: () => (
        <div className='grid grid-cols-2 gap-4'>
            {(['default', 'elevated', 'outline', 'filled', 'game', 'game-elevated', 'game-gold', 'game-primary', 'game-success'] as const).map((v) => (
                <Card key={v} variant={v} className='p-4'>
                    <CardTitle className='mb-1 text-sm'>{v}</CardTitle>
                    <CardDescription>카드 variant 예시</CardDescription>
                </Card>
            ))}
        </div>
    ),
};

export const GameCard: Story = {
    render: () => (
        <Card variant='game-elevated' className='w-72'>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <CardTitle>커밋 스트릭</CardTitle>
                    <Badge variant='game-level'>Lv.7</Badge>
                </div>
                <CardDescription>7일 연속 커밋 달성!</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2 pt-4'>
                <div className='flex items-center gap-2 text-sm'>
                    <GitCommit className='text-success h-4 w-4' />
                    <span>오늘 3개 커밋</span>
                </div>
                <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                    <span>+250 Gold 획득</span>
                </div>
            </CardContent>
        </Card>
    ),
};

export const GoldCard: Story = {
    render: () => (
        <Card variant='game-gold' className='w-72 p-5'>
            <div className='mb-3 flex items-center justify-between'>
                <CardTitle>황금 농장</CardTitle>
                <Badge variant='gold'>희귀</Badge>
            </div>
            <CardDescription>특별한 골드 보상이 기다립니다</CardDescription>
        </Card>
    ),
};
