import SectionHeader from '@/components/SectionHeader';
import { CommitNotification } from '@/design-system/game/CommitNotification';
import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { DEMO_COMMITS } from '../data';

export default function CommitFeedSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });
    const [visibleCount, setVisibleCount] = useState(2);

    useEffect(() => {
        if (!inView) return;
        const timer = setInterval(() => setVisibleCount((c) => Math.min(c + 1, DEMO_COMMITS.length)), 1200);
        return () => clearInterval(timer);
    }, [inView]);

    return (
        <section className='bg-muted/30 py-24'>
            <div className='mx-auto max-w-4xl px-6'>
                <SectionHeader badge='실시간 피드' badgeClass='bg-success/20 text-success' title='커밋하면 즉시 골드로' desc='매 커밋마다 알림이 뜨고, 골드가 지급됩니다' />
                <div ref={ref} className='flex flex-col gap-3'>
                    {DEMO_COMMITS.slice(0, visibleCount).map((c) => (
                        <motion.div key={c.id} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
                            <CommitNotification
                                status={c.status}
                                commitHash={c.hash}
                                message={c.message}
                                author={c.author}
                                timestamp={c.timestamp}
                                additions={c.additions}
                                deletions={c.deletions}
                                reward={c.reward}
                                repository={c.repo}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
