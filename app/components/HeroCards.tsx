'use client';

import Link from 'next/link';
import styles from '../page.module.css';
import { ArrowRight } from 'lucide-react';

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
                href="/careers"
                className={`${styles.glassCard} ${styles.interactiveCard}`}
                onMouseMove={handleMouseMove}
            >
                <div className={styles.glowEffect}></div>
                <div className={styles.glassCardContent}>
                    <h3 className={styles.glassCardTitle}>
                        Work With Us <ArrowRight size={18} style={{ marginLeft: '5px' }} />
                    </h3>
                    <p className={styles.glassCardText}>
                        Jump into a dynamic role where you can make a real impact.
                    </p>
                </div>
                <div className={styles.glassCardImage}>
                    <img
                        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=160&h=160&fit=crop&crop=faces"
                        alt="Team collaboration"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                    />
                </div>
            </Link>

            {/* Card 2: Get In Touch */}
            <Link
                href="/contact"
                className={`${styles.glassCard} ${styles.interactiveCard}`}
                onMouseMove={handleMouseMove}
            >
                <div className={styles.glowEffect}></div>
                <div className={styles.glassCardContent}>
                    <h3 className={styles.glassCardTitle}>
                        Get In Touch <ArrowRight size={18} style={{ marginLeft: '5px' }} />
                    </h3>
                    <p className={styles.glassCardText}>
                        We're here to help and assist you with any of our services.
                    </p>
                </div>
                <div className={styles.glassCardImage}>
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=160&h=160&fit=crop"
                        alt="Contact us"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                    />
                </div>
            </Link>
        </div>
    );
}
