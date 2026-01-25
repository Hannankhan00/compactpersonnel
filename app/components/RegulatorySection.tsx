'use client';

import { motion } from 'framer-motion';
import styles from './RegulatorySection.module.css';

export default function RegulatorySection() {
    return (
        <section className={styles.regulatorySection}>
            <motion.div
                className={styles.regulatoryContainer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Content Side */}
                <div className={styles.contentSide}>
                    <h2 className={styles.title}>Regulatory</h2>
                    <p className={styles.description}>
                        All our services are regulated by the Care Quality Commission, the
                        independent regulator of health and adult social care services in England.
                        The CQC set out a broad range of standards that all providers must meet to
                        ensure the services provided meet their standards for care. The new
                        framework operated by CQC is a positive step on from their previous model,
                        it focuses on ensuring services are <span className={styles.highlight}>Effective, Caring, Safe, Well led &
                            Responsive</span>. We strive to maintain excellent standards across all areas of
                        CQC's key lines of enquiry.
                    </p>
                </div>

                {/* Image Side - Placeholder for now */}
                <div className={styles.imageSide}>
                    {/* Replace this placeholder with actual image later */}
                    <div className={styles.imagePlaceholder}>
                        Image placeholder<br />Add your image here
                    </div>
                    {/* Uncomment and use this when you have the image:
                    <img 
                        src="/assets/regulatory-image.jpg" 
                        alt="Person enjoying outdoors" 
                        className={styles.image}
                    />
                    */}
                </div>
            </motion.div>
        </section>
    );
}
