import GithubIcon from '@/components/icons/GithubIcon';
import { GameButton } from '@/design-system/game/GameButton';
import { GamePanel } from '@/design-system/game/GamePanel';
import { ResourceBadge } from '@/design-system/game/ResourceBadge';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ArrowRight, Coins, GitBranch, GitCommit, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import VillagePreview from '../VillagePreview';

export default function HeroSection() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    return (
        <section className='relative flex min-h-screen items-center overflow-hidden pt-20'>
            <motion.div
                className='bg-primary/10 pointer-events-none absolute top-20 left-1/4 -z-10 h-96 w-96 rounded-full blur-3xl'
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className='bg-gold/10 pointer-events-none absolute right-1/4 bottom-20 -z-10 h-80 w-80 rounded-full blur-3xl'
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-2 lg:items-center'>
                <motion.div className='flex flex-col items-center gap-6 text-center lg:items-start lg:text-left' variants={staggerContainer} initial='hidden' animate='visible'>
                    <motion.div custom={0} variants={fadeUp}>
                        <motion.span
                            className='border-gold/40 bg-gold/15 text-gold-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold'
                            animate={{ boxShadow: ['0 0 5px oklch(0.82 0.16 85 / 0.3)', '0 0 20px oklch(0.82 0.16 85 / 0.7)', '0 0 5px oklch(0.82 0.16 85 / 0.3)'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Sparkles className='h-3.5 w-3.5' />
                            개발자를 위한 마을 시뮬레이션
                        </motion.span>
                    </motion.div>

                    <motion.h1 custom={0.1} variants={fadeUp} className='text-5xl leading-tight font-extrabold tracking-tight md:text-6xl'>
                        코드를 짜면
                        <br />
                        <span className='from-primary via-gold to-success bg-linear-to-r bg-clip-text text-transparent'>마을이 자란다</span>
                    </motion.h1>

                    <motion.p custom={0.2} variants={fadeUp} className='text-muted-foreground max-w-md text-lg leading-relaxed'>
                        GitHub 커밋이 골드로 변환되고, 골드로 마을을 건설하세요.
                        <br />
                        코딩 습관이 나만의 3D 마을을 만들어갑니다.
                    </motion.p>

                    <motion.div custom={0.3} variants={fadeUp} className='flex flex-wrap justify-center gap-4 lg:justify-start'>
                        <GameButton variant='primary' size='xl' className='cursor-pointer gap-2 shadow-lg' onClick={handleLogin}>
                            <GithubIcon className='h-5 w-5' />
                            GitHub으로 시작하기
                            <ArrowRight className='h-4 w-4' />
                        </GameButton>
                    </motion.div>

                    <motion.div custom={0.4} variants={fadeUp} className='flex flex-wrap justify-center gap-3 pt-2 lg:justify-start'>
                        <ResourceBadge resource='gold' value={2500} icon={<Coins className='h-4 w-4' />} label='Gold' animated />
                        <ResourceBadge resource='commits' value={147} icon={<GitCommit className='h-4 w-4' />} label='Commits' />
                        <ResourceBadge resource='stars' value={23} icon={<Star className='h-4 w-4' />} label='Stars' />
                    </motion.div>
                </motion.div>

                <div className='relative flex justify-center'>
                    <VillagePreview />
                    {[
                        {
                            delay: 0.8,
                            initX: -20,
                            floatDelay: 0.5,
                            pos: 'top-0 left-0 lg:-left-10',
                            content: (
                                <div className='flex items-center gap-2 text-sm'>
                                    <GitBranch className='text-success h-4 w-4' />
                                    <span className='font-medium'>feat: 새 기능 추가</span>
                                </div>
                            ),
                            variant: 'glass' as const,
                        },
                        {
                            delay: 1.1,
                            initX: -20,
                            floatDelay: 1.2,
                            pos: '-bottom-4 -left-4 lg:-left-8',
                            content: (
                                <div className='flex items-center gap-2 text-sm font-bold text-yellow-600 dark:text-yellow-400'>
                                    <Coins className='h-4 w-4' />
                                    +120 Gold 획득!
                                </div>
                            ),
                            variant: 'gold' as const,
                        },
                    ].map(({ delay, initX, floatDelay, pos, content, variant }, i) => (
                        <motion.div key={i} className={`absolute ${pos}`} initial={{ opacity: 0, x: initX }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.5 }}>
                            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}>
                                <GamePanel variant={variant} size='sm' className='shadow-xl'>
                                    {content}
                                </GamePanel>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
