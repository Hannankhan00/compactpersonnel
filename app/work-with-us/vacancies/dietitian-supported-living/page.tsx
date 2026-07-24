import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './DietitianSupportedLiving.module.css';

export default function DietitianSupportedLivingPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Dietitian – Supported Living"
                subtitle="Promote healthy eating, independence, and tailored nutritional care in supported living settings."
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Pay</span>
                        <span className={styles.metaValue}>GBP 25,000.00 - GBP 30,000.00 per year</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Location</span>
                        <span className={styles.metaValue}>Manchester (Greater Manchester)</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Job Type</span>
                        <span className={styles.metaValue}>Full-time</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Qualification</span>
                        <span className={styles.metaValue}>Degree in Dietetics</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <h3 className={styles.sectionTitle}>Job Overview</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#444' }}>
                        To assess, plan, and implement nutritional care and support for individuals living in supported living accommodation. The Dietitian will promote healthy eating, support service users with specific dietary needs or medical conditions, and work with staff to ensure service users achieve improved health and independence through good nutrition.
                    </p>

                    <h3 className={styles.sectionTitle}>Key Responsibilities</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Assess the nutritional needs of service users, considering medical history, lifestyle, and personal preferences.</li>
                        <li className={styles.listItem}>Develop personalised dietary care plans to support health, wellbeing, and independence.</li>
                        <li className={styles.listItem}>Provide advice on managing medical conditions e.g., diabetes, obesity, eating disorders, food intolerances.</li>
                        <li className={styles.listItem}>Educate service users on healthy eating, portion control, and balanced diets.</li>
                        <li className={styles.listItem}>Evaluate the effectiveness of nutritional interventions and contribute to service improvement.</li>
                        <li className={styles.listItem}>Ensure all work complies with confidentiality, safeguarding, and health &amp; safety policies.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Requirements</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Candidate must have a Degree in Dietetics.</li>
                        <li className={styles.listItem}>Strong communication and interpersonal skills to educate and empower service users.</li>
                        <li className={styles.listItem}>Ability to develop and monitor individualised dietary care plans effectively.</li>
                        <li className={styles.listItem}>Commitment to confidentiality, safeguarding, and health &amp; safety standards.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Benefits</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Company pension.</li>
                        <li className={styles.listItem}>Supportive multidisciplinary team environment.</li>
                    </ul>
                </div>
            </div>

            <JobApplicationForm jobTitle="Dietitian – Supported Living" styles={styles} />

            <Footer />
        </main>
    );
}
