import { Input } from '@/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { Eye, GitBranch, Search } from 'lucide-react';

const meta: Meta<typeof Input> = {
    title: 'Design System / Base / Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'filled', 'ghost', 'game', 'error'],
        },
        inputSize: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'xl'],
        },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: { placeholder: '커밋 메시지를 입력하세요...', variant: 'default' },
};

export const AllVariants: Story = {
    render: () => (
        <div className='flex w-80 flex-col gap-3'>
            <Input variant='default' placeholder='Default' />
            <Input variant='filled' placeholder='Filled' />
            <Input variant='ghost' placeholder='Ghost' />
            <Input variant='game' placeholder='Game' />
            <Input variant='error' placeholder='Error' />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className='flex w-80 flex-col gap-3'>
            <Input inputSize='sm' placeholder='Small' />
            <Input inputSize='default' placeholder='Default' />
            <Input inputSize='lg' placeholder='Large' />
            <Input inputSize='xl' placeholder='XLarge' />
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className='flex w-80 flex-col gap-3'>
            <Input variant='game' placeholder='저장소 검색...' leftIcon={<Search />} />
            <Input variant='default' placeholder='브랜치 이름...' leftIcon={<GitBranch />} />
            <Input variant='default' type='password' placeholder='비밀번호' rightIcon={<Eye />} />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        placeholder: '비활성화된 입력',
        disabled: true,
        variant: 'default',
    },
};
