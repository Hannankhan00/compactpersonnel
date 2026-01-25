'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';

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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <InteractiveButton text="Apply Now!" />
                </motion.div>
            </div>
        </section>
    );
}
