import { login } from '@/apis/auth';
import { useMe } from '@/apis/auth/queries';
import logo from '@/assets/logo.png';
import GithubIcon from '@/components/icons/GithubIcon';
import { GameButton } from '@/design-system/game/GameButton';
import { GamePanel } from '@/design-system/game/GamePanel';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Coins, GitBranch, GitCommit, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const floatingItems = [
    { icon: <GitCommit className='h-4 w-4 text-emerald-400' />, text: 'feat: 새 기능 추가', delay: 0, pos: 'top-[15%] left-[8%]', duration: 4 },
    { icon: <Coins className='h-4 w-4 text-yellow-400' />, text: '+80 Gold 획득!', delay: 1.2, pos: 'top-[25%] right-[6%]', duration: 5 },
    { icon: <Star className='h-4 w-4 text-yellow-400' />, text: '레벨 업!', delay: 0.6, pos: 'bottom-[30%] left-[6%]', duration: 3.5 },
    { icon: <GitBranch className='h-4 w-4 text-blue-400' />, text: 'fix: 버그 수정', delay: 1.8, pos: 'bottom-[20%] right-[8%]', duration: 4.5 },
];

export default function LoginPage() {
    const navigate = useNavigate();
    const { data: user, isLoading } = useMe();

    useEffect(() => {
        if (user) navigate('/', { replace: true });
    }, [user, navigate]);

    if (isLoading) {
        return (
            <div className='bg-background flex min-h-screen items-center justify-center'>
                <motion.div
                    className='border-primary h-10 w-10 rounded-full border-4 border-t-transparent'
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        );
    }

    return (
        <div className='bg-background relative flex min-h-screen items-center justify-center overflow-hidden'>
            {/* 배경 블러 오브 */}
            <motion.div
                className='bg-primary/15 pointer-events-none absolute -top-20 left-1/4 -z-10 h-[500px] w-[500px] rounded-full blur-3xl'
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className='bg-gold/10 pointer-events-none absolute right-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full blur-3xl'
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
            <motion.div
                className='bg-success/8 pointer-events-none absolute top-1/2 right-0 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full blur-3xl'
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />

            {/* 플로팅 게임 패널들 */}
            {floatingItems.map((item, i) => (
                <motion.div
                    key={i}
                    className={`absolute hidden lg:block ${item.pos}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay + 0.5, duration: 0.6 }}
                >
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut' }}>
                        <GamePanel variant='glass' size='sm' className='flex items-center gap-2 text-sm font-medium shadow-xl'>
                            {item.icon}
                            <span>{item.text}</span>
                        </GamePanel>
                    </motion.div>
                </motion.div>
            ))}

            {/* 메인 카드 */}
            <motion.div className='w-full max-w-sm px-4' variants={staggerContainer} initial='hidden' animate='visible'>
                {/* 로고 + 브랜딩 */}
                <motion.div custom={0} variants={fadeUp} className='mb-8 flex flex-col items-center gap-3'>
                    <motion.div
                        className='bg-primary/10 border-primary/20 flex h-20 w-20 items-center justify-center rounded-3xl border-2 shadow-lg'
                        animate={{ boxShadow: ['0 0 10px oklch(0.6 0.2 250 / 0.2)', '0 0 30px oklch(0.6 0.2 250 / 0.5)', '0 0 10px oklch(0.6 0.2 250 / 0.2)'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img src={logo} alt='Git-Farm 로고' className='h-12 w-12' />
                    </motion.div>
                    <div className='text-center'>
                        <h1 className='text-foreground text-2xl font-extrabold tracking-tight'>Git-Farm</h1>
                        <p className='text-muted-foreground mt-0.5 text-sm'>코드를 짜면 마을이 자란다</p>
                    </div>
                </motion.div>

                {/* 로그인 패널 */}
                <motion.div custom={0.1} variants={fadeUp}>
                    <GamePanel variant='elevated' size='lg' className='flex flex-col items-center gap-6'>
                        {/* 배지 */}
                        <motion.span
                            className='border-gold/40 bg-gold/15 text-gold-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold'
                            animate={{ boxShadow: ['0 0 4px oklch(0.82 0.16 85 / 0.2)', '0 0 14px oklch(0.82 0.16 85 / 0.6)', '0 0 4px oklch(0.82 0.16 85 / 0.2)'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Sparkles className='h-3 w-3' />
                            개발자를 위한 마을 시뮬레이션
                        </motion.span>

                        <div className='text-center'>
                            <h2 className='text-foreground text-xl font-bold'>시작하기</h2>
                            <p className='text-muted-foreground mt-1 text-sm leading-relaxed'>
                                GitHub 계정으로 로그인하고
                                <br />
                                나만의 개발자 마을을 만들어보세요
                            </p>
                        </div>

                        <GameButton variant='primary' size='lg' className='w-full cursor-pointer gap-3' onClick={login}>
                            <GithubIcon className='h-5 w-5' />
                            GitHub으로 로그인
                        </GameButton>

                        {/* 구분선 */}
                        <div className='border-border/50 w-full border-t' />

                        {/* 미니 스탯 */}
                        <div className='flex w-full justify-around text-center'>
                            {[
                                { icon: <GitCommit className='h-4 w-4' />, label: '커밋', value: '→ Gold' },
                                { icon: <Star className='h-4 w-4' />, label: '스타', value: '→ XP' },
                                { icon: <Coins className='h-4 w-4' />, label: 'Gold', value: '→ 건물' },
                            ].map((stat, i) => (
                                <motion.div key={i} className='text-muted-foreground flex flex-col items-center gap-1' whileHover={{ scale: 1.05 }}>
                                    <span className='text-primary'>{stat.icon}</span>
                                    <span className='text-xs font-semibold'>{stat.label}</span>
                                    <span className='text-xs opacity-70'>{stat.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </GamePanel>
                </motion.div>

                {/* 하단 문구 */}
                <motion.p custom={0.2} variants={fadeUp} className='text-muted-foreground mt-5 text-center text-xs'>
                    로그인 시 <span className='text-foreground/70 underline underline-offset-2 hover:cursor-pointer'>서비스 이용약관</span>에 동의하는 것으로 간주됩니다
                </motion.p>
            </motion.div>
        </div>
    );
}
