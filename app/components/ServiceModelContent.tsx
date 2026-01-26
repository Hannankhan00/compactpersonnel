'use client';

import { motion } from 'framer-motion';
import styles from './ServiceModelContent.module.css';
import InteractiveButton from './InteractiveButton';

export default function ServiceModelContent() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
    };

    return (
        <section className={styles.serviceModelSection}>
            <div className={styles.container}>
                {/* Introduction */}
                <motion.div className={styles.introBlock} {...fadeIn}>
                    <p className={styles.introText}>
                        The people we support are part of one of the most marginalised and segregated groups in society.
                        They have often experienced negative life experiences and been subjected to poor previous service
                        provisions which have <span className={styles.highlight}>shrunk their ecosystem</span>.
                    </p>
                    <p className={styles.introText}>
                        Our job is to <span className={styles.highlight}>reverse this</span> and to support the person
                        through taking positive risks to widen their world, utilise their strengths, develop new skills
                        and meaningful relationships in their lives.
                    </p>
                </motion.div>

                {/* Content Blocks */}
                <div className={styles.contentBlocks}>
                    <motion.div className={styles.contentBlock} {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }}>
                        <div className={styles.iconWrapper}>1</div>
                        <div className={styles.blockContent}>
                            <h3 className={styles.blockTitle}>Building Trust</h3>
                            <p className={styles.blockText}>
                                Firstly, we recognise that trust will often be an issue, particularly when we first start
                                to support someone. To manage this, we create a support team specifically for the person
                                using a matching tool. The matching tool ensures there is compatibility between the
                                Support Worker and supported person.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.contentBlock} {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
                        <div className={styles.iconWrapper}>2</div>
                        <div className={styles.blockContent}>
                            <h3 className={styles.blockTitle}>Person-Centred Recruitment</h3>
                            <p className={styles.blockText}>
                                The supported person (or a representative) will be involved in the recruitment process
                                and have the final say in who is employed. This ensures the support team is truly
                                tailored to individual needs and preferences.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.contentBlock} {...fadeIn} transition={{ duration: 0.6, delay: 0.3 }}>
                        <div className={styles.iconWrapper}>3</div>
                        <div className={styles.blockContent}>
                            <h3 className={styles.blockTitle}>Dedicated Support Team</h3>
                            <p className={styles.blockText}>
                                The support team will be specifically for the person. A significant part of their role
                                will be to build a trusting and meaningful relationship with the person they are
                                supporting. By doing this, the supported person will start to feel much more secure
                                and will be learning how to establish and maintain a relationship. They will also be
                                developing emotions such as empathy.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.contentBlock} {...fadeIn} transition={{ duration: 0.6, delay: 0.4 }}>
                        <div className={styles.iconWrapper}>4</div>
                        <div className={styles.blockContent}>
                            <h3 className={styles.blockTitle}>Expanding Connections</h3>
                            <p className={styles.blockText}>
                                Once the person has developed these skills with the support team, the support team will
                                support the person to meet other people and develop new (non-paid) relationships. We
                                believe in creating pathways to genuine community connections.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Success Block */}
                <motion.div className={styles.successBlock} {...fadeIn} transition={{ duration: 0.6, delay: 0.5 }}>
                    <h3 className={styles.successTitle}>
                        <span className={styles.successIcon}>🎯</span>
                        Our Barometer for Success
                    </h3>
                    <p className={styles.successText}>
                        The barometer for success is for the person we support to have <strong>friends in his or her life</strong>.
                        This represents true integration, belonging, and the formation of genuine, meaningful relationships
                        outside of the support structure.
                    </p>
                </motion.div>

                {/* CTA Block */}
                <motion.div className={styles.ctaBlock} {...fadeIn} transition={{ duration: 0.6, delay: 0.6 }}>
                    <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
                    <p className={styles.ctaText}>
                        After completing the referral form, one of our experienced team members will be in touch.
                        Before we can proceed further, we need to make sure the required information is available
                        to establish whether our model of support would meet your loved one's needs.
                    </p>
                    <div className={styles.ctaButton}>
                        <InteractiveButton text="Start a Referral" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
