import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './NursingVacancy.module.css';

export default function NursingVacancyPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Nursing Auxiliaries and Assistants"
                subtitle="Join our compassionate team in Manchester"
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Salary</span>
                        <span className={styles.metaValue}>£23,000.00 Per Annum</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Job Type</span>
                        <span className={styles.metaValue}>Full Time</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Location</span>
                        <span className={styles.metaValue}>Manchester</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <h3 className={styles.sectionTitle}>Requirements</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Must have driving license.</li>
                        <li className={styles.listItem}>Must have one year diploma in relevant field.</li>
                        <li className={styles.listItem}>Must have one year experience in relevant field.</li>
                        <li className={styles.listItem}>Must be fluent in English.</li>
                        <li className={styles.listItem}>Must have DBS or Police Clearance Certificate.</li>
                        <li className={styles.listItem}>Age 20-45 Years.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Responsibilities</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Supports healthcare team in providing direct clients care.</li>
                        <li className={styles.listItem}>Assists with activities of daily living (ADLs) such as bathing, grooming, and dressing.</li>
                        <li className={styles.listItem}>Helps with mobility, transfers, and positioning of clients.</li>
                        <li className={styles.listItem}>Reports any significant changes or abnormalities to the healthcare team.</li>
                        <li className={styles.listItem}>Creates and maintains a safe and clean environment for clients.</li>
                        <li className={styles.listItem}>Follows infection control protocols.</li>
                        <li className={styles.listItem}>Maintains cleanliness of clients rooms and common areas.</li>
                        <li className={styles.listItem}>Assists clients and their families in coping with illness or injury.</li>
                        <li className={styles.listItem}>Offers emotional support and actively listens to clients concerns.</li>
                        <li className={styles.listItem}>Provides comfort during difficult times.</li>
                        <li className={styles.listItem}>Responsible for accurate and timely documentation of client’s information.</li>
                        <li className={styles.listItem}>Works collaboratively with care managers, nurses, and other healthcare professionals.</li>
                        <li className={styles.listItem}>Actively participates in clients care planning.</li>
                        <li className={styles.listItem}>Contributes to interdisciplinary meetings and discussions.</li>
                    </ul>
                </div>
            </div>

            <JobApplicationForm jobTitle="Nursing Auxiliaries and Assistants" styles={styles} />

            <Footer />
        </main>
    );
}
