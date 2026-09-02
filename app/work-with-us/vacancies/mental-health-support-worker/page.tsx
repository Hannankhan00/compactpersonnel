import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './MentalHealthSupportWorker.module.css';

export default function MentalHealthSupportWorkerPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Mental Health Support Worker"
                subtitle="Support adults living with mental health conditions and complex support needs in supported living."
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Salary</span>
                        <span className={styles.metaValue}>£26,000 per annum</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Job Type</span>
                        <span className={styles.metaValue}>Full Time</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Location</span>
                        <span className={styles.metaValue}>Greater Manchester</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Sector</span>
                        <span className={styles.metaValue}>Supported Living / Health & Social Care</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <h3 className={styles.sectionTitle}>About the Role</h3>
                    <p className={styles.paragraph}>
                        We are seeking a caring, reliable and motivated Mental Health Support Worker to join our supported living service in Greater Manchester.
                    </p>
                    <p className={styles.paragraph}>
                        You will support adults living with mental health conditions and complex support needs, helping them to maintain their wellbeing, develop independent living skills and achieve their individual goals.
                    </p>
                    <p className={styles.paragraph}>
                        The role involves providing person-centred practical and emotional support while promoting dignity, choice, independence and recovery.
                    </p>

                    <h3 className={styles.sectionTitle}>Key Responsibilities</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Provide person-centred support in a supported living environment.</li>
                        <li className={styles.listItem}>Build positive and professional relationships with the people we support.</li>
                        <li className={styles.listItem}>Support individuals with daily living and independent living skills.</li>
                        <li className={styles.listItem}>Assist with personal care where required and outlined in the support plan.</li>
                        <li className={styles.listItem}>Support meal preparation, shopping, household tasks and maintaining a safe environment.</li>
                        <li className={styles.listItem}>Encourage participation in social, recreational and community activities.</li>
                        <li className={styles.listItem}>Support individuals to attend appointments and access appropriate services.</li>
                        <li className={styles.listItem}>Provide reassurance and support during periods of emotional distress.</li>
                        <li className={styles.listItem}>Monitor changes in mental health, mood and behaviour and report concerns promptly.</li>
                        <li className={styles.listItem}>Follow individual care plans, support plans and risk assessments.</li>
                        <li className={styles.listItem}>Support positive behaviour and use appropriate de-escalation techniques when required.</li>
                        <li className={styles.listItem}>Follow safeguarding procedures and report any concerns.</li>
                        <li className={styles.listItem}>Support medication routines where trained and authorised to do so.</li>
                        <li className={styles.listItem}>Maintain accurate daily records, support notes and incident reports.</li>
                        <li className={styles.listItem}>Attend staff handovers, team meetings and training.</li>
                        <li className={styles.listItem}>Work effectively with colleagues, families and other health and social care professionals.</li>
                        <li className={styles.listItem}>Maintain confidentiality, professional boundaries, dignity and respect at all times.</li>
                        <li className={styles.listItem}>Follow company policies, health and safety procedures and relevant legislation.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Person Specification</h3>
                    
                    <h4 className={styles.subSectionTitle}>Essential</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Caring, compassionate and patient approach.</li>
                        <li className={styles.listItem}>Genuine interest in supporting people with mental health needs.</li>
                        <li className={styles.listItem}>Good communication and listening skills.</li>
                        <li className={styles.listItem}>Ability to remain calm and professional in challenging situations.</li>
                        <li className={styles.listItem}>Ability to work independently and as part of a team.</li>
                        <li className={styles.listItem}>Reliable, responsible and professional attitude.</li>
                        <li className={styles.listItem}>Good observation and record-keeping skills.</li>
                        <li className={styles.listItem}>Commitment to safeguarding and person-centred care.</li>
                        <li className={styles.listItem}>Willingness to undertake required training.</li>
                    </ul>

                    <h4 className={styles.subSectionTitle}>Desirable</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Previous experience in mental health, supported living, healthcare or social care.</li>
                        <li className={styles.listItem}>Experience supporting adults with complex needs.</li>
                        <li className={styles.listItem}>Knowledge of mental health and recovery-focused support.</li>
                        <li className={styles.listItem}>Knowledge of safeguarding and risk management.</li>
                        <li className={styles.listItem}>Health &amp; Social Care qualification, Care Certificate or equivalent.</li>
                    </ul>
                    <p className={styles.paragraph} style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                        Previous experience is desirable, but applicants with the right attitude and willingness to learn will also be considered. Training will be provided where required.
                    </p>

                    <h3 className={styles.sectionTitle}>What We Offer</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>£26,000 per annum.</li>
                        <li className={styles.listItem}>Full-time employment.</li>
                        <li className={styles.listItem}>Full induction and ongoing training.</li>
                        <li className={styles.listItem}>Professional development opportunities.</li>
                        <li className={styles.listItem}>Supportive team environment.</li>
                        <li className={styles.listItem}>Opportunity to make a meaningful difference to people&apos;s lives.</li>
                        <li className={styles.listItem}>Career development within health and social care.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Working Pattern</h3>
                    <p className={styles.paragraph}>
                        This is a full-time role. Due to the nature of supported living services, the role may include day, evening, weekend and bank-holiday shifts, with night shifts where required.
                    </p>

                    <h3 className={styles.sectionTitle}>Our Commitment</h3>
                    <p className={styles.paragraph}>
                        We are committed to providing high-quality, person-centred support and promoting the dignity, independence, choice, safety and wellbeing of the people we support.
                    </p>
                    <p className={styles.paragraph}>
                        We are an equal opportunities employer and welcome applications from candidates of all backgrounds.
                    </p>

                    <h3 className={styles.sectionTitle}>How to Apply</h3>
                    <p className={styles.paragraph}>
                        If you are compassionate, dependable and passionate about supporting people with mental health needs, we would like to hear from you. Please fill in the application form below to apply.
                    </p>
                </div>
            </div>

            <JobApplicationForm jobTitle="Mental Health Support Worker" styles={styles} />

            <Footer />
        </main>
    );
}
