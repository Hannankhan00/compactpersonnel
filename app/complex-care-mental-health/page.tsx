import Header from '../components/Header';
import Footer from '../components/Footer';
import ComplexCareHero from '../components/ComplexCareHero';
import HereToHelpSection from '../components/HereToHelpSection';
import styles from './ComplexCare.module.css';

export default function ComplexCarePage() {
    return (
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <ComplexCareHero />

            {/* Section 1: Support Overview */}
            <section className={styles.section}>
                <div className={styles.gridThree}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Who we support</h3>
                        <p className={styles.cardText}>
                            Adults who may have autism, learning disability and or mental health needs. Some people may experience high anxiety, trauma related responses, self harm risk, episodes of relapse, or difficulty maintaining routines without support.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>How we support safely</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Positive Behaviour Support (PBS) and proactive planning</li>
                            <li className={styles.listItem}>Clear risk assessment, reviews, and escalation routes</li>
                            <li className={styles.listItem}>Safeguarding, incident reporting and learning reviews</li>
                            <li className={styles.listItem}>Trauma aware communication and consistency</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Working with professionals</h3>
                        <p className={styles.cardText}>
                            We work alongside social workers, GPs, community mental health teams, psychology, occupational therapy and hospital discharge teams to keep plans aligned and reduce crisis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Staffing & Measurement */}
            <section className={styles.section} style={{ backgroundColor: '#f8fafc', padding: '4rem 2rem', borderRadius: '40px', margin: '2rem auto' }}>
                <div className={styles.gridTwo}>
                    <div>
                        <h3 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '2rem' }}>Staffing model</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Matching staff skills to support needs</li>
                            <li className={styles.listItem}>Shadow shifts and competency checks</li>
                            <li className={styles.listItem}>Supervision, debriefs, and reflective practice</li>
                            <li className={styles.listItem}>On call support and clear escalation routes</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '2rem' }}>What we measure</h3>
                        <div className={styles.highlightBox}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Tenancy sustainment</li>
                                <li className={styles.listItem}>Incident reduction and safer routines</li>
                                <li className={styles.listItem}>Appointment attendance</li>
                                <li className={styles.listItem}>Community engagement</li>
                                <li className={styles.listItem}>Progress against outcomes plans</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>
                                * Referrals are assessed based on coverage, staffing capacity, and specific exclusions to ensure clear expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Success Stories */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Success Stories</h2>
                <div className={styles.storiesGrid}>
                    {/* Story 1 */}
                    <div className={styles.storyCard}>
                        <div className={styles.storyHeader}>
                            <h3 className={styles.storyTitle}>Autism & Learning Disability Support</h3>
                        </div>
                        <div className={styles.storyContent}>
                            <p className={styles.cardText}>Adult with autism and learning disability experiencing distress in the community and difficulty maintaining routines.</p>

                            <span className={styles.subHeader}>What we did</span>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Introduced a consistent staff team and visual routine</li>
                                <li className={styles.listItem}>Built a PBS plan with clear proactive strategies</li>
                                <li className={styles.listItem}>Worked with professionals to keep plans aligned</li>
                            </ul>

                            <span className={styles.subHeader} style={{ color: '#0f4c81' }}>Outcome</span>
                            <p className={styles.cardText}>Improved daily stability and reduced incidents. Increased engagement with community activities.</p>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className={styles.storyCard}>
                        <div className={styles.storyHeader}>
                            <h3 className={styles.storyTitle}>Mental Health Support & Tenancy</h3>
                        </div>
                        <div className={styles.storyContent}>
                            <p className={styles.cardText}>Adult with recurring mental health episodes, periods of isolation and difficulty managing day to day tasks.</p>

                            <span className={styles.subHeader}>What we did</span>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Structured weekly goals and a simple relapse prevention plan</li>
                                <li className={styles.listItem}>Supported appointments and medication routines</li>
                                <li className={styles.listItem}>Used clear escalation routes and safeguarding actions</li>
                            </ul>

                            <span className={styles.subHeader} style={{ color: '#0f4c81' }}>Outcome</span>
                            <p className={styles.cardText}>Improved engagement with support and maintained tenancy with fewer crisis presentations.</p>
                        </div>
                    </div>

                    {/* Story 3 */}
                    <div className={styles.storyCard}>
                        <div className={styles.storyHeader}>
                            <h3 className={styles.storyTitle}>Complex Support & Safer Routines</h3>
                        </div>
                        <div className={styles.storyContent}>
                            <p className={styles.cardText}>Adult with complex presentation, high anxiety and history of unsafe choices when distressed.</p>

                            <span className={styles.subHeader}>What we did</span>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Created a clear risk plan and daily structure</li>
                                <li className={styles.listItem}>Staff competency checks and regular debriefs</li>
                                <li className={styles.listItem}>Focused on coping skills and meaningful activities</li>
                            </ul>

                            <span className={styles.subHeader} style={{ color: '#0f4c81' }}>Outcome</span>
                            <p className={styles.cardText}>Safer routines, improved coping strategies, and better outcomes in the community.</p>
                        </div>
                    </div>

                    {/* Story 4: Hospital to Home Transition */}
                    <div className={styles.storyCard}>
                        <div className={styles.storyHeader}>
                            <h3 className={styles.storyTitle}>Hospital to Home Transition</h3>
                        </div>
                        <div className={styles.storyContent}>
                            <p className={styles.cardText}>Adult stuck in long-term hospital setting due to complex risk profile and previous placement breakdowns.</p>

                            <span className={styles.subHeader}>What we did</span>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Facilitated a bespoke transition plan with hospital discharge teams</li>
                                <li className={styles.listItem}>Gradual staff introduction and environment acclimatization</li>
                                <li className={styles.listItem}>Implemented robust 24/7 support structure</li>
                            </ul>

                            <span className={styles.subHeader} style={{ color: '#0f4c81' }}>Outcome</span>
                            <p className={styles.cardText}>Successful discharge to own home, sustained tenancy for 12+ months, and significant quality of life improvement.</p>
                        </div>
                    </div>
                </div>
            </section>

            <HereToHelpSection />
            <Footer />
        </main>
    );
}
