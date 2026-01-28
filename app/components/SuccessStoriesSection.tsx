'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../page.module.css';
import mobileStyles from './SuccessStoriesMobilev2.module.css';
import { ArrowRight } from 'lucide-react';
import InteractiveButton from './InteractiveButton';

const stories = [
    {
        name: "Sharon",
        description: "Sharon presents as a happy, contented, friendly, co-operative, sociable, helpful and able woman. She displays intelligence in certain areas of her daily life skills, has a good sense of self-awareness and has developed positive relationships with those around her.",
        image: "/assets/sharon.jpg"
    },
    {
        name: "Cam",
        description: "Cam is a friendly and well-humoured young man. He is non-verbal, incontinent and reliant on others for his daily needs. He manages to communicate his own way by leading his support team to what it is that he wants and pointing.",
        image: "/assets/cam.jpg"
    },
    {
        name: "Imran",
        description: "This supported person has Obsessive Compulsive Disorder, Autism, AKT-3, and a moderate-severe learning disability. Despite these challenges, Imran continues to make incredible progress with our specialized support plan.",
        image: "/assets/imran.jpg"
    }
];

export default function SuccessStoriesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = stories.length - 1;

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
        <section className={styles.successSection}>
            <div className={styles.successHeader}>
                <h2 className={styles.successTitle}>Our Success Stories</h2>
                <div className={styles.successHeaderButton}>
                    <InteractiveButton text="See all articles" />
                </div>
            </div>

            {/* Desktop Grid */}
            <div className={styles.successGrid}>
                {stories.map((story, index) => (
                    <motion.div
                        key={index}
                        className={styles.successCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.successImageWrapper}>
                            <div className={styles.successImagePlaceholder} style={{ backgroundImage: `url(${story.image})` }}></div>
                        </div>
                        <div className={styles.successCardContent}>
                            <h3 className={styles.successCardTitle}>{story.name}</h3>
                            <p className={styles.successCardText}>{story.description}</p>
                            <button className={styles.successReadMoreBtn}>Read More</button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Carousel (Rebuilt) */}
            <div className={mobileStyles.mobileContainer}>
                <motion.div
                    className={mobileStyles.carouselTrack}
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {stories.map((story, index) => (
                        <div key={index} className={mobileStyles.cardWrapper}>
                            <div className={mobileStyles.card}>
                                <div className={mobileStyles.imageContainer}>
                                    <img src={story.image} alt={story.name} className={mobileStyles.image} />
                                </div>
                                <div className={mobileStyles.content}>
                                    <h3 className={mobileStyles.name}>{story.name}</h3>
                                    <p className={mobileStyles.description}>{story.description}</p>
                                    <button className={mobileStyles.readMoreBtn}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className={mobileStyles.controls}>
                    <button
                        onClick={prevSlide}
                        className={mobileStyles.arrowBtn}
                        disabled={currentIndex === 0}
                    >
                        <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    <div className={mobileStyles.dots}>
                        {stories.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${mobileStyles.dot} ${idx === currentIndex ? mobileStyles.activeDot : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className={mobileStyles.arrowBtn}
                        disabled={currentIndex >= maxIndex}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div className={styles.successButtonWrapper}>
                <InteractiveButton text="See all articles" />
            </div>
        </section>
    );
}
