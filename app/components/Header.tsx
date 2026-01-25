'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    {/* Logo */}
                    <div className={styles.logoContainer}>
                        <div className={styles.logoIconImageWrapper}>
                            <Image
                                src="/assets/icon.png"
                                alt="Compact Personnel Logo"
                                width={70}
                                height={70}
                                className={styles.logoImage}
                            />
                        </div>
                        <div className={styles.logoText}>
                            <span className={styles.logoMain}>Compact</span>
                            <span className={styles.logoSub}>Personnel</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={`${styles.nav} ${styles.desktopNav}`}>
                        <Link href="#" className={styles.navItem}>
                            About Us <span className={styles.chevron}>⌄</span>
                        </Link>
                        <Link href="#" className={styles.navItem}>
                            Our Services <span className={styles.chevron}>⌄</span>
                        </Link>
                        <Link href="#" className={styles.navItem}>
                            How we do it <span className={styles.chevron}>⌄</span>
                        </Link>
                        <Link href="#" className={styles.navItem}>
                            Family <span className={styles.chevron}>⌄</span>
                        </Link>
                        <Link href="#" className={styles.navItem}>
                            Work With Us <span className={styles.chevron}>⌄</span>
                        </Link>
                        <Link href="#" className={styles.navItem}>
                            Resources
                        </Link>
                        <Link href="#" className={styles.navItem}>
                            Start a Referral
                        </Link>
                    </nav>

                    <div className={styles.headerActions}>
                        <InteractiveButton
                            text="Contact Us"
                            href="#"
                            className={styles.contactButton}
                            variant="header"
                        />
                        <button
                            className={styles.hamburger}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={styles.hamburgerLine}></span>
                            <span className={styles.hamburgerLine}></span>
                            <span className={styles.hamburgerLine}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <Link href="#" className={styles.mobileNavItem}>About Us</Link>
                        <Link href="#" className={styles.mobileNavItem}>Our Services</Link>
                        <Link href="#" className={styles.mobileNavItem}>How we do it</Link>
                        <Link href="#" className={styles.mobileNavItem}>Family</Link>
                        <Link href="#" className={styles.mobileNavItem}>Work With Us</Link>
                        <Link href="#" className={styles.mobileNavItem}>Resources</Link>
                        <Link href="#" className={styles.mobileNavItem}>Start a Referral</Link>
                    </div>
                )}
            </header>
        </>
    );
}
