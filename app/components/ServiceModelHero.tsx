'use client';

import { motion } from 'framer-motion';
import styles from './ServiceModelHero.module.css';

export default function ServiceModelHero() {
    return (
        <section className={styles.heroSection}>
            <motion.div
                className={styles.heroImageContainer}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 7, ease: "easeInOut" }}
            >
                {/* Placeholder Image - User to replace later */}
                <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2940&auto=format&fit=crop"
                    alt="Our Service Model Background"
                    className={styles.heroImage}
                />
            </motion.div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>Our Service Model</h1>
            </div>
        </section>
    );
}
