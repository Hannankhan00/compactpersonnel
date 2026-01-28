'use client';

import { motion } from 'framer-motion';
import styles from './ReferralHero.module.css';

export default function ReferralHero() {
    return (
        <section className={styles.heroSection}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #0f4c81 0%, #1e1e1e 100%)',
                zIndex: 1
            }} />

            <div className={styles.overlay}></div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Are you supporting someone in need of placement?</h1>
                <p className={styles.subtitle}>
                    Please complete the referral form below. Compact Personnel is here to help you find the right placement and offer support every step of the way.
                </p>
            </motion.div>
        </section>
    );
}
