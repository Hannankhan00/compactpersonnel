import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './HealthPromotionOfficer.module.css';

export default function HealthPromotionOfficerPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Health Promotion Officer - Supported Living"
                subtitle="Promote healthier lifestyles and independence in supported living settings."
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Date Posted</span>
                        <span className={styles.metaValue}>24 November 2025</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Pay</span>
                        <span className={styles.metaValue}>GBP 23,000.00 - GBP 25,000.00 per year</span>
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
                        <span className={styles.metaValue}>Level 5 Diploma in Health & Social Care</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Experience</span>
                        <span className={styles.metaValue}>1 year</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Driving License</span>
                        <span className={styles.metaValue}>Required</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <h3 className={styles.sectionTitle}>Job Overview</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#444' }}>
                        To promote the health, wellbeing, and independence of individuals living in supported living accommodation.
                        You will design, implement, and evaluate health and wellbeing initiatives so service users, including
                        vulnerable young people and adults, are empowered to make positive lifestyle choices.
                    </p>

                    <h3 className={styles.sectionTitle}>Key Responsibilities</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Develop and deliver health promotion activities such as nutrition, physical activity, smoking cessation, and mental health awareness.</li>
                        <li className={styles.listItem}>Encourage service users to adopt healthier lifestyles and manage their own wellbeing.</li>
                        <li className={styles.listItem}>Provide advice on healthy eating, exercise, sexual health, substance misuse, and emotional wellbeing.</li>
                        <li className={styles.listItem}>Work with support staff, nurses, social workers, and external healthcare providers.</li>
                        <li className={styles.listItem}>Assess the health needs of individuals in supported living.</li>
                        <li className={styles.listItem}>Promote programmes and services through presentations and community events.</li>
                        <li className={styles.listItem}>Distribute promotional materials effectively across different locations.</li>
                        <li className={styles.listItem}>Organize and participate in outreach activities to increase awareness and participation.</li>
                        <li className={styles.listItem}>Build positive relationships with community members, organizations, and stakeholders.</li>
                        <li className={styles.listItem}>Collect feedback and data to evaluate the effectiveness of health promotion activities.</li>
                        <li className={styles.listItem}>Adhere to safeguarding policies to protect vulnerable individuals.</li>
                        <li className={styles.listItem}>Maintain a professional appearance and behavior during promotional activities.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Requirements</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Degree or diploma in Public Health, Health Promotion, or equivalent experience.</li>
                        <li className={styles.listItem}>Ability to communicate complex health information clearly and confidently.</li>
                        <li className={styles.listItem}>Outstanding organizational skills with the ability to manage multiple outreach activities simultaneously.</li>
                        <li className={styles.listItem}>Confidence engaging diverse audiences across different settings.</li>
                        <li className={styles.listItem}>Previous experience in promotion, public speaking, or community outreach is preferred but not essential.</li>
                        <li className={styles.listItem}>Must be organized, proactive, and enthusiastic about promoting health initiatives.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Benefits</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Company pension.</li>
                        <li className={styles.listItem}>In-person role in a supportive environment.</li>
                    </ul>
                </div>
            </div>

            <JobApplicationForm jobTitle="Health Promotion Officer - Supported Living" styles={styles} />

            <Footer />
        </main>
    );
}
