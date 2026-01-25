'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import { ArrowRight } from 'lucide-react';

export default function ReferralSection() {
    return (
        <section className={styles.referralSection}>
            {/* Background Image Placeholder */}
            <div className={styles.referralBackground}>
                {/* User will add image here */}
            </div>

            {/* Bottom blur overlay */}
            <div className={styles.referralBlur}></div>

            {/* Content */}
            <div className={styles.referralContent}>
                <motion.h2
                    className={styles.referralTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Together, We Can Find <br /> the Right Place
                </motion.h2>

                <motion.p
                    className={styles.referralText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    No one knows your loved one like you do, that's why you're involved from day one.
                    Whether you're considering our service for the first time or transitioning from another provider,
                    we're here to support you every step of the way.
                </motion.p>

                <motion.button
                    className={styles.trustedButton} // Reusing the yellow button style
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
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
                    <span className={styles.trustedButtonText}>Start a Referral</span>
                    <span className={styles.trustedButtonArrow}>
                        <ArrowRight size={18} strokeWidth={2.5} />
                    </span>
                    <div className={styles.trustedButtonGlow}></div>
                </motion.button>
            </div>
        </section>
    );
}
