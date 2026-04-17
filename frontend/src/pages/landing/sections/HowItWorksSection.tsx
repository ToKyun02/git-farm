import SectionHeader from '@/components/SectionHeader';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { STEPS } from '../data';

export default function HowItWorksSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });

    return (
        <section className='py-24'>
            <div className='mx-auto max-w-5xl px-6'>
                <SectionHeader badge='어떻게 작동하나요?' title='커밋이 마을이 되는 3단계' desc='코드를 짜는 것만으로도 당신만의 개발자 마을이 성장합니다' />

                <div ref={ref} className='relative grid gap-8 md:grid-cols-3'>
                    <div className='absolute top-12 right-[16.5%] left-[16.5%] hidden h-0.5 bg-linear-to-r from-blue-300 via-yellow-300 to-emerald-300 md:block' />
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            className={`relative rounded-3xl border-2 bg-linear-to-br p-8 ${step.gradient} ${step.border}`}
                            initial={{ opacity: 0, y: 32 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                        >
                            <div className='bg-card mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-md'>{step.icon}</div>
                            <div className='bg-primary/10 text-primary absolute top-4 right-4 rounded-full px-3 py-1 font-mono text-xs font-bold'>{step.num}</div>
                            <h3 className='mb-3 text-xl font-bold'>{step.title}</h3>
                            <p className='text-muted-foreground text-sm leading-relaxed'>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
