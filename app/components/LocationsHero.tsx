'use client';

import { motion } from 'framer-motion';
import styles from './LocationsHero.module.css';

export default function LocationsHero() {
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
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop"
                    alt="Our Locations Background"
                    className={styles.heroImage}
                />
            </motion.div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>Places we call Home</h1>
            </div>
        </section>
    );
}
