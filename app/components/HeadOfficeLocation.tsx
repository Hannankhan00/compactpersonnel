'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeadOfficeLocation.module.css';
import InteractiveButton from './InteractiveButton';

export default function HeadOfficeLocation() {
    const [mapType, setMapType] = useState<'map' | 'satellite'>('map');

    // Google Maps Embed URL for Hilton House, Stockport
    const baseMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5!2d-2.159274!3d53.40759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHilton%20House%20Office%201%2C%20B%20Block%2C%204th%20Floor%2C%20Lord%20Street%2C%20Stockport%2C%20England%2C%20SK1%203NA!5e0!3m2!1sen!2suk!4v1706280000000!5m2!1sen!2suk";

    const mapSrc = mapType === 'satellite'
        ? baseMapSrc.replace('!5e0!', '!5e1!')
        : baseMapSrc;

    const directionsUrl = "https://www.google.com/maps/dir//Hilton+House+Office+1+B+Block+4th+Floor+Lord+Street+Stockport+SK1+3NA/@53.40759,-2.159274,17z";

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
                        Compact Personnel, Hilton House Office 1, B Block, 4th Floor,<br />
                        Lord Street, Stockport, England, SK1 3NA
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
