import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CareersHero from '../../components/CareersHero';
import InteractiveButton from '../../components/InteractiveButton';

export default function VacanciesPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <CareersHero
                title="Our Vacancies"
                subtitle="Join our dedicated team and make a real difference in people's lives."
            />

            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>Current Opportunities</h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {/* Job Card 1 */}
                    <div style={{
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid #eaeaea',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: '#0056b3', marginBottom: '0.5rem' }}>Support Worker</h3>
                                <p style={{ color: '#666', marginBottom: '0.5rem' }}>Location: Various Locations | Type: Full-time / Part-time</p>
                                <p style={{ fontWeight: 'bold' }}>Salary: £26,364 per annum (pro rata)</p>
                            </div>
                            <InteractiveButton text="Apply Now" href="/contact" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            We are looking for dedicated Support Workers to join our team. No previous experience is required as full training is provided.
                            You will be supporting individuals with learning disabilities and complex needs to live independent and fulfilling lives.
                        </p>
                    </div>

                    {/* Job Card 2 */}
                    <div style={{
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid #eaeaea',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: '#0056b3', marginBottom: '0.5rem' }}>Team Leader</h3>
                                <p style={{ color: '#666', marginBottom: '0.5rem' }}>Location: Manchester | Type: Full-time</p>
                                <p style={{ fontWeight: 'bold' }}>Salary: Competitive</p>
                            </div>
                            <InteractiveButton text="Apply Now" href="/contact" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            An exciting opportunity for an experienced Team Leader to oversee a small team of support workers.
                            You will ensure high-quality care delivery and support the service manager in daily operations.
                        </p>
                    </div>

                    {/* Job Card 3 */}
                    <div style={{
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid #eaeaea',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: '#0056b3', marginBottom: '0.5rem' }}>Waking Night Support</h3>
                                <p style={{ color: '#666', marginBottom: '0.5rem' }}>Location: Sheffield | Type: Part-time</p>
                                <p style={{ fontWeight: 'bold' }}>Salary: £11.44 - £12.50 per hour</p>
                            </div>
                            <InteractiveButton text="Apply Now" href="/contact" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            Provide essential support during the night, ensuring the safety and well-being of the people we support.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
