import Link from 'next/link';
import Image from 'next/image';
import HeroCards from './components/HeroCards';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation - Inline for now for 'Home Page' focus */}
      {/* Header / Navigation */}
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

          {/* Navigation Items */}
          <nav className={styles.nav}>
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

          {/* Contact Button */}
          <Link href="#" className={styles.contactButton}>
            Contact Us
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Video Background Placeholder */}
        <div className={styles.heroVideoContainer}>
          <video
            autoPlay
            muted
            loop
            className={styles.heroVideo}
            poster="/hero-placeholder.jpg"
          >
            {/* User to replace src with actual video */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </div>

        {/* Glass Cards Container */}
        <HeroCards />
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div>
              <h3 className={styles.cardTitle}>Residential Care</h3>
              <p className={styles.cardDescription}>
                Small, nature-based units providing 24/7 care for people with learning disabilities.
              </p>
            </div>
            <Link href="#" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div>
              <h3 className={styles.cardTitle}>Supported Living</h3>
              <p className={styles.cardDescription}>
                Empowering individuals with complex needs to live independently in their own homes.
              </p>
            </div>
            <Link href="#" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div>
              <h3 className={styles.cardTitle}>Therapeutic Activities</h3>
              <p className={styles.cardDescription}>
                Bespoke weekly programmes including hiking, climbing, and swimming.
              </p>
            </div>
            <Link href="#" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div>
              <h3 className={styles.cardTitle}>Rapid Review</h3>
              <p className={styles.cardDescription}>
                Supporting individuals at risk of placement collapse to avoid institutionalisation.
              </p>
            </div>
            <Link href="#" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Why Choose Compact Personnel?
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            We believe in positive risk-taking to widen the world of those we support.
            Our holistic philosophy utilizes strengths to develop new skills and meaningful relationships.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent-color)' }}>✔</span> Specialized Support
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent-color)' }}>✔</span> Nature-focused
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent-color)' }}>✔</span> Community Integration
            </li>
          </ul>
        </div>
        <div className={styles.aboutImage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
          Image: Active Support in Nature
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#023e8a', color: 'white', padding: '4rem 2rem', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>COMPACT PERSONNEL</h3>
            <p style={{ maxWidth: '300px', opacity: 0.8 }}>
              Helping adults with complex needs achieve incredible outcomes.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <strong>Get in Touch</strong>
            <span>Email: info@compactpersonnel.co.uk</span>
            <span>Phone: 0123 456 7890</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
