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
                    {/* Job Card 1 - Health Promotion Officer */}
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
                                <h3 style={{ fontSize: '1.5rem', color: '#0056b3', marginBottom: '0.5rem' }}>Health Promotion Officer - Supported Living</h3>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Type: Full Time</p>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Location: Manchester (Greater Manchester)</p>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Pay: GBP 23,000 - GBP 25,000</p>
                                </div>
                            </div>
                            <InteractiveButton text="Apply Now" href="/work-with-us/vacancies/health-promotion-officer-supported-living" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            We are looking for a Health Promotion Officer to improve health, wellbeing, and independence for people in supported living.
                            You will deliver practical health initiatives, lead community outreach, and work with multidisciplinary teams to help service users make positive lifestyle choices.
                        </p>
                    </div>

                    {/* Job Card 1 - Support Worker */}
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
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Type: Full Time</p>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Location: Manchester</p>
                                </div>
                            </div>
                            <InteractiveButton text="Apply Now" href="/work-with-us/vacancies/support-worker" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            As a Support Worker, you will play a vital role in the lives of the people we support. You will help individuals with learning disabilities, autism, and complex needs to live as independently as possible. Your day-to-day duties will include personal care, medication administration, and supporting with daily living skills such as cooking, cleaning, and budgeting. You will also support individuals to access the community and engage in activities they enjoy. No two days are the same, and you will be part of a supportive team dedicated to making a difference.
                        </p>
                    </div>

                    {/* Job Card 2 - Team Leader */}
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
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Type: Full Time</p>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Location: Manchester</p>
                                </div>
                            </div>
                            <InteractiveButton text="Apply Now" href="/work-with-us/vacancies/team-leader" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            We are seeking an experienced and motivated Team Leader to join our management team. You will be responsible for leading a team of Support Workers, ensuring that the highest standards of care are delivered. Your role will involve staff supervision, rota management, care planning, and liaising with external professionals. You will also work closely with the Service Manager to ensure the service meets regulatory standards and provides a safe and effective environment for the people we support.
                        </p>
                    </div>

                    {/* Job Card 3 - Nursing Auxiliaries and Assistants */}
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
                                <h3 style={{ fontSize: '1.5rem', color: '#0056b3', marginBottom: '0.5rem' }}>Nursing Auxiliaries and Assistants</h3>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Type: Full Time</p>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Location: Manchester</p>
                                </div>
                            </div>
                            <InteractiveButton text="Apply Now" href="/work-with-us/vacancies/nursing-auxiliaries-and-assistants" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            We are looking for compassionate Nursing Auxiliaries and Assistants to support our clinical team in delivering high-quality care to individuals with complex health needs. You will work under the supervision of registered nurses, assisting with clinical tasks, personal care, and monitoring patient health. Experience in a healthcare setting is preferred, but full training will be provided. This is a rewarding role where you can develop your clinical skills and make a real impact on the health and well-being of the people we support.
                        </p>
                    </div>

                    {/* Job Card 4 - Waking Night Support */}
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
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Type: Part Time</p>
                                    <p style={{ color: '#666', fontWeight: 600 }}>Location: Manchester</p>
                                </div>
                            </div>
                            <InteractiveButton text="Apply Now" href="/work-with-us/vacancies/waking-night-support" />
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#444' }}>
                            Our Waking Night Support staff are essential in ensuring the safety and well-being of the people we support during the night. You will be responsible for monitoring individuals, providing personal care if needed, and ensuring the environment is secure. You will also be responsible for light domestic duties and updating records. This role requires you to be alert and responsive throughout the night, providing peace of mind to the individuals and their families.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
