'use client';

import Link from 'next/link';
import styles from '../page.module.css';

export default function HeroCards() {
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div className={styles.heroCardsContainer}>
            {/* Card 1: Work With Us */}
            <Link
                href="#"
                className={`${styles.glassCard} ${styles.interactiveCard}`}
                onMouseMove={handleMouseMove}
            >
                <div className={styles.glowEffect}></div>
                <div className={styles.glassCardContent}>
                    <h3 className={styles.glassCardTitle}>
                        Work With Us <span style={{ marginLeft: '5px' }}>&rarr;</span>
                    </h3>
                    <p className={styles.glassCardText}>
                        Jump into a dynamic role where you can make a real impact.
                    </p>
                </div>
                <div className={styles.glassCardImage}></div>
            </Link>

            {/* Card 2: Get In Touch */}
            <Link
                href="#"
                className={`${styles.glassCard} ${styles.interactiveCard}`}
                onMouseMove={handleMouseMove}
            >
                <div className={styles.glowEffect}></div>
                <div className={styles.glassCardContent}>
                    <h3 className={styles.glassCardTitle}>
                        Get In Touch <span style={{ marginLeft: '5px' }}>&rarr;</span>
                    </h3>
                    <p className={styles.glassCardText}>
                        We're here to help and assist you with any of our services.
                    </p>
                </div>
                <div className={styles.glassCardImage}></div>
            </Link>
        </div>
    );
}
