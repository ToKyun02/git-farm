import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

const BADGE_STYLES = {
    gold: 'bg-gold/20 text-gold-foreground border-gold/40',
    commits: 'bg-success/20 text-success border-success/40',
    stars: 'bg-accent/20 text-accent-foreground border-accent/40',
    energy: 'bg-primary/20 text-primary border-primary/40',
} as const;

interface Props {
    target: number;
    icon: React.ReactNode;
    resource: keyof typeof BADGE_STYLES;
    label: string;
    inView: boolean;
}

export default function AnimatedStatBadge({ target, icon, resource, label, inView }: Props) {
    const count = useMotionValue(0);
    const display = useTransform(count, (v) => {
        if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
        if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
        return Math.floor(v).toLocaleString();
    });

    useEffect(() => {
        if (!inView) return;
        const ctrl = animate(count, target, { duration: 2, ease: 'easeOut' });
        return ctrl.stop;
    }, [inView, target, count]);

    return (
        <div className='flex flex-col items-center gap-3 text-center'>
            <div className={`inline-flex items-center gap-1.5 rounded-xl border-2 px-4 py-1.5 font-mono font-semibold tabular-nums ${BADGE_STYLES[resource]}`}>
                {icon}
                <motion.span>{display}</motion.span>
            </div>
            <span className='text-muted-foreground text-sm'>{label}</span>
        </div>
    );
}
