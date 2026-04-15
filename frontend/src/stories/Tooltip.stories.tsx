import { Button, Tooltip } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
    title: 'Design System / Base / Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'primary', 'game'] },
        side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
        delayDuration: { control: { type: 'range', min: 0, max: 1000, step: 100 } },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: (args) => (
        <div className='flex h-24 items-center justify-center'>
            <Tooltip {...args}>
                <Button variant='default'>커밋하기</Button>
            </Tooltip>
        </div>
    ),
    args: { content: '커밋하면 경험치를 얻어요!', variant: 'default', side: 'top' },
};

export const Directions: Story = {
    render: () => (
        <div className='grid h-48 grid-cols-2 place-items-center gap-8'>
            <Tooltip content='위에 표시' side='top'>
                <Button variant='outline' size='sm'>
                    Top
                </Button>
            </Tooltip>
            <Tooltip content='아래에 표시' side='bottom'>
                <Button variant='outline' size='sm'>
                    Bottom
                </Button>
            </Tooltip>
            <Tooltip content='왼쪽에 표시' side='left'>
                <Button variant='outline' size='sm'>
                    Left
                </Button>
            </Tooltip>
            <Tooltip content='오른쪽에 표시' side='right'>
                <Button variant='outline' size='sm'>
                    Right
                </Button>
            </Tooltip>
        </div>
    ),
};

export const GameVariant: Story = {
    render: () => (
        <div className='flex h-24 items-center justify-center'>
            <Tooltip content='🏆 골드 1,250개 보유' variant='game' side='bottom'>
                <Button variant='gold'>골드 지갑</Button>
            </Tooltip>
        </div>
    ),
};
