'use client';

import { motion } from 'framer-motion';
import styles from './ContactHero.module.css';

export default function ContactHero() {
    return (
        <section className={styles.heroSection}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1600&h=800&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
