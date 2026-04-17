import { GameButton } from '@/design-system/game/GameButton';
import { GamePanel } from '@/design-system/game/GamePanel';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='bg-background flex min-h-screen items-center justify-center p-6'>
            <GamePanel variant='elevated' size='xl' className='max-w-md text-center'>
                <div className='mb-4 text-7xl'>🚧</div>
                <h1 className='mb-2 text-2xl font-bold'>404 — 페이지를 찾을 수 없어요</h1>
                <p className='text-muted-foreground mb-8 text-sm'>아직 건설되지 않은 땅이에요. 홈으로 돌아가 마을을 키워보세요!</p>
                <Link to='/'>
                    <GameButton variant='primary' size='lg'>
                        홈으로 돌아가기
                    </GameButton>
                </Link>
            </GamePanel>
        </div>
    );
}
