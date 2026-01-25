'use client';

import { motion } from 'framer-motion';
import {
    Sparkles,
    Infinity,
    Users,
    TrendingUp,
    Heart,
    Building2,
    Lightbulb,
    UserCheck
} from 'lucide-react';
import styles from './OurValuesSection.module.css';

const values = [
    {
        icon: Sparkles,
        title: "Uniqueness",
        description: "Providing a Service Like No Other"
    },
    {
        icon: Infinity,
        title: "Equality, Diversity & Inclusivity",
        description: "Celebrating Differences, Creating Belonging"
    },
    {
        icon: Users,
        title: "Team Work",
        description: "Together We Can Create Life-Changing Experiences"
    },
    {
        icon: TrendingUp,
        title: "Positive Risk Taking",
        description: "Empowering Growth Through Courage"
    },
    {
        icon: Heart,
        title: "Family",
        description: "A Foundation of Care and Connection"
    },
    {
        icon: Building2,
        title: "Community Presence",
        description: "Active Support to be Apart of a Community"
    },
    {
        icon: Lightbulb,
        title: "Independence",
        description: "Empowering Individuals to Live Life Their Way"
    },
    {
        icon: UserCheck,
        title: "Person Centred Care",
        description: "Listening, Supporting, and Doing What's Best for You"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
};

export default function OurValuesSection() {
    return (
        <section className={styles.valuesSection}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        Our <span className={styles.titleAccent}>Values</span>
                    </h2>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    className={styles.valuesGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                variants={itemVariants}
                                onMouseMove={handleMouseMove}
                            >
                                <div className={styles.glowEffect}></div>
                                <div className={styles.iconWrapper}>
                                    <IconComponent size={26} />
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
