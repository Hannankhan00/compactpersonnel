'use client';

import { motion } from 'framer-motion';
import styles from './MeetTheTeamHero.module.css';

export default function MeetTheTeamHero() {
    return (
        <section className={styles.heroSection}>
            <motion.div
                className={styles.heroImageContainer}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 7, ease: "easeInOut" }}
            >
                {/* Placeholder Image - User to replace later */}
                <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2940&auto=format&fit=crop"
                    alt="Meet The Team Background"
                    className={styles.heroImage}
                />
            </motion.div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>Meet The Team</h1>
            </div>
        </section>
    );
}
