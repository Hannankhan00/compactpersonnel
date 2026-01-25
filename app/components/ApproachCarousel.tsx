'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../page.module.css';

const approaches = [
    {
        title: "Positive Behaviour Support",
        description: "Reducing challenging behaviours by improving quality of life and meeting individuals' diverse needs.",
        color: "#7CB9A8"
    },
    {
        title: "Active Support",
        description: "A person-centred approach designed to help individuals with learning disabilities engage in meaningful activities and relationships.",
        color: "#8B9A70"
    },
    {
        title: "The Learning Hub",
        description: "An inclusive environment that fosters interactive learning and personal development for adults of all ages.",
        color: "#E8A4B1"
    },
    {
        title: "Success Stories",
        description: "Discover the success stories achieved within the Compact Personnel community.",
        color: "#6B8E5A"
    }
];

export default function ApproachCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Only allow 1 slide (index 0 = initial, index 1 = shifted)
    const maxIndex = 1;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(0);
        }
    };

    // Desktop: slide by card width + gap (approx 300px)
    // When index is 0: show cards 1,2,3 full + card 4 peeking
    // When index is 1: card 1 half-hidden left + cards 2,3,4 full
    const slideAmount = isMobile ? currentIndex * 100 : currentIndex * 300;

    return (
        <section className={styles.approachSection}>
            {/* Desktop Header with arrows */}
            <div className={styles.approachHeader}>
                <div className={styles.approachControls}>
                    <button
                        onClick={prevSlide}
                        className={`${styles.approachArrow} ${currentIndex === 0 ? styles.disabled : ''}`}
                        disabled={currentIndex === 0}
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`${styles.approachArrow} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                        disabled={currentIndex >= maxIndex}
                    >
                        &rarr;
                    </button>
                </div>
            </div>

            {/* Cards Viewport */}
            <div className={styles.approachViewport}>
                <motion.div
                    className={styles.approachTrack}
                    animate={{
                        x: isMobile
                            ? `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)`
                            : `-${slideAmount}px`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {approaches.map((approach, index) => (
                        <div
                            key={index}
                            className={styles.approachCard}
                            style={{ backgroundColor: approach.color }}
                        >
                            {/* Image Placeholder Area */}
                            <div className={styles.approachCardImage}>
                                {/* User will add images later */}
                            </div>

                            {/* Content Overlay */}
                            <div className={styles.approachCardContent}>
                                <h3 className={styles.approachCardTitle}>{approach.title}</h3>
                                <p className={styles.approachCardDesc}>{approach.description}</p>
                                <button className={styles.approachCardBtn}>Learn more</button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className={styles.approachMobileControls}>
                <button
                    onClick={prevSlide}
                    className={`${styles.approachArrow} ${currentIndex === 0 ? styles.disabled : ''}`}
                    disabled={currentIndex === 0}
                >
                    &larr;
                </button>

                <div className={styles.approachDots}>
                    {approaches.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.approachDot} ${idx === currentIndex ? styles.approachDotActive : ''}`}
                            onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className={`${styles.approachArrow} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                    disabled={currentIndex >= maxIndex}
                >
                    &rarr;
                </button>
            </div>
        </section>
    );
}
