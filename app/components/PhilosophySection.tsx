'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Target, Sparkles } from 'lucide-react';
import styles from './PhilosophySection.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
};

export default function PhilosophySection() {
    return (
        <section className={styles.philosophySection}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInUp}
                >
                    <h2 className={styles.title}>
                        The Compact Personnel <span className={styles.titleAccent}>Philosophy</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Building a future where everyone is seen, heard, and empowered to live life on their own terms.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className={styles.contentGrid}>
                    {/* Card 1 */}
                    <motion.div
                        className={styles.contentCard}
                        onMouseMove={handleMouseMove}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        variants={fadeInUp}
                    >
                        <div className={styles.glowEffect}></div>
                        <div className={styles.cardIcon}>
                            <Heart size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Inclusion & Transparency</h3>
                        <p className={styles.cardText}>
                            At Compact Personnel, we are committed to building a fair, transparent, and inclusive culture for the people we support, their families, our employees, and stakeholders. Our equality and diversity policies go beyond compliance, we actively create environments where everyone feels seen, heard, and valued.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className={styles.contentCard}
                        onMouseMove={handleMouseMove}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className={styles.glowEffect}></div>
                        <div className={styles.cardIcon}>
                            <Users size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Ongoing Commitment</h3>
                        <p className={styles.cardText}>
                            We believe inclusion requires more than acknowledging differences. It takes ongoing effort, reflective practice, and open dialogue. Fairness and transparency are embedded in how we make decisions, deliver services, and work together as a team.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className={styles.contentCard}
                        onMouseMove={handleMouseMove}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        variants={fadeInUp}
                    >
                        <div className={styles.glowEffect}></div>
                        <div className={styles.cardIcon}>
                            <Target size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Independence & Choice</h3>
                        <p className={styles.cardText}>
                            Our goal is to support independence, choice, and social inclusion for people with learning disabilities, who are neurodiverse, or have mental health needs. Through personalised support, therapeutic activities, and community engagement, we help people take control of their lives.
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        className={styles.contentCard}
                        onMouseMove={handleMouseMove}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        variants={fadeInUp}
                    >
                        <div className={styles.glowEffect}></div>
                        <div className={styles.cardIcon}>
                            <Sparkles size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Meaningful Goals</h3>
                        <p className={styles.cardText}>
                            We empower individuals to build a life that is not only supported but self-directed, rich in relationships, and fully lived. Every person deserves the opportunity to pursue their dreams and achieve meaningful outcomes.
                        </p>
                    </motion.div>

                    {/* Highlight Card - Full Width */}
                    <motion.div
                        className={`${styles.contentCard} ${styles.highlightCard}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        variants={fadeInUp}
                    >
                        <div className={styles.decorativeQuote}>"</div>
                        <h3 className={styles.cardTitle}>Walking Alongside You</h3>
                        <p className={styles.cardText}>
                            Compact Personnel exists to walk alongside each person on their journey. We don't just provide care, we partner with individuals and their families to create pathways toward independence, fulfilment, and a life truly worth living.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
