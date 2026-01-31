'use client';

import { motion } from 'framer-motion';
import styles from './HereToHelpSection.module.css';
import InteractiveButton from './InteractiveButton';

export default function HereToHelpSection() {
    return (
        <section className={styles.hereToHelpSection}>
            {/* Background Image */}
            <div className={styles.hereToHelpBackground}>
                <img
                    src="/assets/here-to-help.png"
                    alt="Care worker providing compassionate support"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Bottom blur overlay */}
            <div className={styles.hereToHelpBlur}></div>

            {/* Content */}
            <div className={styles.hereToHelpContent}>
                <motion.h2
                    className={styles.hereToHelpTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    We're here to help
                </motion.h2>

                <motion.p
                    className={styles.hereToHelpText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Feel free to reach out if you need any assistance with our services. We're here to help!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <InteractiveButton text="Get in touch" href="/contact" />
                </motion.div>
            </div>
        </section>
    );
}
