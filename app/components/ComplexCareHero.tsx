'use client';

import { motion } from 'framer-motion';
import styles from './ComplexCareHero.module.css';

export default function ComplexCareHero() {
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
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
                    alt="Complex Care and Mental Health Support"
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
                <h1 className={styles.title}>Experience, safety and outcomes</h1>
                <p className={styles.subtitle}>
                    Built to reflect what commissioners expect: who we support, how we manage risk, staffing model and measurable outcomes.
                </p>
            </motion.div>
        </section>
    );
}
