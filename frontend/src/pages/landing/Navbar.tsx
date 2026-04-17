import GithubIcon from '@/components/icons/GithubIcon';
import { GameButton } from '@/design-system/game/GameButton';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className='text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer rounded-xl p-2 transition-colors'
            aria-label='테마 전환'
        >
            {resolvedTheme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
        </button>
    );
}

export default function Navbar() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <motion.nav
            className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'border-border/50 bg-background/80 border-b shadow-sm backdrop-blur-md' : 'bg-transparent'}`}
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
                <div className='flex items-center gap-2 text-xl font-bold'>
                    <span className='text-2xl'>🌾</span>
                    <span>Git-Farm</span>
                </div>
                <div className='flex items-center gap-2'>
                    <ThemeToggle />
                    <GameButton
                        variant='primary'
                        size='md'
                        className='cursor-pointer gap-2'
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        <GithubIcon className='h-4 w-4' />
                        GitHub 로그인
                    </GameButton>
                </div>
            </div>
        </motion.nav>
    );
}
