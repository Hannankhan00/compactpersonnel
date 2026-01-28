'use client';

import styles from './ContactSection.module.css';
import InteractiveButton from './InteractiveButton';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Message sent successfully!");
    };

    return (
        <section className={styles.section}>
            {/* Info Column */}
            <div className={styles.infoColumn}>
                <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>Contact Information</h3>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <Phone size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Call Us</span>
                            <a href="tel:01617060360" className={styles.itemValue}>0161 706 0360</a>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <Mail size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Email Us</span>
                            <a href="mailto:contact@compactpersonnel.co.uk" className={styles.itemValue}>contact@compactpersonnel.co.uk</a>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Head Office</span>
                            <span className={styles.itemValue}>
                                A18, The Embankment,<br />
                                Business Park, Riverview,<br />
                                Heaton Mersey, Stockport SK4 3GN
                            </span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <Clock size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Office Hours</span>
                            <span className={styles.itemValue}>Mon - Fri: 9:00 AM - 5:00 PM<br />On-Call Support: 24/7</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Column */}
            <div className={styles.formColumn}>
                <h2 className={styles.formTitle}>Send us a Message</h2>
                <p className={styles.formSubtitle}>Fill out the form below and our team will get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input type="text" className={styles.input} required placeholder="Your Name" />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <div className={styles.inputGroup} style={{ flex: 1, minWidth: '250px' }}>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" className={styles.input} required placeholder="email@example.com" />
                        </div>
                        <div className={styles.inputGroup} style={{ flex: 1, minWidth: '250px' }}>
                            <label className={styles.label}>Phone Number</label>
                            <input type="tel" className={styles.input} placeholder="07123 456789" />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Subject</label>
                        <input type="text" className={styles.input} required placeholder="How can we help?" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.textarea} required placeholder="Your message details..." />
                    </div>

                    <InteractiveButton
                        text={isSubmitting ? "Sending..." : "Send Message"}
                        type="submit"
                        variant="default"
                    />
                </form>
            </div>
        </section>
    );
}
