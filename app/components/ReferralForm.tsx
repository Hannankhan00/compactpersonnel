'use client';

import { useState } from 'react';
import styles from './ReferralForm.module.css';
import InteractiveButton from './InteractiveButton';

const initialFormData = {
    // Referrer details
    referrerFirstName: '',
    referrerSurname: '',
    referrerEmail: '',
    referrerPhone: '',
    referrerPosition: '',
    // Person supported
    personInitials: '',
    personAge: '',
    personGender: '',
    diagnosis: '',
    // Current position
    currentAccommodation: '',
    sectioned: '',
    reasonForPlacement: '',
    disagreements: '',
    timescale: '',
    // Accommodation required
    accommodationType: '',
    fundingPosition: '',
    authority: '',
    dolCopStatus: '',
    capacityAssessments: '',
    levelOfSupport: ''
};

export default function ReferralForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormStatus(null);
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/referral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'We could not send your referral right now.');
            }

            setFormStatus({ type: 'success', message: result.message });
            setFormData(initialFormData);
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: error instanceof Error
                    ? error.message
                    : 'We could not send your referral right now.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            {/* SECTION 1: Details of the Referrer */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>First, please enter your details, not those of the person you're supporting.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="referrerFirstName"
                            value={formData.referrerFirstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="referrerSurname"
                            value={formData.referrerSurname}
                            onChange={handleChange}
                            placeholder="Surname"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="referrerEmail"
                            value={formData.referrerEmail}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input
                            type="tel"
                            name="referrerPhone"
                            value={formData.referrerPhone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="referrerPosition"
                            value={formData.referrerPosition}
                            onChange={handleChange}
                            placeholder="What's your position?"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 2: Details of Person Supported */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Now please enter the details of the person you support.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                        <input
                            type="text"
                            name="personInitials"
                            value={formData.personInitials}
                            onChange={handleChange}
                            placeholder="Initials"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                        <input
                            type="text"
                            name="personAge"
                            value={formData.personAge}
                            onChange={handleChange}
                            placeholder="Age"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                        <input
                            type="text"
                            name="personGender"
                            value={formData.personGender}
                            onChange={handleChange}
                            placeholder="Gender"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What is their diagnosis / Behaviours e.g. Learning Disability, Autism, Mental Health condition, etc.</label>
                        <input
                            type="text"
                            name="diagnosis"
                            value={formData.diagnosis}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 3: Current Position */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Tell us about their current position.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What is their current accommodation e.g. Hospital / Supported Living / Home.</label>
                        <input
                            type="text"
                            name="currentAccommodation"
                            value={formData.currentAccommodation}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Is the person currently sectioned? If "Yes" how long have they been sectioned.</label>
                        <input
                            type="text"
                            name="sectioned"
                            value={formData.sectioned}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What's the reason for placement being sought?</label>
                        <input
                            type="text"
                            name="reasonForPlacement"
                            value={formData.reasonForPlacement}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Are there any disagreements with the current provider?</label>
                        <input
                            type="text"
                            name="disagreements"
                            value={formData.disagreements}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Is there a timescale for the placement start?</label>
                        <input
                            type="text"
                            name="timescale"
                            value={formData.timescale}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 4: Accommodation Required */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Finally, please tell us about the accommodation they require.</h3>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What type of accommodation is required? e.g. sole occupancy / with others, male/female only.</label>
                        <input
                            type="text"
                            name="accommodationType"
                            value={formData.accommodationType}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>What is the current funding position for placement?</label>
                        <input
                            type="text"
                            name="fundingPosition"
                            value={formData.fundingPosition}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Authority - Who will provide funding?</label>
                        <input
                            type="text"
                            name="authority"
                            value={formData.authority}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>DOL order / COP status.</label>
                        <input
                            type="text"
                            name="dolCopStatus"
                            value={formData.dolCopStatus}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Has the person had any Capacity Assessments in the last 2 years?</label>
                        <input
                            type="text"
                            name="capacityAssessments"
                            value={formData.capacityAssessments}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Level of support required during the Day in Community and Home.</label>
                        <input
                            type="text"
                            name="levelOfSupport"
                            value={formData.levelOfSupport}
                            onChange={handleChange}
                            placeholder="Answer"
                            className={styles.input}
                            required
                        />
                    </div>
                </div>
            </div>

            <p className={styles.disclaimer}>
                Your referral will be sent securely to our team for review.
            </p>

            {formStatus ? (
                <p
                    role="status"
                    aria-live="polite"
                    style={{
                        backgroundColor: formStatus.type === 'success' ? '#ecfdf3' : '#fef2f2',
                        border: `1px solid ${formStatus.type === 'success' ? '#16a34a' : '#dc2626'}`,
                        color: formStatus.type === 'success' ? '#166534' : '#991b1b',
                        borderRadius: '10px',
                        padding: '0.8rem 1rem',
                        marginBottom: '1rem',
                        fontSize: '0.95rem'
                    }}
                >
                    {formStatus.message}
                </p>
            ) : null}

            <div className={styles.submitBtnContainer}>
                <InteractiveButton
                    text={isSubmitting ? "Submitting..." : "Submit Application"}
                    type="submit"
                    variant="default"
                />
            </div>
        </form>
    );
}
