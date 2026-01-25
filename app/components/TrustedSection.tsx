'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';
// ArrowRight removed as it is now inside InteractiveButton

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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <InteractiveButton text="Learn more" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
