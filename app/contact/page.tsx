import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import ContactSection from '../components/ContactSection';
import HeadOfficeLocation from '../components/HeadOfficeLocation';

export default function ContactPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <ContactHero />

            <ContactSection />

            {/* Reusing the Map Component */}
            <div style={{ paddingBottom: '4rem' }}>
                <HeadOfficeLocation />
            </div>

            <Footer />
        </main>
    );
}
