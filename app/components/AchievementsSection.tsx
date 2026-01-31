'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';

const achievements = [
    { title: "Investors in People Silver", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=120&h=120&fit=crop" },
    { title: "Housing with Care Finalist", image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=120&h=120&fit=crop" },
    { title: "Stars Finalist 2025", image: "https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=120&h=120&fit=crop" },
    { title: "Stars Winner 2025", image: "https://images.unsplash.com/photo-1547738738-f9013a375be9?w=120&h=120&fit=crop" },
    { title: "LaingBuisson Finalist", image: "https://images.unsplash.com/photo-1548247661-3d7905940716?w=120&h=120&fit=crop" },
    { title: "Social Care Leadership Awards", image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=120&h=120&fit=crop" },
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
                                <div className={styles.logoPlaceholder} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }}
                                        />
                                    ) : null}
                                    <span style={{ fontSize: '0.75rem', textAlign: 'center', padding: '0 0.5rem' }}>
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
