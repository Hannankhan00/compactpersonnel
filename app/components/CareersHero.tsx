'use client';

import { motion } from 'framer-motion';
import styles from './CareersHero.module.css';

export default function CareersHero() {
    return (
        <section className={styles.heroSection}>
            {/* Background Gradient/Placeholder since we don't have a specific image yet */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1cb5e0 0%, #000851 100%)',
                zIndex: 1
            }} />

            <div className={styles.overlay}></div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Join Our Team</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                    Build a rewarding career with Compact Personnel
                </p>
            </motion.div>
        </section>
    );
}
