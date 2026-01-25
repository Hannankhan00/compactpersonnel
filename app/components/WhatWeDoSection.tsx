'use client';

import styles from '../page.module.css';
import FadeIn from './FadeIn';
import InteractiveButton from './InteractiveButton';

export default function WhatWeDoSection() {
    return (
        <section className={styles.whatWeDoSection}>
            <div className={styles.whatWeDoContainer}>
                <FadeIn className={styles.whatWeDoHeadline}>
                    What We Do
                </FadeIn>
                <div className={styles.whatWeDoContent}>
                    <FadeIn delay={0.2}>
                        <p className={styles.whatWeDoText}>
                            At Compact Personnel, a <strong>positive approach to risk</strong> is at the heart of everything we do. In a world where people are often expected to fit into pre-defined boxes, we take a different approach which focuses on their strengths and develops their abilities.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p className={styles.whatWeDoText}>
                            Our services are designed around the individual with the <strong>person at the centre</strong>. This includes their environment, their team, their model of support, their therapeutic activities, their relationships and family — creating a pathway for growth.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className={styles.whatWeDoText}>
                            This approach empowers each person to live a meaningful life on their own terms — building confidence, resilience, and independence. By recognising and nurturing potential rather than focusing on limitations, we enable individuals to thrive in their communities and lead fulfilling lives with <strong>purpose and dignity</strong>.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Contact Us Button */}
            <FadeIn delay={0.5}>
                <div className={styles.whatWeDoButtonWrapper}>
                    <InteractiveButton
                        text="Contact us"
                        className={styles.whatWeDoContactBtn}
                    />
                </div>
            </FadeIn>
        </section>
    );
}
