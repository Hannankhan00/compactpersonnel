import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CareersHero from '../../components/CareersHero';
import { CheckCircle2 } from 'lucide-react';

export default function BenefitsPage() {
    const benefits = [
        {
            title: "Competitive Salary",
            description: "We offer salaries that reflect your skills and dedication, with regular reviews."
        },
        {
            title: "Comprehensive Training",
            description: "Full induction and ongoing training opportunities, including NVQ qualifications."
        },
        {
            title: "Career Progression",
            description: "Clear pathways for advancement within the company for ambitious individuals."
        },
        {
            title: "Pension Scheme",
            description: "A contributory pension scheme to help you plan for your future."
        },
        {
            title: "Generous Leave",
            description: "28 days annual leave (including bank holidays) rising with service."
        },
        {
            title: "Employee Support",
            description: "Access to 24/7 employee assistance programme for wellbeing support."
        }
    ];

    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <CareersHero
                title="Employee Benefits"
                subtitle="We value our staff and offer a comprehensive package of rewards."
            />

            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', color: '#333' }}>Why Work With Us?</h2>
                <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto', color: '#666', lineHeight: '1.6' }}>
                    At Compact Personnel, we believe that happy, well-supported staff provide the best care.
                    That's why we invest heavily in your wellbeing and professional development.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {benefits.map((benefit, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            backgroundColor: '#f8f9fa',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <CheckCircle2 size={32} color="#00C853" style={{ marginRight: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', color: '#333', fontWeight: 'bold' }}>{benefit.title}</h3>
                            </div>
                            <p style={{ color: '#555', lineHeight: '1.6' }}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
