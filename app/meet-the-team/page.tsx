import Header from '../components/Header';
import Footer from '../components/Footer';
import MeetTheTeamHero from '../components/MeetTheTeamHero';
import HereToHelpSection from '../components/HereToHelpSection';
import TeamList from '../components/TeamList';

export default function MeetTheTeamPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <MeetTheTeamHero />
            <TeamList />
            <HereToHelpSection />
            <Footer />
        </main>
    );
}
