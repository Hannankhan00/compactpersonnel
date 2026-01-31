'use client';

import styles from './ContactSection.module.css';
import InteractiveButton from './InteractiveButton';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build email body
        const emailBody = `
NEW CONTACT FORM MESSAGE

From: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Subject: ${formData.subject}

Message:
${formData.message}
        `.trim();

        const subject = formData.subject;

        // Create Gmail Compose URL
        // Format: https://mail.google.com/mail/?view=cm&fs=1&to=TO&su=SUBJECT&body=BODY
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@compactpersonnel.co.uk&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open Gmail in a new tab
        window.open(gmailLink, '_blank');

        // Show confirmation
        setTimeout(() => {
            alert('We have opened a Gmail window for you to send your message. Please review and click Send.');
            setIsSubmitting(false);
        }, 500);
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
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        <div className={styles.itemContent}>
                            <span className={styles.itemLabel}>Head Office</span>
                            <span className={styles.itemValue}>
                                Ivy Mill Business Centre, Sc1-9,<br />
                                Crown St, Failsworth,<br />
                                Manchester M35 9BG
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
                <p className={styles.formSubtitle}>Fill out the form below and your email client will open with the message ready to send.</p>

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

                    <InteractiveButton
                        text={isSubmitting ? "Opening..." : "Send Message"}
                        type="submit"
                        variant="default"
                    />
                </form>
            </div>
        </section>
    );
}
