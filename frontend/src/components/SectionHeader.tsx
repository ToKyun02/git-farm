import { motion } from 'motion/react';

interface SectionHeaderProps {
    badge: string;
    badgeClass?: string;
    title: string;
    desc: string;
}

export default function SectionHeader({ badge, badgeClass = 'bg-primary/10 text-primary', title, desc }: SectionHeaderProps) {
    return (
        <motion.div className='mb-16 text-center' initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className={`mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${badgeClass}`}>{badge}</span>
            <h2 className='mb-4 text-3xl font-bold md:text-4xl'>{title}</h2>
            <p className='text-muted-foreground mx-auto max-w-xl text-lg'>{desc}</p>
        </motion.div>
    );
}
