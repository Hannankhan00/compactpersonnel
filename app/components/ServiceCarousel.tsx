'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../page.module.css';
import Link from 'next/link';
import FadeIn from './FadeIn';

import { servicesData } from '../lib/servicesData';

// Convert servicesData object to array for the carousel
const services = Object.entries(servicesData).map(([slug, data]) => ({
    title: data.title,
    description: data.description,
    color: "#0f4c81", // Uniform brand color or rotate colors if preferred
    slug: slug
}));

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
                        <Link
                            href={`/services/${service.slug}`}
                            key={index}
                            className={styles.serviceCardLink}
                            style={{
                                textDecoration: 'none',
                                display: 'block',
                                flex: '0 0 var(--slide-width)' // Preserve sizing wrapper logic if needed
                            }}
                        >
                            <div className={styles.serviceCard} style={{ backgroundColor: service.color }}>
                                <div className={styles.serviceCardOverlay}>
                                    <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                                    <p className={styles.serviceCardDesc}>{service.description}</p>
                                </div>
                            </div>
                        </Link>
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
