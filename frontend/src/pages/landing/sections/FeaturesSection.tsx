import SectionHeader from '@/components/SectionHeader';
import { GamePanel } from '@/design-system/game/GamePanel';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { motion } from 'motion/react';
import { FEATURES } from '../data';

export default function FeaturesSection() {
    return (
        <section className='bg-muted/30 py-24'>
            <div className='mx-auto max-w-5xl px-6'>
                <SectionHeader badge='기능' badgeClass='bg-secondary/50 text-secondary-foreground' title='개발 습관을 게임처럼' desc='Git-Farm이 제공하는 핵심 기능들을 만나보세요' />
                <motion.div
                    className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-10% 0px' }}
                >
                    {FEATURES.map((f, i) => (
                        <motion.div key={i} variants={staggerItem}>
                            <GamePanel variant='elevated' size='lg' interactive className='h-full'>
                                <div className='bg-muted mb-4 inline-flex rounded-xl p-3'>{f.icon}</div>
                                <h3 className='mb-2 font-bold'>{f.title}</h3>
                                <p className='text-muted-foreground text-sm leading-relaxed'>{f.desc}</p>
                            </GamePanel>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
