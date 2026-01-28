'use client';

import { useState } from 'react';
import styles from './ReferralForm.module.css';
import InteractiveButton from './InteractiveButton';

export default function ReferralForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Referral submitted successfully (demo purposes).");
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            {/* SECTION 1: Details of the Referrer */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>First, please enter your details, not those of the person you're supporting.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="First Name" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Surname" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Email Address" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Phone Number" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="What's your position?" className={styles.input} required />
                    </div>
                </div>
            </div>

            {/* SECTION 2: Details of Person Supported */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Now please enter the details of the person you support.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup} style={{ flex: 1 }}> {/* Smaller flex for Initials ideally? kept equal for now */}
                        <input type="text" placeholder="Initials" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                        <input type="text" placeholder="Age" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                        <input type="text" placeholder="Gender" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What is their diagnosis / Behaviours e.g. Learning Disability, Autism, Mental Health condition, etc.</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>
            </div>

            {/* SECTION 3: Current Position */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Tell us about their current position.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What is their current accommodation e.g. Hospital / Supported Living / Home.</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Is the person currently sectioned? If "Yes" how long have they been sectioned.</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What's the reason for placement being sought?</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Are there any disagreements with the current provider?</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Is there a timescale for the placement start?</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>
            </div>

            {/* SECTION 4: Accommodation Required */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Finally, please tell us about the accommodation they require.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What type of accommodation is required? e.g. sole occupancy / with others, male/female only.</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What is the current funding position for placement?</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Authority - Who will provide funding?</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>DOL order / COP status.</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Has the person had any Capacity Assessments in the last 2 years?</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Level of support required during the Day in Community and Home.</label>
                        <input type="text" placeholder="Answer" className={styles.input} required />
                    </div>
                </div>
            </div>

            <p className={styles.disclaimer}>
                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
            </p>

            <div className={styles.submitBtnContainer}>
                <InteractiveButton
                    text={isSubmitting ? "Submitting..." : "Submit Application"}
                    type="submit"
                    variant="default" // Changed from 'primary' to 'default' as primary is not defined
                />
            </div>
        </form>
    );
}
