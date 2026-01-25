'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import { ArrowRight } from 'lucide-react';

export default function WorkWithUsSection() {
    return (
        <section className={styles.workWithUsSection}>
            {/* Background Image Placeholder */}
            <div className={styles.workWithUsBackground}>
                {/* User will add image here */}
            </div>

            {/* Bottom blur overlay */}
            <div className={styles.workWithUsBlur}></div>

            {/* Content */}
            <div className={styles.workWithUsContent}>
                <motion.h2
                    className={styles.workWithUsTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Work With Us
                </motion.h2>

                <motion.p
                    className={styles.workWithUsText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    We're hiring! Join us in an exciting, dynamic role where you can make a real impact.
                    With a starting salary of £26,364 per year, no experience is needed as we provide full training.
                </motion.p>

                <motion.button
                    className={styles.workWithUsBtn}
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
                    <span className={styles.workWithUsBtnText}>Apply Now!</span>
                    <span className={styles.workWithUsBtnArrow}>
                        <ArrowRight size={18} strokeWidth={2.5} />
                    </span>
                    <div className={styles.workWithUsBtnGlow}></div>
                </motion.button>
            </div>
        </section>
    );
}
