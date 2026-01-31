'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';

export default function ReferralSection() {
    return (
        <section className={styles.referralSection}>
            {/* Background Image */}
            <div className={styles.referralBackground}>
                <img
                    src="/assets/referral-bg.png"
                    alt="Care worker walking with supported person through garden"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <InteractiveButton text="Start a Referral" href="/start-referral" />
                </motion.div>
            </div>
        </section>
    );
}
