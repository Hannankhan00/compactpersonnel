'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import styles from '../page.module.css';

// Placeholder data for partners. 
// In a real app, these would be image imports or URLs.
const partners = [
    { name: "Bild Member", color: "#2563eb" },
    { name: "Investors in Diversity", color: "#be185d" },
    { name: "Disability Confident", color: "#7e22ce" },
    { name: "STOMP", color: "#be123c" },
    { name: "Restraint Reduction Network", color: "#16a34a" },
    { name: "ASDAN", color: "#ea580c" },
    // Duplicate for seamless loop effect if needed, though we will handle logic for circular
    { name: "Bild Member", color: "#2563eb" },
    { name: "Investors in Diversity", color: "#be185d" },
    { name: "Disability Confident", color: "#7e22ce" },
    { name: "STOMP", color: "#be123c" },
    { name: "Restraint Reduction Network", color: "#16a34a" },
    { name: "ASDAN", color: "#ea580c" },
];

export default function Partners() {
    // We will animate the x position of a track.
    // "Moves after 2 to 3 sec to the next logo"
    // Let's settle on a continuous smooth slide or discrete steps?
    // Discrete steps are cleaner for reading logos.

    // Implementation: transform X based on index.
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1));
        }, 2500); // Move every 2.5 seconds

        return () => clearInterval(timer);
    }, []);

    // Logos width configuration
    // Desktop: 5 logos visible? approx 20% width each.
    // We have a long list (duplicated).
    // We slide by one logo width (e.g. 200px or percentage).

    const logoWidth = 220; // px, approximate width of logo + gap
    // Actually, using percentages is safer for responsive.
    // Let's say we show 5 on desktop (20%).

    // To make it infinite loop seamlessly without a "jerk" back:
    // We can use a very long list or the "two sets" trick with motion value repeats.
    // But for simple "step to next", purely react state reset is easiest if we don't mind a tiny jump, 
    // OR we use the `partners` array length to modulate.
    // Let's use a simpler CSS animation or Framer Motion 'animate' with repeat.

    // However, User asked for "moves after 2 to 3 sec", implying a pause.
    // So Step -> Pause -> Step.

    // Handling infinite scroll with Pause is tricky in pure React state without complex logic.
    // Let's try: Animate X from -(index * width) to -((index+1)*width).
    // When index reaches half the list (the end of unique items), we snap back to 0 instantly.

    const uniqueCount = partners.length / 2;

    useEffect(() => {
        if (index >= uniqueCount) {
            // Reset logic needs to be seamless.
            // Wait for animation frame or timeout?
            // Actually, if we use a transition, we can't snap instantly visible unless we disable transition.
            // Let's just let it scroll for a while, partners list is short.
            // A simple infinite ticker is better but "moves to the next logo" implies stepwise.

            const timeout = setTimeout(() => {
                setIndex(0);
            }, 500); // wait for transition to finish ??
            // This is hard to perfect quickly.

            // ALTERNATE APPROACH:
            // Just a standard Marquee that moves constantly? 
            // User said: "moves after 2 to 3 sec".

            // Let's stick to the state increment. 
            // When index hits `partners.length - visibleCount`, we act to loop? 
            // Let's just let it run for now with a sufficiently duplicated list or just reset.
            if (index === partners.length - 5) {
                // Reset to 0?
                setIndex(0);
            }
        }
    }, [index, uniqueCount]);

    return (
        <section className={styles.partnersSection}>
            <FadeIn>
                <h2 className={styles.partnersTitle}>Our Partners</h2>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className={styles.partnersWindow}>
                    <motion.div
                        className={styles.partnersTrack}
                        animate={{ x: `-${index * 20}%` }} // Moving by 20% (assuming 5 visible)
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    // On mobile we might show 2 (50% slide). CSS var logic again?
                    >
                        {partners.map((partner, i) => (
                            <div key={i} className={styles.partnerLogo}>
                                <div
                                    className={styles.logoPlaceholder}
                                    style={{ color: partner.color }}
                                >
                                    {/* In real app, <Image src={...} /> */}
                                    <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                        {partner.name.split(' ')[0]}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </FadeIn>
        </section>
    );
}
