'use client';

import { motion } from 'framer-motion';
import styles from './HeadOfficeLocation.module.css';
import InteractiveButton from './InteractiveButton';

export default function HeadOfficeLocation() {
    // Google Maps Embed URL for "Compact Personnel" or the address
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.375624728564!2d-2.227480223027984!3d53.42581676884042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3a0de17822b%3A0x63319074b6ce560!2sCompact%20Personnel%20Ltd!5e0!3m2!1sen!2suk!4v1706280000000!5m2!1sen!2suk";

    // Direct link for the "Get Directions" button
    const directionsUrl = "https://www.google.com/maps/dir//Compact+Personnel+Ltd,+A18+The+Embankment,+Vale+Rd,+Heaton+Mersey,+Stockport+SK4+3GN/@53.4258136,-2.2274802,17z";

    return (
        <section className={styles.section}>
            {/* Map Background */}
            <div className={styles.mapContainer}>
                <iframe
                    src={mapSrc}
                    className={styles.mapFrame}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Compact Personnel Head Office Map"
                ></iframe>
            </div>

            {/* Gradient Overlay */}
            <div className={styles.overlayBlur}></div>

            {/* Content */}
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Head Office Location</h2>
                    <p className={styles.address}>
                        A18, The Embankment, Business Park, Riverview,<br />
                        Heaton Mersey, Stockport SK4 3GN
                    </p>

                    <div className={styles.buttonWrapper}>
                        <InteractiveButton
                            text="Get Directions"
                            href={directionsUrl}
                        // Using default styled button, but we could add specific class if needed
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
