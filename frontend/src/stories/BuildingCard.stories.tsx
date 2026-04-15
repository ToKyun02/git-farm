import { BuildingCard } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const BUILDING_EMOJI: Record<string, string> = {
    office: '🏢',
    cafe: '☕',
    server: '🖥️',
    library: '📚',
    lab: '🔬',
};

const meta: Meta<typeof BuildingCard> = {
    title: 'Design System / Game / BuildingCard',
    component: BuildingCard,
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['available', 'owned', 'locked', 'selected'],
        },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof BuildingCard>;

export const Default: Story = {
    args: {
        name: '개발 사무실',
        description: '커밋 보상이 10% 증가합니다',
        cost: 1500,
        level: 3,
        maxLevel: 10,
        status: 'available',
        preview: <span className='text-4xl'>🏢</span>,
        bonus: '+10% 커밋 보상',
    },
};

export const AllStatuses: Story = {
    render: () => (
        <div className='grid w-[480px] grid-cols-2 gap-4'>
            <BuildingCard
                status='available'
                name='카페'
                description='에너지 회복 속도가 증가합니다'
                cost={800}
                preview={<span className='text-4xl'>{BUILDING_EMOJI.cafe}</span>}
                bonus='+15% 에너지 회복'
            />
            <BuildingCard
                status='owned'
                name='서버실'
                description='자동 빌드가 실행됩니다'
                level={2}
                maxLevel={5}
                preview={<span className='text-4xl'>{BUILDING_EMOJI.server}</span>}
                bonus='+20% 자동 빌드'
            />
            <BuildingCard status='locked' name='연구소' description='Lv.20 이상에서 해금됩니다' cost={5000} preview={<span className='text-4xl'>{BUILDING_EMOJI.lab}</span>} />
            <BuildingCard
                status='selected'
                name='도서관'
                description='코드 품질 점수가 올라갑니다'
                cost={1200}
                preview={<span className='text-4xl'>{BUILDING_EMOJI.library}</span>}
                bonus='+12% 코드 품질'
            />
        </div>
    ),
};

export const Shop: Story = {
    render: () => (
        <div>
            <h2 className='mb-4 text-lg font-bold'>건물 상점</h2>
            <div className='grid w-[520px] grid-cols-3 gap-3'>
                {[
                    { name: '개발 사무실', desc: '커밋 보상 +10%', cost: 1500, emoji: '🏢', bonus: '+10% 커밋', status: 'owned' as const },
                    { name: '커피숍', desc: '에너지 회복 +15%', cost: 800, emoji: '☕', bonus: '+15% 에너지', status: 'available' as const },
                    { name: '서버실', desc: '자동 빌드 +20%', cost: 2000, emoji: '🖥️', bonus: '+20% 자동화', status: 'available' as const },
                    { name: '도서관', desc: '코드 품질 +12%', cost: 1200, emoji: '📚', bonus: '+12% 품질', status: 'available' as const },
                    { name: '연구소', desc: 'Lv.20 해금', cost: 5000, emoji: '🔬', status: 'locked' as const },
                    { name: '데이터센터', desc: 'Lv.30 해금', cost: 9999, emoji: '🌐', status: 'locked' as const },
                ].map((b) => (
                    <BuildingCard key={b.name} name={b.name} description={b.desc} cost={b.cost} status={b.status} size='sm' preview={<span className='text-3xl'>{b.emoji}</span>} bonus={b.bonus} />
                ))}
            </div>
        </div>
    ),
};
