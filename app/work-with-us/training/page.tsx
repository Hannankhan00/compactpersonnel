import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CareersHero from '../../components/CareersHero';
import Image from 'next/image';
import InteractiveButton from '../../components/InteractiveButton';

export default function TrainingPage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <CareersHero
                title="Training & Development"
                subtitle="Unlock your potential with our industry-leading training programmes."
            />

            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

                {/* Section 1: Induction */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333' }}>Comprehensive Induction</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
                                Every new member of our team undergoes a thorough induction process. This ensures you are fully equipped with the knowledge and skills needed to provide exceptional support from day one.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Care Certificate Completion', 'Health & Safety Training', 'Medication Administration', 'Positive Behaviour Support'].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#444' }}>
                                        <span style={{ height: '8px', width: '8px', backgroundColor: '#0056b3', borderRadius: '50%', marginRight: '1rem' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            height: '350px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#adb5bd'
                        }}>
                            {/* Placeholder for training image */}
                            <div style={{ textAlign: 'center' }}>
                                <p>Training Image Placeholder</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Ongoing Development */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div style={{
                            height: '350px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#adb5bd',
                            order: 1 // On mobile this might flip, need responsive check or just standard order
                        }}>
                            {/* Placeholder for another image */}
                            <div style={{ textAlign: 'center' }}>
                                <p>Development Image Placeholder</p>
                            </div>
                        </div>
                        <div style={{ order: 0 }}> {/* Use order to swap on desktop if needed, simplified here */}
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333' }}>Ongoing Development</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
                                Learning doesn't stop after induction. We are committed to your continuous professional development (CPD). We support you to gain nationally recognised qualifications.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555' }}>
                                Whether you want to specialise in a certain area like autism support or aim for management roles, we provide the pathway and funding to help you succeed.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* Call to Action */}
            <div style={{ backgroundColor: '#f0f4f8', padding: '5rem 2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Ready to start learning?</h3>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: '#666' }}>
                    Join a team that invests in YOU. Apply for one of our vacancies today.
                </p>
                {/* Reusing button component */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InteractiveButton text="View Vacancies" href="/work-with-us/vacancies" />
                </div>
            </div>

            <Footer />
        </main>
    );
}
