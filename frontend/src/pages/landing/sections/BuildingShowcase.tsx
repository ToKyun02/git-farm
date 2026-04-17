import SectionHeader from '@/components/SectionHeader';
import { BuildingCard } from '@/design-system/game/BuildingCard';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { motion } from 'motion/react';
import { BUILDINGS } from '../data';

export default function BuildingShowcase() {
    return (
        <section className='py-24'>
            <div className='mx-auto max-w-5xl px-6'>
                <SectionHeader badge='건물' badgeClass='bg-gold/20 text-gold-foreground' title='나만의 마을을 건설하세요' desc='각 건물은 독특한 보너스와 시각 효과를 제공합니다' />
                <motion.div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5' variants={staggerContainer} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    {BUILDINGS.map((b, i) => (
                        <motion.div key={i} variants={staggerItem}>
                            <BuildingCard
                                status={b.status}
                                name={b.name}
                                description={b.description}
                                cost={b.status === 'owned' ? undefined : b.cost}
                                level={b.level}
                                maxLevel={b.maxLevel}
                                bonus={b.bonus}
                                preview={<span className='text-4xl'>{b.emoji}</span>}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
