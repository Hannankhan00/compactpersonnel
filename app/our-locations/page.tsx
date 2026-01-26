import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationsHero from '../components/LocationsHero';
import HereToHelpSection from '../components/HereToHelpSection';
import HeadOfficeLocation from '../components/HeadOfficeLocation';
import LocationsList from '../components/LocationsList';

export default function OurLocationsPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <LocationsHero />
            <LocationsList />
            <HeadOfficeLocation />
            <HereToHelpSection />
            <Footer />
        </main>
    );
}
