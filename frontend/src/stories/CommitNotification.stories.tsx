import { CommitNotification } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommitNotification> = {
    title: 'Design System / Game / CommitNotification',
    component: CommitNotification,
    tags: ['autodocs'],
    argTypes: {
        status: { control: 'select', options: ['new', 'processed', 'error'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof CommitNotification>;

export const Default: Story = {
    args: {
        commitHash: 'a1b2c3d4e5f6',
        message: 'feat: 로그인 기능 구현',
        author: 'devfarmer',
        timestamp: '방금 전',
        additions: 42,
        deletions: 8,
        reward: 150,
        repository: 'my-project',
        status: 'new',
    },
};

export const AllStatuses: Story = {
    render: () => (
        <div className='w-96 space-y-3'>
            <CommitNotification
                status='new'
                commitHash='abc123'
                message='feat: 새로운 기능 추가'
                author='developer'
                timestamp='방금 전'
                additions={25}
                deletions={3}
                reward={120}
                repository='awesome-app'
            />
            <CommitNotification status='processed' commitHash='def456' message='fix: 버그 수정' author='developer' timestamp='5분 전' additions={8} deletions={12} repository='awesome-app' />
            <CommitNotification status='error' commitHash='ghi789' message='chore: 빌드 설정 변경' author='developer' timestamp='10분 전' repository='awesome-app' />
        </div>
    ),
};

export const WithReward: Story = {
    render: () => (
        <div className='w-96'>
            <CommitNotification
                status='new'
                commitHash='f3a1b2c'
                message='feat: 디자인 시스템 컴포넌트 완성 🎉'
                author='git-farmer'
                timestamp='지금'
                additions={150}
                deletions={20}
                reward={500}
                repository='git-farm'
            />
        </div>
    ),
};

export const Feed: Story = {
    render: () => (
        <div className='w-96 space-y-2'>
            {[
                { hash: 'a1b2c3d', msg: 'feat: 아이소메트릭 마을 3D 렌더링', add: 89, del: 5, reward: 300 },
                { hash: 'e4f5a6b', msg: 'fix: 골드 계산 버그 수정', add: 12, del: 8, reward: 80 },
                { hash: 'c7d8e9f', msg: 'docs: README 업데이트', add: 34, del: 15, reward: 50 },
                { hash: 'b1c2d3e', msg: 'refactor: 컴포넌트 구조 개선', add: 56, del: 48, reward: 120 },
            ].map(({ hash, msg, add, del, reward }, i) => (
                <CommitNotification
                    key={hash}
                    status={i === 0 ? 'new' : 'processed'}
                    commitHash={hash}
                    message={msg}
                    author='git-farmer'
                    timestamp={i === 0 ? '방금 전' : `${(i + 1) * 5}분 전`}
                    additions={add}
                    deletions={del}
                    reward={i === 0 ? reward : undefined}
                    repository='git-farm'
                />
            ))}
        </div>
    ),
};
