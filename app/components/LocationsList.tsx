'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './LocationsList.module.css';

const locations = [
    {
        year: '2023',
        name: 'The Embankment',
        address: 'Heaton Mersey, Stockport SK4 3GN',
        type: 'Head Office & Training'
    },
    {
        year: '2024',
        name: 'Manchester Central',
        address: 'Manchester City Centre',
        type: 'Supported Living'
    },
    {
        year: '2025',
        name: 'Cheshire East',
        address: 'Macclesfield, Cheshire',
        type: 'Residential Care'
    },
    {
        year: '2025',
        name: 'Trafford House',
        address: 'Sale, Trafford',
        type: 'Supported Living'
    }
];

export default function LocationsList() {
    return (
        <section className={styles.locationsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Locations</h2>
                <p className={styles.introText}>
                    We provide high-quality support across Greater Manchester and Cheshire.
                    Find a location near you.
                </p>
                <div className={styles.locationsGrid}>
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            className={styles.locationCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.infoSide}>
                                <div className={styles.year}>{loc.year}</div>
                                <div className={styles.locationName}>{loc.name}</div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
                                    {loc.type}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                    {loc.address}
                                </div>
                            </div>
                            <div className={styles.imageSide}>
                                <div className={styles.imagePlaceholder}>
                                    Location Image
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
