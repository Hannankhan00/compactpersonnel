'use client';

import { motion } from 'framer-motion';
import styles from './EqualitySection.module.css';
import InteractiveButton from './InteractiveButton';

export default function EqualitySection() {
    return (
        <section className={styles.equalitySection}>
            <motion.div
                className={styles.equalityContainer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Image Side */}
                <div className={styles.imageSide}>
                    {/* Replace this placeholder with actual image later */}
                    <div className={styles.imagePlaceholder}>
                        Image placeholder<br />Add your image here
                    </div>
                    {/* Uncomment and use this when you have the image:
                    <img 
                        src="/assets/equality-image.jpg" 
                        alt="Team collaboration" 
                        className={styles.image}
                    />
                    */}
                </div>

                {/* Content Side */}
                <div className={styles.contentSide}>
                    <h2 className={styles.title}>Equality, Diversity & Inclusivity</h2>
                    <p className={styles.description}>
                        At Compact Personnel, we strongly believe in equality and fairness for all. We adopt this view
                        both in regards to our workforce and to the supported people that we look after. At Compact Personnel,
                        we respect each other and value the different backgrounds of both our staff and our supported people.
                        We believe that everyone deserves a voice and has the right to express their views and opinions.
                        Compact Personnel promotes opportunity for all, and gives everyone a chance to achieve their
                        potential and succeed.
                    </p>
                    <div className={styles.buttonWrapper}>
                        <InteractiveButton
                            text="Get In Touch"
                            href="#"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
