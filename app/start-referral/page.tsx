import Header from '../components/Header';
import Footer from '../components/Footer';
import ReferralHero from '../components/ReferralHero';
import ReferralForm from '../components/ReferralForm';

export default function StartReferralPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <ReferralHero />

            <ReferralForm />

            <Footer />
        </main>
    );
}
