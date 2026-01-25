'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <motion.div
                className={styles.footerContainer}
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
                {/* Left Side: Contact */}
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <span className={styles.label}>Call us</span>
                        <a href="tel:01617060360" className={styles.value}>0161 706 0360</a>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.label}>Email us</span>
                        <a href="mailto:contact@compactpersonnel.co.uk" className={styles.value}>contact@compactpersonnel.co.uk</a>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.label}>Find us at</span>
                        <p className={styles.addressValue}>
                            A18, The Embankment, Business Park, Riverview,<br />
                            Heaton Mersey, Stockport SK4 3GN
                        </p>
                    </div>

                    <div className={styles.copyrightDesktop}>
                        © 2026 Compact Personnel All rights reserved.
                    </div>
                </div>

                {/* Right Side: Links */}
                <div className={styles.linksContainer}>
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Links</h4>
                        <Link href="#" className={styles.link}>Why Choose Compact</Link>
                        <Link href="#" className={styles.link}>Our Locations</Link>
                        <Link href="#" className={styles.link}>Work With Us</Link>
                        <Link href="#" className={styles.link}>Resources</Link>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Our Locations</h4>
                        <Link href="#" className={styles.link}>Residential Care</Link>
                        <Link href="#" className={styles.link}>Supported Living</Link>
                        <Link href="#" className={styles.link}>Therapeutic Activities</Link>
                        <Link href="#" className={styles.link}>Rapid Review & Resettlement</Link>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Further Information</h4>
                        <Link href="#" className={styles.link}>Compliance, Health & Safety</Link>
                        <Link href="#" className={styles.link}>Terms of Service</Link>
                    </div>
                </div>

                <div className={styles.copyrightMobile}>
                    © 2026 Compact Personnel All rights reserved.
                </div>
            </motion.div>
        </footer>
    );
}
