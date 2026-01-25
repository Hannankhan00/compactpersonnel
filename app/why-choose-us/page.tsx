import Header from '../components/Header';
import Footer from '../components/Footer';
import WhyChooseHero from '../components/WhyChooseHero';
import PhilosophySection from '../components/PhilosophySection';
import OurValuesSection from '../components/OurValuesSection';
import RegulatorySection from '../components/RegulatorySection';
import EqualitySection from '../components/EqualitySection';
import RecognisedSection from '../components/RecognisedSection';
import Partners from '../components/Partners';
import WorkWithUsSection from '../components/WorkWithUsSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';

export default function WhyChooseUsPage() {
    return (
        <main style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <WhyChooseHero />
            <PhilosophySection />
            <OurValuesSection />
            <RegulatorySection />
            <EqualitySection />
            <RecognisedSection />
            <Partners />
            <SuccessStoriesSection />
            <WorkWithUsSection />
            <Footer />
        </main>
    );
}
