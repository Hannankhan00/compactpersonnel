'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../page.module.css';
import FadeIn from './FadeIn';

const services = [
    {
        title: "Residential Care",
        description: "We provide residential care for individuals with Learning Disabilities including autism and associated conditions such as Asperger's Syndrome.",
        // User will add images later, using a placeholder color for now
        color: "#7e8c8d"
    },
    {
        title: "Supported Living",
        description: "We support people with complex needs to live independently in their own homes.",
        color: "#5b6d6f"
    },
    {
        title: "Therapeutic Activities",
        description: "We create bespoke weekly programmes for each supported person, guided by our holistic philosophy.",
        color: "#4a5a5c"
    },
    {
        title: "Rapid Review & Settlement",
        description: "Supporting individuals at risk of placement breakdown, helping to avoid sectioning or hospital admission.",
        color: "#394849"
    }
];

export default function ServiceCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // We want to show 3 cards at a time on desktop
    // Max index would be total - 3 
    // But for better mobile flexibility, we might just slide by item width.
    // For simplicity and robustness on "View 4th card", let's define the view window.

    const handleNext = () => {
        if (currentIndex < services.length - 1) { // Allow scrolling until the very last card is fully visible? 
            // Logic: if we show 3, and have 4. Index 0 shows 1,2,3. Index 1 shows 2,3,4.
            // So max index is services.length - 3?
            // Let's rely on a simpler 'one by one' slide or just strict bounds.
            // Image implies we click to see the "last card".
            // Let's just increment index. CSS will handle the window.
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
        }
    };

    // Specific logic: 
    // If we want a strict "3 visible" view:
    // Desktop: max index = 1 (State 0: 1-2-3, State 1: 2-3-4) ? 
    // Actually, let's keep it simple: Infinite carousel or bounded?
    // User said "see the last card by clicking the arrow", implying it's hidden initially.
    // Let's implement bounded for now.

    const maxIndex = services.length - 3; // 1

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex > 0 ? maxIndex : services.length - 1));
    }

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    }

    return (
        <section className={styles.carouselSection}>
            <FadeIn>
                <div className={styles.carouselHeader}>
                    <button
                        className={styles.getInTouchPill}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                        }}
                    >
                        <span>Get in touch</span> <span>&rarr;</span>
                        <div className={styles.buttonGlow}></div>
                    </button>

                    <div className={styles.carouselControls}>
                        <button
                            onClick={prevSlide}
                            className={`${styles.arrowButton} ${currentIndex === 0 ? styles.disabled : ''}`}
                            disabled={currentIndex === 0}
                        >
                            &larr;
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`${styles.arrowButton} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                            disabled={currentIndex >= maxIndex && maxIndex >= 0}
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            </FadeIn>

            <div className={styles.carouselViewport}>
                <motion.div
                    className={styles.carouselTrack}
                    animate={{ x: `calc(-${currentIndex} * (var(--slide-width) + 2rem))` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard} style={{ backgroundColor: service.color }}>
                            {/* Placeholder for background image */}
                            <div className={styles.serviceCardOverlay}>
                                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                                <p className={styles.serviceCardDesc}>{service.description}</p>
                                <button className={styles.serviceCardBtn}>Learn more</button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
