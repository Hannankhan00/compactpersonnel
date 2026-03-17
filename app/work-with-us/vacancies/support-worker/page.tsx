import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './SupportWorker.module.css';

export default function SupportWorkerPage() {
    
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Support Worker"
                subtitle="Transform Lives as a Support Worker!"
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Job Type</span>
                        <span className={styles.metaValue}>Full-time, Part-time, Permanent, Bank</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Shifts</span>
                        <span className={styles.metaValue}>8hr, 10hr, 12hr, Day, Sleep</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Location</span>
                        <span className={styles.metaValue}>Manchester (In-person)</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#444' }}>
                        Compact Personnel Limited is a leading independent provider of innovative and dynamic support services for adults with learning disabilities and associated developmental needs across the United Kingdom.
                    </p>

                    <p style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '2rem' }}>
                        PLEASE NOTE: We do not offer sponsorship for this role.
                    </p>

                    <h3 className={styles.sectionTitle}>Why Choose Compact Personnel?</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Enhanced DBS Paid for You</strong> – A smooth start to your role.</li>
                        <li className={styles.listItem}><strong>Generous Holiday Allowance</strong> – 28 days per year for support workers.</li>
                        <li className={styles.listItem}><strong>Complimentary Meals & Drinks</strong> – Enjoy these during your shifts.</li>
                        <li className={styles.listItem}><strong>Workplace Pension Scheme</strong> – Secure your future with us.</li>
                        <li className={styles.listItem}><strong>Refer a Friend Scheme</strong> – Earn rewards for referrals.</li>
                        <li className={styles.listItem}><strong>No Uniform Required</strong> – Work comfortably in your own casual clothes.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>What We’re Looking for</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>A positive, can-do attitude.</li>
                        <li className={styles.listItem}>Teamwork skills and a willingness to collaborate effectively.</li>
                        <li className={styles.listItem}>A driving license is preferred but not essential.</li>
                        <li className={styles.listItem}>Enthusiasm to learn – full training provided.</li>
                        <li className={styles.listItem}>Flexibility to work 39 hours per week (4–5 days) or part-time hours.</li>
                        <li className={styles.listItem}>Passion for outdoor activities and adventure.</li>
                        <li className={styles.listItem}>Experience with personal care (males and females) is beneficial but not essential.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Eligibility</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>You must have the right to work in the UK.</li>
                    </ul>
                </div>
            </div>

            <JobApplicationForm jobTitle="Support Worker" styles={styles} />

            <Footer />
        </main>
    );
}
