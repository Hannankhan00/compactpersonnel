'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './LocationsList.module.css';

const locations = [
    {
        year: '2023',
        name: 'Ivy Mill Business Centre',
        address: 'Crown St, Failsworth, Manchester M35 9BG',
        type: 'Head Office & Training',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
    },
    {
        year: '2024',
        name: 'Manchester Central',
        address: 'Manchester City Centre',
        type: 'Supported Living',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop'
    },
    {
        year: '2025',
        name: 'Cheshire East',
        address: 'Macclesfield, Cheshire',
        type: 'Residential Care',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
    },
    {
        year: '2025',
        name: 'Trafford House',
        address: 'Sale, Trafford',
        type: 'Supported Living',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop'
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
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '12px'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
