import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceModelHero from '../components/ServiceModelHero';
import ServiceModelContent from '../components/ServiceModelContent';
import HereToHelpSection from '../components/HereToHelpSection';

export default function OurServiceModelPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <ServiceModelHero />
            <ServiceModelContent />
            <HereToHelpSection />
            <Footer />
        </main>
    );
}
