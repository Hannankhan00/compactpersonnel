'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import { ArrowRight } from 'lucide-react';

export default function TrustedSection() {
    return (
        <section className={styles.trustedSection}>
            <div className={styles.trustedContainer}>
                {/* Image Side */}
                <div className={styles.trustedImageWrapper}>
                    {/* Placeholder for the team image */}
                    <div className={styles.trustedImagePlaceholder}></div>
                </div>

                {/* Content Side */}
                <div className={styles.trustedContent}>
                    <motion.h2
                        className={styles.trustedTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        A Trusted <br /> Organisation
                    </motion.h2>

                    <motion.p
                        className={styles.trustedText}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        We continuously strive to deliver the highest quality of support.
                        Our dedication to excellence ensures that every individual receives
                        care that is safe, effective, and truly person-centered.
                    </motion.p>

                    <motion.button
                        className={styles.trustedButton}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                        }}
                    >
                        <span className={styles.trustedButtonText}>Learn more</span>
                        <span className={styles.trustedButtonArrow}>
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </span>
                        <div className={styles.trustedButtonGlow}></div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
