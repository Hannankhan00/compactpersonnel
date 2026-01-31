'use client';

import { motion } from 'framer-motion';
import styles from './CareersHero.module.css';

interface CareersHeroProps {
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string;
}

export default function CareersHero({
    title = "Join Our Team",
    subtitle = "Build a rewarding career with Compact Personnel",
    backgroundImageUrl
}: CareersHeroProps) {
    const imageUrl = backgroundImageUrl || 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop';

    return (
        <section className={styles.heroSection}>
            {/* Zooming Background Image */}
            <motion.div
                className={styles.heroImageContainer}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 7, ease: "easeInOut" }}
            >
                <img
                    src={imageUrl}
                    alt="Work With Us"
                    className={styles.heroImage}
                />
            </motion.div>

            <div className={styles.overlay}></div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>{title}</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                    {subtitle}
                </p>
            </motion.div>
        </section>
    );
}
