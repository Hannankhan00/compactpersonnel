'use client';

import { motion } from 'framer-motion';
import styles from './WhyChooseHero.module.css';

export default function WhyChooseHero() {
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                    alt="Why Choose Background"
                    className={styles.heroImage}
                />
            </motion.div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>Why Choose</h1>
                <h1 className={styles.title}>Compact Personnel?</h1>
            </div>
        </section>
    );
}
