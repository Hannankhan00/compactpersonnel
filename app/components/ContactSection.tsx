'use client';

import { motion } from 'framer-motion';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';

export default function ContactSection() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                {/* Left Side: Form */}
                <div className={styles.contactForm}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.contactTitle}>We’re here to help!</h2>
                        <p className={styles.contactText}>
                            Feel free to reach out if you need any assistance with our services.
                        </p>
                    </motion.div>

                    <form className={styles.contactFormGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.contactRow}>
                            <div className={styles.formGroup}>
                                <input type="text" placeholder="First Name*" className={styles.formInput} />
                            </div>
                            <div className={styles.formGroup}>
                                <input type="text" placeholder="Surname*" className={styles.formInput} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <input type="email" placeholder="Email Address*" className={styles.formInput} />
                        </div>

                        <div className={styles.formGroup}>
                            <input type="tel" placeholder="Phone Number*" className={styles.formInput} />
                        </div>

                        <div className={styles.formGroup}>
                            <textarea placeholder="Your Message*" className={styles.formTextarea}></textarea>
                        </div>

                        <p className={styles.contactDisclaimer}>
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                        </p>

                        <InteractiveButton
                            text="Send Message"
                            type="submit"
                            className={styles.contactButton}
                        />
                    </form>
                </div>

                {/* Right Side: Image Placeholder */}
                <div className={styles.contactImageContainer}>
                    <div className={styles.contactImagePlaceholder}></div>
                </div>
            </div>
        </section>
    );
}
