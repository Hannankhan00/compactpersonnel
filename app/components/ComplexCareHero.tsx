'use client';

import { motion } from 'framer-motion';
import styles from './ComplexCareHero.module.css';

export default function ComplexCareHero() {
    return (
        <section className={styles.heroSection}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #000000 100%)', // Slightly different darker blue for this section
                zIndex: 1
            }} />

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
