'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from '../page.module.css';

const baseTestimonials = [
    {
        quote: "Amazing communicators - the updates and pictures we received mean so much. You promote family relationship, we are always welcomed into our loved ones home.",
        color: styles.cardYellow
    },
    {
        quote: "We feel so confident in your approach. Everything you have done such as positive risk taking has worked so well.",
        color: styles.cardPink
    },
    {
        quote: "Before our loved ones received your care, we were in a state of despair. Keep doing what you're doing.",
        color: styles.cardBlue
    },
    {
        quote: "The team goes above and beyond every single day. We've seen such a positive change in behavior and overall happiness.",
        color: styles.cardYellow
    },
    {
        quote: "Professional, caring, and truly dedicated. It's rare to find a committed group of support workers who genuinely care.",
        color: styles.cardPink
    },
    {
        quote: "Communication is excellent. We always feel involved in the decision making process for our son's care plan.",
        color: styles.cardBlue
    },
    {
        quote: "A wonderful environment where individuals are treated with dignity and respect at all times.",
        color: styles.cardYellow
    },
    {
        quote: "We couldn't ask for better support. The transition process was handled with such care and attention to detail.",
        color: styles.cardPink
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const totalItems = baseTestimonials.length;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalItems);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, totalItems]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.testimonialsContainer}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className={styles.testimonialsTitle} style={{ marginBottom: '1rem' }}>
                        Don’t just take it from us
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                        Voices of the families we’ve had the privilege to support.
                    </p>
                </div>

                <div
                    className={styles.testimonialsViewport}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div
                        className={styles.testimonialsTrack}
                        animate={{
                            x: isMobile
                                ? `calc(-${currentIndex} * (100vw - 1rem))`
                                : `calc(-${currentIndex} * (400px + 2rem))`
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {baseTestimonials.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.testimonialCard} ${item.color}`}
                            >
                                <Quote size={40} className={styles.testimonialQuoteIcon} fill="currentColor" strokeWidth={0} />

                                <p className={styles.testimonialText}>
                                    {item.quote}
                                </p>

                                <Quote size={40} className={`${styles.testimonialQuoteIcon} ${styles.testimonialQuoteIconBottom}`} fill="currentColor" strokeWidth={0} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Controls */}
                <div className={styles.testimonialControls}>
                    <button onClick={handlePrev} className={styles.testimonialArrow}>
                        <ArrowLeft size={24} />
                    </button>
                    <div className={styles.testimonialDots}>
                        {baseTestimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.testimonialDot} ${idx === currentIndex ? styles.testimonialDotActive : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                    <button onClick={handleNext} className={styles.testimonialArrow}>
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
