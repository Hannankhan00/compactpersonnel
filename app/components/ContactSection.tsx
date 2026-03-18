'use client';

import styles from './ContactSection.module.css';
import InteractiveButton from './InteractiveButton';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const initialFormData = {
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormStatus(null);
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'We could not send your message right now.');
            }

            setFormStatus({ type: 'success', message: result.message });
            setFormData(initialFormData);
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: error instanceof Error
                    ? error.message
                    : 'We could not send your message right now.'
            });
        } finally {
            setIsSubmitting(false);
        }
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
                            <a href="tel:01614785814" className={styles.itemValue}>0161 478 5814</a>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <Mail size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Email Us</span>
                            <a href="mailto:info@compactpersonnel.co.uk" className={styles.itemValue}>info@compactpersonnel.co.uk</a>
                            <a href="mailto:referrals@compactpersonnel.co.uk" className={styles.itemValue} style={{ marginTop: '0.5rem' }}>referrals@compactpersonnel.co.uk</a>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Head Office</span>
                            <span className={styles.itemValue}>
                                Hilton House Office 1, B Block,<br />
                                4th Floor, Lord Street,<br />
                                Stockport, England, SK1 3NA
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
                <p className={styles.formSubtitle}>Fill out the form below and your message will be sent directly to our team.</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            placeholder="Your Name"
                        />
                    </div>

                    <div className={styles.formRow}>
                        <div className={`${styles.inputGroup} ${styles.halfInput}`}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                placeholder="email@example.com"
                            />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.halfInput}`}>
                            <label className={styles.label}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="07123 456789"
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            placeholder="How can we help?"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.textarea}
                            required
                            placeholder="Your message details..."
                        />
                    </div>

                    {formStatus ? (
                        <p
                            role="status"
                            aria-live="polite"
                            style={{
                                backgroundColor: formStatus.type === 'success' ? '#ecfdf3' : '#fef2f2',
                                border: `1px solid ${formStatus.type === 'success' ? '#16a34a' : '#dc2626'}`,
                                color: formStatus.type === 'success' ? '#166534' : '#991b1b',
                                borderRadius: '10px',
                                padding: '0.8rem 1rem',
                                marginBottom: '1rem',
                                fontSize: '0.95rem'
                            }}
                        >
                            {formStatus.message}
                        </p>
                    ) : null}

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
