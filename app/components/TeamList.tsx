'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TeamList.module.css';

// Type definition for a team member
type TeamMember = {
    id: number;
    name: string;
    role: string;
    description: string;
    image?: string; // Optional image URL
};

// Team data - Using placeholders for descriptions as requested
const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: "Ayesha Mumtaz",
        role: "Admin",
        description: "Ayesha supports the team across day-to-day administration, coordination, and communication to ensure services run smoothly and efficiently.",
    },
    {
        id: 2,
        name: "Eileen Morton",
        role: "Director",
        description: "Eileen sits on the Board of Directors and plays a key role in strategic decision-making. With extensive experience in the sector, she focuses on ensuring the organisation's values are upheld across all services. She is passionate about person-centred care and drives initiatives that empower the people we support.",
    },
    {
        id: 3,
        name: "Jude Onorihewe",
        role: "Operational Director",
        description: "As Operational Director, Jude combines leadership with hands-on oversight of care quality. He ensures regulatory compliance while fostering a culture of excellence. His role allows him to bridge the gap between organisational strategy and day-to-day operations effectively.",
    },
    {
        id: 4,
        name: "Mahreen Munier",
        role: "Registered Manager",
        description: "Mahreen is a dedicated Registered Manager who leads her team with compassion and professionalism. She is responsible for the operational management of the service, ensuring that every individual receives the highest standard of support tailored to their unique needs.",
    },
    {
        id: 5,
        name: "Abeer Ashraf",
        role: "HR Manager",
        description: "Abeer oversees all human resources operations, ensuring the organisation attracts and retains top talent. Her strong organisational skills and dedication to staff well-being make her an invaluable asset in maintaining a supportive and professional working environment.",
    },
    {
        id: 6,
        name: "Mrs Maryam Mojisola",
        role: "Registered Nurse",
        description: "Maryam provides clinical support and works closely with the wider team to ensure safe, person-centred care and positive outcomes for the people we support.",
    },
];

export default function TeamList() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <section className={styles.teamSection}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our amazing and<br />supportive team!
                </motion.h2>

                <motion.p
                    className={styles.introText}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    We're proud of our dedicated, compassionate team and the positive outcomes they help people achieve every day.
                    Meet our exceptional team below!
                </motion.p>

                <div className={styles.teamGrid}>
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className={styles.teamCard}
                            onClick={() => setSelectedMember(member)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                            </div>
                            <div className={styles.imageWrapper}>
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className={styles.profileImage} />
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        {/* Using initials as placeholder */}
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                        >
                            <button className={styles.closeButton} onClick={() => setSelectedMember(null)}>
                                ×
                            </button>

                            <div className={styles.modalImageWrapper}>
                                {selectedMember.image ? (
                                    <img src={selectedMember.image} alt={selectedMember.name} className={styles.profileImage} />
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        {selectedMember.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                )}
                            </div>

                            <h3 className={styles.modalName}>{selectedMember.name}</h3>
                            <p className={styles.modalRole}>{selectedMember.role}</p>

                            <div className={styles.modalDescription}>
                                <p>{selectedMember.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
