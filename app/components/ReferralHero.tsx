'use client';

import { motion } from 'framer-motion';
import styles from './ReferralHero.module.css';

export default function ReferralHero() {
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
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&h=1080&fit=crop"
                    alt="Start a Referral"
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
                <h1 className={styles.title}>Are you supporting someone in need of placement?</h1>
                <p className={styles.subtitle}>
                    Please complete the referral form below. Compact Personnel is here to help you find the right placement and offer support every step of the way.
                </p>
            </motion.div>
        </section>
    );
}
