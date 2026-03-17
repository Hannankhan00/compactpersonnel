import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './WakingNight.module.css';

export default function WakingNightPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Waking Night Support"
                subtitle="Ensuring safety and comfort through the night"
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <JobApplicationForm jobTitle="Waking Night Support" styles={styles} />

            <Footer />
        </main>
    );
}
