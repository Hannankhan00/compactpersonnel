import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InteractiveButton from '../../components/InteractiveButton';
import styles from './ServicePage.module.css';
import { servicesData, ServiceSlug } from '../../lib/servicesData';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Generate static params for all services (SSG)
export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const serviceSlug = slug as ServiceSlug;
    const data = servicesData[serviceSlug];

    if (!data) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    {/* Background Gradient */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(2, 62, 138, 0.8))',
                        zIndex: -1
                    }} />

                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.subtitle}>{data.subtitle}</p>

                    <InteractiveButton
                        text="Make a Referral"
                        variant="default" // Using default style button
                        className={styles.heroBtn}
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.textColumn}>
                    <h3 className={styles.h3}>About This Service</h3>
                    <p>{data.description}</p>
                    <p>{data.detailedContent}</p>
                    <p>
                        We understand that every individual is unique. That's why our approach is always person-centered,
                        flexible, and adapted to meet changing needs. By focusing on strengths and aspirations,
                        we help people achieve outcomes they never thought possible.
                    </p>
                </div>

                <div className={styles.benefitsColumn}>
                    <h3 className={styles.h3}>Key Benefits</h3>
                    <ul className={styles.benefitsList}>
                        {data.benefits.map((benefit, index) => (
                            <li key={index} className={styles.benefitItem}>
                                <div className={styles.checkmark}>
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <InteractiveButton
                            text="Download Brochure"
                            variant="default"
                            href="#" // Placeholder for brochure
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Ready to find out more?</h2>
                <p className={styles.ctaText}>
                    Our team is here to answer any questions you have about our {data.title} services.
                    Contact us today to discuss how we can support you or your loved one.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <InteractiveButton text="Contact Us" href="/#contact" />
                    <InteractiveButton text="View Locations" href="/our-locations" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
