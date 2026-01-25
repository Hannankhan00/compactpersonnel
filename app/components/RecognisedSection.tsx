'use client';

import { motion } from 'framer-motion';
import styles from './RecognisedSection.module.css';
import InteractiveButton from './InteractiveButton';

export default function RecognisedSection() {
    return (
        <section className={styles.recognisedSection}>
            <motion.div
                className={styles.recognisedContainer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Content Side */}
                <div className={styles.contentSide}>
                    <h2 className={styles.title}>Recognised for our Excellence</h2>
                    <p className={styles.description}>
                        Compact Personnel is an independent organisation 100% owned by its founders. Our Services are
                        Regulated by the Care Quality Commission as High Quality Services. We provide services for over
                        30 Local Authorities and NHS ICB's. We are one of only a small number of providers trusted to
                        deliver complex care services on the Greater Manchester Complex Care Framework. In 2024 we gained
                        Investors in People Silver Accreditation for our culture of supporting our people to improve the
                        quality of life for people with a learning disability.
                    </p>
                    <p className={styles.description}>
                        We have been recognised by the National Centre for Diversity and ranked in their Top 100 Employers
                        Index. The organisations on the Top 100 Index have to demonstrate excellent levels of fairness,
                        equality, diversity, inclusion and engagement (also known as FREDIE). Our FREDIE Champions — we have
                        one at every service — worked extremely hard to organise events and, along with Chris and the
                        Registered Manager team, worked to ensure that FREDIE values are always at the heart of what we do.
                    </p>
                    <div className={styles.buttonWrapper}>
                        <InteractiveButton
                            text="Get In Touch"
                            href="#"
                        />
                    </div>
                </div>

                {/* Image Side */}
                <div className={styles.imageSide}>
                    {/* Replace this placeholder with actual image later */}
                    <div className={styles.imagePlaceholder}>
                        Image placeholder<br />Add your image here
                    </div>
                    {/* Uncomment and use this when you have the image:
                    <img 
                        src="/assets/recognised-image.jpg" 
                        alt="Hands helping" 
                        className={styles.image}
                    />
                    */}
                </div>
            </motion.div>
        </section>
    );
}
