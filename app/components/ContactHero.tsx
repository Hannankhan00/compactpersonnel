'use client';

import { motion } from 'framer-motion';
import styles from './ContactHero.module.css';

export default function ContactHero() {
    return (
        <section className={styles.heroSection}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)', // Sleek dark aesthetic
                zIndex: 1
            }} />

            <div className={styles.overlay}></div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                    Whether you have a question about our services, need support, or just want to say hello, we're here to answer your questions.
                </p>
            </motion.div>
        </section>
    );
}
