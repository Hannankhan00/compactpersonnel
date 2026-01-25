'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            label: "About Us",
            dropdown: [
                { label: "Why Choose Us", href: "/why-choose-us" },
                { label: "Our Service Model", href: "#" },
                { label: "Meet The Team", href: "#" },
                { label: "Our Locations", href: "#" }
            ]
        },
        {
            label: "Our Services",
            dropdown: [
                { label: "Supported Living", href: "#" },
                { label: "Domiciliary Care", href: "#" },
                { label: "Complex Care", href: "#" },
                { label: "Mental Health Support", href: "#" },
                { label: "Live in Care", href: "#" },
                { label: "Respite Care", href: "#" },
                { label: "Palliative & End of Life Care", href: "#" },
                { label: "Hospital to Home", href: "#" }
            ]
        },
        { label: "Complex Care", href: "#" },
        { label: "Mental Health Support", href: "#" },
        { label: "Resources", href: "#" },
        { label: "Start a Referral", href: "#" }
    ];

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
                        {navItems.map((item, index) => (
                            <div key={index} className={item.dropdown ? styles.navGroup : ''}>
                                <Link href={item.href || '#'} className={styles.navItem}>
                                    {item.label}
                                    {item.dropdown && <ChevronDown size={14} className={styles.chevron} />}
                                </Link>

                                {item.dropdown && (
                                    <div className={styles.dropdownMenu}>
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <Link key={subIndex} href={subItem.href} className={styles.dropdownItem}>
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
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
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href || '#'} className={styles.mobileNavItem}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
        </>
    );
}

