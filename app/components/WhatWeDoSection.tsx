'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';

export default function WhatWeDoSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className={styles.whatWeDoSection}>
            <motion.div
                className={styles.whatWeDoContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Decorative Line */}
                <motion.div
                    className={styles.whatWeDoAccent}
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                <motion.h2
                    className={styles.whatWeDoTitle}
                    variants={itemVariants}
                >
                    What We Do
                </motion.h2>

                <div className={styles.whatWeDoContent}>
                    <motion.p
                        className={styles.whatWeDoParagraph}
                        variants={itemVariants}
                    >
                        At Compact Personnel, a positive approach to risk is at the heart of everything we do.
                        In a world where people are often expected to fit into pre-defined boxes, we take a
                        different approach which focuses on their <strong>strengths</strong> and develops
                        their <strong>abilities</strong>.
                    </motion.p>

                    <motion.p
                        className={styles.whatWeDoParagraph}
                        variants={itemVariants}
                    >
                        Our services are designed around the individual with the person at the centre.
                        This includes their environment, their team, their model of support, their
                        therapeutic activities, their relationships and family — creating a
                        <strong> pathway for growth</strong>.
                    </motion.p>

                    <motion.p
                        className={styles.whatWeDoParagraph}
                        variants={itemVariants}
                    >
                        This approach empowers each person to live a meaningful life on their own terms —
                        building confidence, resilience, and independence. By recognising and nurturing
                        potential rather than focusing on limitations, we enable individuals to thrive
                        in their communities and lead fulfilling lives with <strong>purpose and dignity</strong>.
                    </motion.p>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    className={styles.whatWeDoDecoCircle}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                />
            </motion.div>
        </section>
    );
}
