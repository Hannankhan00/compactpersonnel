'use client';

import { useRef, useState } from 'react';
import InteractiveButton from './InteractiveButton';

type JobApplicationFormProps = {
    jobTitle: string;
    styles: Record<string, string>;
};

type FormState = {
    fullName: string;
    email: string;
    phone: string;
    coverLetter: string;
    agreeToTerms: boolean;
};

type SubmissionState = {
    type: 'success' | 'error';
    message: string;
} | null;

const initialFormState: FormState = {
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    agreeToTerms: false,
};

const statusStyles = {
    success: {
        backgroundColor: '#ecfdf3',
        border: '1px solid #16a34a',
        color: '#166534',
    },
    error: {
        backgroundColor: '#fef2f2',
        border: '1px solid #dc2626',
        color: '#991b1b',
    },
};

export default function JobApplicationForm({ jobTitle, styles }: JobApplicationFormProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionState, setSubmissionState] = useState<SubmissionState>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setSubmissionState(null);
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextFile = e.target.files?.[0] ?? null;

        setSubmissionState(null);
        setSelectedFile(nextFile);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        if (!selectedFile) {
            setSubmissionState({
                type: 'error',
                message: 'Please upload your CV before submitting.',
            });
            return;
        }

        if (!formData.agreeToTerms) {
            setSubmissionState({
                type: 'error',
                message: 'Please agree to the storage and handling of your data.',
            });
            return;
        }

        setIsSubmitting(true);
        setSubmissionState(null);

        const payload = new FormData();
        payload.append('roleTitle', jobTitle);
        payload.append('fullName', formData.fullName);
        payload.append('email', formData.email);
        payload.append('phone', formData.phone);
        payload.append('coverLetter', formData.coverLetter);
        payload.append('agreeToTerms', String(formData.agreeToTerms));
        payload.append('cv', selectedFile);

        try {
            const response = await fetch('/api/job-applications', {
                method: 'POST',
                body: payload,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'We could not send your application right now.');
            }

            setSubmissionState({
                type: 'success',
                message: result.message,
            });
            setFormData(initialFormState);
            setSelectedFile(null);
            formRef.current?.reset();
        } catch (error) {
            setSubmissionState({
                type: 'error',
                message: error instanceof Error
                    ? error.message
                    : 'We could not send your application right now.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formSection}>
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Apply Now</h2>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            autoComplete="name"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            autoComplete="email"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Phone *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            autoComplete="tel"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Cover Letter *</label>
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            className={styles.textarea}
                            required
                            placeholder="Tell us why you're a good fit for this role..."
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Upload CV/Resume *</label>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>Upload your CV directly</div>
                            <div className={styles.infoText}>
                                Your CV will be attached to the application email sent to our recruitment team.
                            </div>
                            <input
                                type="file"
                                name="cv"
                                onChange={handleFileChange}
                                className={styles.input}
                                accept=".pdf,.doc,.docx"
                                required
                            />
                            <div style={{ fontSize: '0.9rem', color: '#0c4a6e', marginTop: '0.75rem' }}>
                                Accepted formats: PDF, DOC, DOCX. Maximum file size: 5 MB.
                            </div>
                            {selectedFile ? (
                                <div style={{ fontSize: '0.9rem', color: '#0c4a6e', marginTop: '0.5rem' }}>
                                    Selected file: {selectedFile.name}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className={styles.checkbox}
                            id={`${jobTitle}-agreeToTerms`}
                            required
                        />
                        <label htmlFor={`${jobTitle}-agreeToTerms`} className={styles.checkboxLabel}>
                            By using this form you agree with the storage and handling of your data by this website. *
                        </label>
                    </div>

                    {submissionState ? (
                        <p
                            role="status"
                            aria-live="polite"
                            style={{
                                ...statusStyles[submissionState.type],
                                borderRadius: '12px',
                                padding: '0.9rem 1rem',
                                marginBottom: '1rem',
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                            }}
                        >
                            {submissionState.message}
                        </p>
                    ) : null}

                    <InteractiveButton
                        text={isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}