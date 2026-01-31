'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../page.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const approaches = [
    {
        title: "Positive Behaviour Support",
        description: "Reducing challenging behaviours by improving quality of life and meeting individuals' diverse needs.",
        color: "#7CB9A8",
        image: "/assets/positive-behaviour.png"
    },
    {
        title: "Active Support",
        description: "A person-centred approach designed to help individuals with learning disabilities engage in meaningful activities and relationships.",
        color: "#8B9A70",
        image: "/assets/active-support.png"
    },
    {
        title: "The Learning Hub",
        description: "An inclusive environment that fosters interactive learning and personal development for adults of all ages.",
        color: "#F5C6D0",
        image: "/assets/learning-hub.png"
    },
    {
        title: "Success Stories",
        description: "Discover the success stories achieved within the Compact Personnel community.",
        color: "#4A6B3D",
        image: "/assets/success-stories.png"
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

    const maxIndex = approaches.length - 1;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className={styles.approachSection}>
            {/* Desktop: Static 4 cards */}
            <div className={styles.approachGrid}>
                {approaches.map((approach, index) => (
                    <div
                        key={index}
                        className={styles.approachCard}
                    >
                        {/* Background Image */}
                        <img
                            src={approach.image}
                            alt={approach.title}
                            className={styles.approachCardImage}
                        />
                        {/* Gradient Overlay */}
                        <div className={styles.approachCardOverlay}></div>
                        {/* Content */}
                        <div className={styles.approachCardContent}>
                            <h3 className={styles.approachCardTitle}>{approach.title}</h3>
                            <p className={styles.approachCardDesc}>{approach.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile: Carousel */}
            <div className={styles.approachMobileCarousel}>
                <div className={styles.approachViewport}>
                    <motion.div
                        className={styles.approachTrack}
                        animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {approaches.map((approach, index) => (
                            <div
                                key={index}
                                className={styles.approachCardMobile}
                            >
                                {/* Background Image */}
                                <img
                                    src={approach.image}
                                    alt={approach.title}
                                    className={styles.approachCardImage}
                                />
                                {/* Gradient Overlay */}
                                <div className={styles.approachCardOverlay}></div>
                                {/* Content */}
                                <div className={styles.approachCardContent}>
                                    <h3 className={styles.approachCardTitle}>{approach.title}</h3>
                                    <p className={styles.approachCardDesc}>{approach.description}</p>
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
                        <ArrowLeft size={20} />
                    </button>

                    <div className={styles.approachDots}>
                        {approaches.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.approachDot} ${idx === currentIndex ? styles.approachDotActive : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className={`${styles.approachArrow} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                        disabled={currentIndex >= maxIndex}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
