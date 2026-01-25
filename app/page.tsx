import Link from 'next/link';
import Image from 'next/image';
import HeroCards from './components/HeroCards';
import Header from './components/Header';
import FadeIn from './components/FadeIn';
import ServiceCarousel from './components/ServiceCarousel';
import Partners from './components/Partners';
import WhyChooseSection from './components/WhyChooseSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import ApproachCarousel from './components/ApproachCarousel';
import TrustedSection from './components/TrustedSection';
import AchievementsSection from './components/AchievementsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ReferralSection from './components/ReferralSection';
import WorkWithUsSection from './components/WorkWithUsSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation - Inline for now for 'Home Page' focus */}
      {/* Header / Navigation */}
      {/* Navigation - Inline for now for 'Home Page' focus */}
      <Header />

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

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <FadeIn className={styles.missionHeadline}>
            We help adults with complex needs achieve incredible outcomes in fun, therapeutic settings.
          </FadeIn>
          <div className={styles.missionContent}>
            <FadeIn delay={0.2}>
              <p className={styles.missionText}>
                We promote and support independence, choice and social inclusion for people with a <strong>Learning Disability</strong> or who are <strong>Neurodiverse</strong> within a supportive, safe, social and stimulating network.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={styles.missionText}>
                Our model for your Support will be designed around your needs increasing independence, choice and promoting self-determination.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={styles.missionText}>
                We specialise in supporting people to take part in community therapeutic activities, such as hiking in the Peak District, rock climbing, horse riding, cycling, swimming and boating. We will help you to take <strong>Positive Risks</strong> to grow your independence and live a fulfilling life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <ServiceCarousel />

      {/* Partners Section */}
      <Partners />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Approach Carousel */}
      <ApproachCarousel />

      {/* Work With Us Section */}
      <WorkWithUsSection />

      {/* Trusted Organisation Section */}
      <TrustedSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Referral Section */}
      <ReferralSection />

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

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
