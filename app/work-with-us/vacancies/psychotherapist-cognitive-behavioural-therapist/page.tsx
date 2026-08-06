import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CareersHero from '../../../components/CareersHero';
import JobApplicationForm from '../../../components/JobApplicationForm';
import styles from './PsychotherapistCBT.module.css';

export default function PsychotherapistCBTPage() {
    return (
        <main className={styles.pageContainer}>
            <Header />
            <CareersHero
                title="Psychotherapist / Cognitive Behavioural Therapist (CBT)"
                subtitle="Provide therapeutic interventions and emotional wellbeing support in supported living services."
                backgroundImageUrl="/assets/work-with-us-bg.png"
            />

            <div className={styles.detailsSection}>
                <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Salary</span>
                        <span className={styles.metaValue}>£26,000.00 Per Annum</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Job Type</span>
                        <span className={styles.metaValue}>Full-time</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Location</span>
                        <span className={styles.metaValue}>Manchester / Greater Manchester</span>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <h3 className={styles.sectionTitle}>About the Role</h3>
                    <p className={styles.paragraph}>
                        We are seeking a compassionate, skilled, and dedicated Psychotherapist or Cognitive Behavioural Therapist to join our multidisciplinary team within our Supported Living Services. The successful candidate will provide therapeutic interventions and emotional wellbeing support to adults with a range of complex needs, including:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Autism Spectrum Condition (ASC)</li>
                        <li className={styles.listItem}>Learning Disabilities</li>
                        <li className={styles.listItem}>Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
                        <li className={styles.listItem}>Oppositional Defiant Disorder (ODD)</li>
                        <li className={styles.listItem}>Obsessive-Compulsive Disorder (OCD)</li>
                        <li className={styles.listItem}>Anxiety disorders</li>
                        <li className={styles.listItem}>Depression</li>
                        <li className={styles.listItem}>Trauma-related difficulties</li>
                        <li className={styles.listItem}>Other mental health conditions</li>
                    </ul>
                    <p className={styles.paragraph} style={{ marginTop: '1rem' }}>
                        The role focuses on promoting emotional wellbeing, developing coping strategies, improving independence, and enhancing quality of life while working collaboratively with support staff, healthcare professionals, families, and external agencies.
                    </p>

                    <h3 className={styles.sectionTitle}>Key Responsibilities</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Conduct comprehensive psychological and therapeutic assessments.</li>
                        <li className={styles.listItem}>Develop person-centred treatment and therapy plans tailored to individual needs.</li>
                        <li className={styles.listItem}>Deliver one-to-one therapeutic interventions using evidence-based approaches.</li>
                        <li className={styles.listItem}>Provide Cognitive Behavioural Therapy (CBT) where appropriate.</li>
                        <li className={styles.listItem}>Support individuals in managing emotional, behavioural, and mental health challenges.</li>
                        <li className={styles.listItem}>Assist individuals in developing coping strategies, emotional regulation, resilience, and social skills.</li>
                        <li className={styles.listItem}>Maintain accurate, confidential, and timely clinical records.</li>
                        <li className={styles.listItem}>Work collaboratively with multidisciplinary professionals to ensure coordinated care.</li>
                        <li className={styles.listItem}>Provide guidance and informal consultation to support workers regarding therapeutic approaches and behaviour support strategies.</li>
                        <li className={styles.listItem}>Participate in multidisciplinary meetings, reviews, safeguarding meetings, and case discussions.</li>
                        <li className={styles.listItem}>Identify and manage risks appropriately in accordance with organisational policies.</li>
                        <li className={styles.listItem}>Maintain professional boundaries and uphold ethical standards at all times.</li>
                        <li className={styles.listItem}>Promote equality, diversity, dignity, inclusion, and person-centred practice.</li>
                        <li className={styles.listItem}>Ensure compliance with all relevant legislation, including GDPR, safeguarding requirements, and health and safety regulations.</li>
                        <li className={styles.listItem}>Participate in supervision, reflective practice, continuing professional development (CPD), and mandatory training.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Essential Qualifications</h3>
                    
                    <h4 className={styles.subSectionTitle}>For Psychotherapists</h4>
                    <p className={styles.paragraph}>Applicants should possess:</p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>A recognised postgraduate qualification in Psychotherapy or Psychotherapeutic Counselling.</li>
                        <li className={styles.listItem}>Registration, accreditation, or eligibility for registration with the UK Council for Psychotherapy (UKCP), the British Association for Counselling and Psychotherapy (BACP), or another recognised professional body, as appropriate to their profession.</li>
                        <li className={styles.listItem}>Experience providing therapy to individuals with neurodevelopmental conditions and mental health needs.</li>
                        <li className={styles.listItem}>Knowledge of Positive Behaviour Support (PBS), trauma-informed practice, and person-centred care.</li>
                    </ul>

                    <h4 className={styles.subSectionTitle}>For Cognitive Behavioural Therapists</h4>
                    <p className={styles.paragraph}>Applicants should possess:</p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>A recognised postgraduate qualification in Cognitive Behavioural Therapy.</li>
                        <li className={styles.listItem}>Accreditation or eligibility for accreditation with the British Association for Behavioural and Cognitive Psychotherapies (BABCP).</li>
                        <li className={styles.listItem}>Experience delivering evidence-based CBT interventions.</li>
                        <li className={styles.listItem}>Experience working with adults experiencing complex mental health conditions and neurodevelopmental differences.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Essential Skills</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Excellent communication and interpersonal skills.</li>
                        <li className={styles.listItem}>Strong assessment and clinical formulation skills.</li>
                        <li className={styles.listItem}>Ability to build therapeutic relationships based on trust and respect.</li>
                        <li className={styles.listItem}>Knowledge of autism-friendly and learning disability-informed therapeutic practice.</li>
                        <li className={styles.listItem}>Ability to work independently and collaboratively within a multidisciplinary team.</li>
                        <li className={styles.listItem}>Strong documentation and report-writing skills.</li>
                        <li className={styles.listItem}>Effective risk assessment and safeguarding knowledge.</li>
                        <li className={styles.listItem}>Good organisational and time-management skills.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Desirable</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Experience within Supported Living, Residential Care, Community Mental Health, NHS, or Social Care settings.</li>
                        <li className={styles.listItem}>Training in trauma-informed practice.</li>
                        <li className={styles.listItem}>Knowledge of Positive Behaviour Support (PBS).</li>
                        <li className={styles.listItem}>Experience working with individuals who present behaviours of concern.</li>
                        <li className={styles.listItem}>Experience delivering psychoeducation, group therapy, or family interventions.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>What We Offer</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Competitive salary.</li>
                        <li className={styles.listItem}>Flexible working arrangements.</li>
                        <li className={styles.listItem}>Ongoing professional development and funded training opportunities.</li>
                        <li className={styles.listItem}>Regular clinical supervision.</li>
                        <li className={styles.listItem}>Supportive multidisciplinary team environment.</li>
                        <li className={styles.listItem}>Pension scheme.</li>
                        <li className={styles.listItem}>Annual leave entitlement.</li>
                        <li className={styles.listItem}>Employee wellbeing programme.</li>
                        <li className={styles.listItem}>Opportunities for career progression.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Equality and Confidentiality</h3>
                    <p className={styles.paragraph}>
                        We are committed to safeguarding and promoting the welfare of vulnerable adults and expect all employees to share this commitment. Successful applicants will be required to undergo an Enhanced DBS check and provide satisfactory references before employment.
                    </p>
                    <p className={styles.paragraph}>
                        Our organisation is an equal opportunities employer and welcomes applications from individuals of all backgrounds.
                    </p>
                    <p className={styles.paragraph}>
                        To protect the privacy and dignity of the people we support, no personal or identifiable information relating to individuals receiving our services is disclosed in our recruitment materials. All employees are expected to comply fully with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and organisational confidentiality policies.
                    </p>
                </div>
            </div>

            <JobApplicationForm jobTitle="Psychotherapist / Cognitive Behavioural Therapist (CBT)" styles={styles} />

            <Footer />
        </main>
    );
}
