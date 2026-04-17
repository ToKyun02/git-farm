import { Coins } from 'lucide-react';
import { motion } from 'motion/react';
import { VILLAGE_TILES } from './data';

export default function VillagePreview() {
    return (
        <div className='relative' style={{ perspective: '900px' }}>
            <motion.div
                className='grid grid-cols-3 gap-3 rounded-3xl border border-white/40 bg-linear-to-br from-emerald-100/70 to-green-100/70 p-5 shadow-2xl dark:border-white/10 dark:from-emerald-900/30 dark:to-green-900/20'
                style={{ transform: 'rotateX(28deg) rotateZ(-10deg)', transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {VILLAGE_TILES.map((tile, i) => (
                    <motion.div
                        key={i}
                        className={`${tile.color} flex flex-col items-center gap-1 rounded-2xl border-2 border-white/60 p-4 shadow-md dark:border-white/10`}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3 + (i % 3) * 0.6, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <span className='text-3xl'>{tile.emoji}</span>
                        <span className='text-xs font-medium text-gray-600 dark:text-gray-400'>{tile.label}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div className='absolute -top-4 -right-4' animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <div className='flex items-center gap-1 rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1.5 text-sm font-bold text-yellow-700 shadow-lg dark:border-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400'>
                    <Coins className='h-4 w-4' />
                    +50 Gold
                </div>
            </motion.div>
        </div>
    );
}
