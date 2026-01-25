import Header from '../components/Header';
import Footer from '../components/Footer';
import WhyChooseHero from '../components/WhyChooseHero';
import PhilosophySection from '../components/PhilosophySection';
import OurValuesSection from '../components/OurValuesSection';

export default function WhyChooseUsPage() {
    return (
        <main style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <WhyChooseHero />
            <PhilosophySection />
            <OurValuesSection />
            <Footer />
        </main>
    );
}
