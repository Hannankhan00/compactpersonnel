'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';

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
                <div style={{ marginTop: '2rem' }}>
                    <InteractiveButton text="Learn more" href="/why-choose-us" />
                </div>
            </motion.div>

            {/* Image */}
            <motion.div
                className={styles.whyChooseImage}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <img
                    src="/assets/outdoor-activities.png"
                    alt="Group enjoying outdoor activities - hiking, cycling in the Peak District"
                    className={styles.whyChooseImagePlaceholder}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
            </motion.div>
        </section>
    );
}
