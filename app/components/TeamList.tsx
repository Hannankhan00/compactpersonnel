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
        name: "Andrew Milne",
        role: "Director",
        description: "Andrew sits on the Board of Directors and plays a key role in strategic decision-making. With extensive experience in the sector, he focuses on ensuring the organisation's values are upheld across all services. He is passionate about person-centred care and drives initiatives that empower the people we support.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    },
    {
        id: 2,
        name: "Peter Cammack",
        role: "Director/Registered Manager",
        description: "As a Director and Registered Manager, Peter combines leadership with hands-on oversight of care quality. He ensures regulatory compliance while fostering a culture of excellence. Peter's dual role allows him to bridge the gap between organisational strategy and day-to-day operations effectively.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
    },
    {
        id: 3,
        name: "Liz Done",
        role: "Registered Manager",
        description: "Liz is a dedicated Registered Manager who leads her team with compassion and professionalism. She is responsible for the operational management of the service, ensuring that every individual receives the highest standard of support tailored to their unique needs.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
    },
    {
        id: 4,
        name: "James Brown",
        role: "Registered Manager",
        description: "James brings energy and expertise to his role as Registered Manager. He is committed to staff development and maintaining a supportive environment for both the team and the people they support. His focus is on achieving positive outcomes and promoting independence.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
    },
    {
        id: 5,
        name: "Sarah Johnson",
        role: "Operations Manager",
        description: "Sarah oversees the daily operations across multiple services, ensuring efficiency and quality. Her strong organizational skills and dedication to the team make her an invaluable asset in maintaining smooth service delivery and high standards of care.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    {
        id: 6,
        name: "Michael Chen",
        role: "Team Leader",
        description: "Michael leads his team by example, providing mentorship and guidance on the ground. He is deeply committed to the well-being of the supported individuals and works closely with support workers to implement effective care plans.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
    }
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
                    We're proud to have a team recognised by the National Centre for Diversity and ranked in their
                    Top 100 Employers Index. Meet our exceptional team below!
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
