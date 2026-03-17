import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './TeamLeader.module.css';

export default function TeamLeaderPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Team Leader"
                subtitle="Lead our team to deliver exceptional care"
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <JobApplicationForm jobTitle="Team Leader" styles={styles} />

            <Footer />
        </main>
    );
}
