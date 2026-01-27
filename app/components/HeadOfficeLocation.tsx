'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeadOfficeLocation.module.css';
import InteractiveButton from './InteractiveButton';

export default function HeadOfficeLocation() {
    const [mapType, setMapType] = useState<'map' | 'satellite'>('map');

    // Google Maps Embed URL for "Compact Personnel" or the address
    // We use a base URL and toggle the view parameter (!5e0! for map, !5e1! for satellite usually)
    const baseMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.375624728564!2d-2.227480223027984!3d53.42581676884042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3a0de17822b%3A0x63319074b6ce560!2sCompact%20Personnel%20Ltd!5e0!3m2!1sen!2suk!4v1706280000000!5m2!1sen!2suk";

    const mapSrc = mapType === 'satellite'
        ? baseMapSrc.replace('!5e0!', '!5e1!')
        : baseMapSrc;

    // Direct link for the "Get Directions" button
    const directionsUrl = "https://www.google.com/maps/dir//Compact+Personnel+Ltd,+A18+The+Embankment,+Vale+Rd,+Heaton+Mersey,+Stockport+SK4+3GN/@53.4258136,-2.2274802,17z";

    return (
        <section className={styles.section}>
            {/* Header: Title, Address, and Action Button */}
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className={styles.headerContent}>
                    <h2 className={styles.title}>Head Office</h2>
                    <p className={styles.address}>
                        Compact Personnel Ltd, 1st Floor, A18 The Embankment, Riverside, Off Vale Road,<br />
                        Heaton Mersey, Stockport, SK4 3GN United Kingdom
                    </p>
                </div>
                <div className={styles.buttonWrapper}>
                    <InteractiveButton
                        text="Get Directions"
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.directionsButton}
                    />
                </div>
            </motion.div>

            {/* Map Container */}
            <motion.div
                className={styles.mapContainer}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Custom Map Controls */}
                <div className={styles.mapControls}>
                    <button
                        className={`${styles.controlButton} ${mapType === 'map' ? styles.active : ''}`}
                        onClick={() => setMapType('map')}
                    >
                        Map
                    </button>
                    <button
                        className={`${styles.controlButton} ${mapType === 'satellite' ? styles.active : ''}`}
                        onClick={() => setMapType('satellite')}
                    >
                        Satellite
                    </button>
                </div>

                <iframe
                    src={mapSrc}
                    className={styles.mapFrame}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Compact Personnel Head Office Map"
                ></iframe>
            </motion.div>
        </section>
    );
}
