'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../page.module.css';
import FadeIn from './FadeIn';

const services = [
    {
        title: "Residential Care",
        description: "We provide residential care for individuals with Learning Disabilities including autism and associated conditions such as Asperger's Syndrome.",
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
    const [visibleItems, setVisibleItems] = useState(3);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleItems(1);
            } else {
                setVisibleItems(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure we don't calculate maxIndex until we know the visibility, 
    // OR we default to 3 (Desktop) and accept the jump on mobile hydrate.
    // The maxIndex is simply:
    const maxIndex = Math.max(0, services.length - visibleItems);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    const renderDots = () => (
        <div className={styles.carouselDots}>
            {services.map((_, idx) => (
                <button
                    key={idx}
                    className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                    onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>
    );

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

                    <div className={`${styles.carouselControls} ${styles.desktopControls}`}>
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
                            disabled={currentIndex >= maxIndex}
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
                            <div className={styles.serviceCardOverlay}>
                                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                                <p className={styles.serviceCardDesc}>{service.description}</p>
                                <button className={styles.serviceCardBtn}>Learn more</button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className={styles.mobileControlsWrapper}>
                <button
                    onClick={prevSlide}
                    className={`${styles.arrowButton} ${currentIndex === 0 ? styles.disabled : ''}`}
                    disabled={currentIndex === 0}
                >
                    &larr;
                </button>

                {renderDots()}

                <button
                    onClick={nextSlide}
                    className={`${styles.arrowButton} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                    disabled={currentIndex >= maxIndex}
                >
                    &rarr;
                </button>
            </div>
        </section>
    );
}
