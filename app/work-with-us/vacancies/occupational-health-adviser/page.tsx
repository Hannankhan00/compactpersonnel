import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './OccupationalHealthAdviser.module.css';

export default function OccupationalHealthAdviserPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Occupational Health Adviser"
                subtitle="Support employee health, safety, and wellbeing in a professional occupational health role."
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
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
                        <span className={styles.metaValue}>Min Level 5 Diploma in Health &amp; Social Care (progressing to Level 7)</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <h3 className={styles.sectionTitle}>Job Duties</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Conduct health assessments and medical screenings for employees.</li>
                        <li className={styles.listItem}>Provide professional advice on workplace health, safety, and wellbeing.</li>
                        <li className={styles.listItem}>Manage sickness absence cases and support return-to-work programs.</li>
                        <li className={styles.listItem}>Carry out fitness-for-work assessments and provide recommendations to management.</li>
                        <li className={styles.listItem}>Maintain accurate and confidential employee health records in line with GDPR and company policies.</li>
                        <li className={styles.listItem}>Deliver health surveillance programs, including vaccinations and health promotion initiatives.</li>
                        <li className={styles.listItem}>Advise managers and employees on occupational health matters and workplace adjustments.</li>
                        <li className={styles.listItem}>Identify workplace health risks and contribute to risk assessments.</li>
                        <li className={styles.listItem}>Promote employee wellbeing through education, guidance, and support initiatives.</li>
                        <li className={styles.listItem}>Liaise with HR, management, and external healthcare professionals when required.</li>
                        <li className={styles.listItem}>Ensure compliance with occupational health legislation and best practice standards.</li>
                        <li className={styles.listItem}>Prepare reports and documentation relating to occupational health cases and assessments.</li>
                        <li className={styles.listItem}>Support the development and implementation of workplace wellbeing strategies.</li>
                        <li className={styles.listItem}>Participate in audits, training sessions, and continuous professional development activities.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Requirements</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Minimum Level 5 Diploma in Health &amp; Social Care, progressing to Level 7.</li>
                        <li className={styles.listItem}>Sound knowledge of occupational health legislation, GDPR, and best practice standards.</li>
                        <li className={styles.listItem}>Ability to conduct professional health assessments and communicate findings clearly.</li>
                        <li className={styles.listItem}>Strong organisational skills with the ability to manage multiple cases simultaneously.</li>
                        <li className={styles.listItem}>Excellent interpersonal skills and the ability to liaise effectively with HR, management, and healthcare professionals.</li>
                        <li className={styles.listItem}>Commitment to confidentiality, professional standards, and continuous development.</li>
                    </ul>
                </div>
            </div>

            <JobApplicationForm jobTitle="Occupational Health Adviser" styles={styles} />

            <Footer />
        </main>
    );
}
