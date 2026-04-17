import logo from '@/assets/logo.png';
import GithubIcon from '@/components/icons/GithubIcon';
import { GameButton } from '@/design-system/game/GameButton';
import { GamePanel } from '@/design-system/game/GamePanel';
import { ArrowRight, Layers, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CTA_FLOATS } from '../data';

export default function CTASection() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    return (
        <section className='py-24'>
            <motion.div
                className='mx-auto max-w-4xl px-6 text-center'
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.6 }}
            >
                <GamePanel variant='elevated' size='xl' className='relative overflow-hidden'>
                    <div className='pointer-events-none absolute inset-0 -z-10 opacity-30'>
                        {CTA_FLOATS.map(({ emoji, pos, delay }) => (
                            <motion.span key={emoji} className={`absolute text-5xl ${pos}`} animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}>
                                {emoji}
                            </motion.span>
                        ))}
                    </div>
                    <div className='relative flex flex-col items-center gap-6'>
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                            <img src={logo} alt='Git-Farm 로고' className='h-16 w-16' />
                        </motion.div>
                        <h2 className='text-3xl font-extrabold md:text-4xl'>지금 당장 마을을 키워보세요</h2>
                        <p className='text-muted-foreground max-w-md text-lg'>GitHub 계정만 있으면 바로 시작! 첫 커밋에 500 Gold 지급</p>
                        <GameButton variant='gold' size='xl' className='cursor-pointer gap-2' onClick={handleLogin}>
                            <GithubIcon className='h-5 w-5' />
                            무료로 시작하기
                            <ArrowRight className='h-4 w-4' />
                        </GameButton>
                        <div className='text-muted-foreground flex flex-wrap justify-center gap-6 text-sm'>
                            <span className='flex items-center gap-1.5'>
                                <Zap className='text-success h-4 w-4' />
                                즉시 시작
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <Shield className='text-primary h-4 w-4' />
                                완전 무료
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <Layers className='text-accent-foreground h-4 w-4' />
                                카드 불필요
                            </span>
                        </div>
                    </div>
                </GamePanel>
            </motion.div>
        </section>
    );
}
