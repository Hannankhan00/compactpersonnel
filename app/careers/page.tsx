import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersHero from '../components/CareersHero';
import WorkWithUsSection from '../components/WorkWithUsSection';

export default function CareersPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <CareersHero />
            {/* Additional styling wrapper if needed, or rely on component margins */}
            <div style={{ paddingBottom: '4rem' }}>
                <WorkWithUsSection />
            </div>
            <Footer />
        </main>
    );
}
