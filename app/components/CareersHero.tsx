'use client';

import { motion } from 'framer-motion';
import styles from './CareersHero.module.css';

interface CareersHeroProps {
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string; // Optional custom background
}

export default function CareersHero({
    title = "Join Our Team",
    subtitle = "Build a rewarding career with Compact Personnel",
    backgroundImageUrl
}: CareersHeroProps) {
    return (
        <section className={styles.heroSection}>
            {/* Background Image or Gradient */}
            {backgroundImageUrl ? (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }} />
            ) : (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1cb5e0 0%, #000851 100%)',
                    zIndex: 1
                }} />
            )}

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
