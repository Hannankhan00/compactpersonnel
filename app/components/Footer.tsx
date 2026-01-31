'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';
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
                        <a href="tel:01614785814" className={styles.value}>0161 478 5814</a>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.label}>Email us</span>
                        <a href="mailto:info@compactpersonnel.co.uk" className={styles.value}>info@compactpersonnel.co.uk</a>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.label}>Find us at</span>
                        <p className={styles.addressValue}>
                            Ivy Mill Business Centre, Sc1-9, Crown St,<br />
                            Failsworth, Manchester M35 9BG
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className={styles.socialLinks}>
                        <a
                            href="https://x.com/CompactPsnl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Follow us on X (Twitter)"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/compact-personnel/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Follow us on LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className={styles.copyrightDesktop}>
                        © 2026 Compact Personnel All rights reserved.
                    </div>
                </div>

                {/* Right Side: Links */}
                <div className={styles.linksContainer}>
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Links</h4>
                        <Link href="/why-choose-us" className={styles.link}>Why Choose Compact</Link>
                        <Link href="/our-locations" className={styles.link}>Our Locations</Link>
                        <Link href="/our-service-model" className={styles.link}>Our Service Model</Link>
                        <Link href="/meet-the-team" className={styles.link}>Meet The Team</Link>
                        <Link href="/careers" className={styles.link}>Careers</Link>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Our Services</h4>
                        <Link href="/services/supported-living" className={styles.link}>Supported Living</Link>
                        <Link href="/services/domiciliary-care" className={styles.link}>Domiciliary Care</Link>
                        <Link href="/services/complex-care" className={styles.link}>Complex Care</Link>
                        <Link href="/services/mental-health-support" className={styles.link}>Mental Health Support</Link>
                        <Link href="/services/live-in-care" className={styles.link}>Live in Care</Link>
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
