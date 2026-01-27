'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './InteractiveButton.module.css';

interface InteractiveButtonProps {
    text: string;
    onClick?: () => void;
    className?: string; // Additional classes for positioning
    type?: "button" | "submit" | "reset";
    href?: string;
    target?: string;
    rel?: string;
    variant?: 'default' | 'header';
}

export default function InteractiveButton({ text, onClick, className, type = "button", href, variant = 'default', target, rel }: InteractiveButtonProps) {
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const isHeader = variant === 'header';
    const buttonClasses = `${styles.button} ${isHeader ? styles.headerVariant : ''} ${className || ''}`;

    const content = (
        <>
            <span className={styles.text}>{text}</span>
            {!isHeader && (
                <span className={styles.arrow}>
                    <ArrowRight size={18} strokeWidth={2.5} />
                </span>
            )}
            <div className={styles.glow}></div>
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={buttonClasses}
                style={{ textDecoration: 'none', display: 'inline-flex' }}
                onMouseMove={handleMouseMove}
                target={target}
                rel={rel}
            >
                <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'contents' }}
                >
                    {content}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button
            className={buttonClasses}
            onClick={onClick}
            type={type}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
