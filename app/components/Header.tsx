'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';
import styles from '../page.module.css';
import InteractiveButton from './InteractiveButton';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const navItems = [
        {
            label: "About Us",
            dropdown: [
                { label: "Why Choose Us", href: "/why-choose-us" },
                { label: "Our Service Model", href: "/our-service-model" },
                { label: "Meet The Team", href: "/meet-the-team" },
                { label: "Our Locations", href: "/our-locations" }
            ]
        },
        {
            label: "Our Services",
            dropdown: [
                { label: "Supported Living", href: "/services/supported-living" },
                { label: "Domiciliary Care", href: "/services/domiciliary-care" },
                { label: "Complex Care", href: "/services/complex-care" },
                { label: "Mental Health Support", href: "/services/mental-health-support" },
                { label: "Live in Care", href: "/services/live-in-care" },
                { label: "Respite Care", href: "/services/respite-care" },
                { label: "Palliative & End of Life Care", href: "/services/palliative-end-of-life-care" },
                { label: "Hospital to Home", href: "/services/hospital-to-home" }
            ]
        },
        { label: "Complex Care", href: "#" },
        { label: "Mental Health Support", href: "#" },
        { label: "Careers", href: "/careers" },
        { label: "Start a Referral", href: "/start-referral" }
    ];

    const toggleExpanded = (index: number) => {
        setExpandedItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setExpandedItems([]);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    {/* Logo */}
                    <Link href="/" className={styles.logoContainer}>
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
                    </Link>

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
                            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <>
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={styles.hamburgerLine}></span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Sidebar */}
                {isMenuOpen && (
                    <>
                        <div className={styles.mobileOverlay} onClick={closeMenu}></div>
                        <div className={styles.mobileMenu}>
                            <div className={styles.mobileMenuHeader}>
                                <span className={styles.mobileMenuTitle}>Menu</span>
                                <button className={styles.mobileCloseBtn} onClick={closeMenu}>
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className={styles.mobileNav}>
                                {navItems.map((item, index) => (
                                    <div key={index} className={styles.mobileNavGroup}>
                                        {item.dropdown ? (
                                            <>
                                                <button
                                                    className={styles.mobileNavItem}
                                                    onClick={() => toggleExpanded(index)}
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`${styles.mobileChevron} ${expandedItems.includes(index) ? styles.mobileChevronOpen : ''}`}
                                                    />
                                                </button>
                                                {expandedItems.includes(index) && (
                                                    <div className={styles.mobileSubMenu}>
                                                        {item.dropdown.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                href={subItem.href}
                                                                className={styles.mobileSubItem}
                                                                onClick={closeMenu}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                className={styles.mobileNavItem}
                                                onClick={closeMenu}
                                            >
                                                <span>{item.label}</span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                            <div className={styles.mobileMenuFooter}>
                                <InteractiveButton
                                    text="Contact Us"
                                    href="#"
                                    className={styles.mobileContactBtn}
                                />
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
}
