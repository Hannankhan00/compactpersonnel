'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';

export default function WhyChooseSection() {
    return (
        <section className={styles.whyChooseSection}>
            {/* Text Content */}
            <motion.div
                className={styles.whyChooseContent}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className={styles.whyChooseTitle}>
                    Why Choose Compact Personnel?
                </h2>
                <p className={styles.whyChooseText}>
                    At Compact Personnel, everything we do is built around you. There is no
                    one-size-fits-all model here — your support plan is shaped around your
                    needs and your preferences. We provide lifelong, person-centered support,
                    empowering adults of all ages to live with support in a community setting.
                </p>
                <motion.button
                    className={styles.whyChooseButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                    }}
                >
                    <span className={styles.whyChooseButtonText}>Learn more</span>
                    <span className={styles.whyChooseButtonArrow}>&rarr;</span>
                    <div className={styles.whyChooseButtonGlow}></div>
                </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
                className={styles.whyChooseImage}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Placeholder - User can add image later */}
                <div className={styles.whyChooseImagePlaceholder}>
                    Image: Outdoor Activities
                </div>
            </motion.div>
        </section>
    );
}
