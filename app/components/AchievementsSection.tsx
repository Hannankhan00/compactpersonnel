'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';

const achievements = [
    { title: "Investors in People Silver", image: "" },
    { title: "Housing with Care Finalist", image: "" },
    { title: "Stars Finalist 2025", image: "" },
    { title: "Stars Winner 2025", image: "" },
    { title: "LaingBuisson Finalist", image: "" },
    { title: "Social Care Leadership Awards", image: "" },
];

export default function AchievementsSection() {
    return (
        <section className={styles.partnersSection}>
            <div className={styles.trustedContainer} style={{ background: 'transparent', boxShadow: 'none', display: 'block', minHeight: 'auto' }}>
                <h2 className={styles.partnersTitle} style={{ marginBottom: '3rem' }}>
                    Our Achievements
                </h2>

                <div className={styles.partnersWindow}>
                    <motion.div
                        className={styles.partnersTrack}
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...achievements, ...achievements, ...achievements].map((item, index) => (
                            <div key={index} className={styles.partnerLogo}>
                                <div className={styles.logoPlaceholder}>
                                    {/* Placeholder for achievement logo */}
                                    <span style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem' }}>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
