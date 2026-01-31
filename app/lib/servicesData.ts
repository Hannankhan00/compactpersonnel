export const servicesData = {
    "supported-living": {
        title: "Supported Living",
        subtitle: "Empowering you to live independently in your own home.",
        description: "Supported Living is designed to help people with a wide range of support needs retain their independence by being supported in their own home. People in supported living have their own tenancy and are responsible for their own bills and cost of living. To afford this, they may claim benefits to help with the cost including housing benefit.",
        benefits: [
            "Tenancy Rights & Responsibilities",
            "Flexible Support Hours",
            "Financial Independence Support",
            "Social & Leisure Activities"
        ],
        detailedContent: "We help individuals find suitable housing and provide the necessary support to maintain their tenancy. From budgeting and cooking to accessing education and employment, our staff empower individuals to lead fulfilling lives in their local communities.",
        image: "/assets/supported-living.png"
    },
    "domiciliary-care": {
        title: "Domiciliary Care",
        subtitle: "Quality care in the comfort of your own home.",
        description: "Domiciliary care, also known as home care, is a range of services put in place to support an individual in their own home. It is available to those who require additional support with day to day household tasks, personal care or any other activity that allows them to maintain their quality of life and independent living.",
        benefits: [
            "Personal Care Assistance",
            "Medication Management",
            "Meal Preparation",
            "Companionship"
        ],
        detailedContent: "Our domiciliary care services are tailored to meet your specific needs. whether you need a 15-minute check-in or 24-hour support. We work around your routine to ensure you feel safe, comfortable, and independent at home.",
        image: "/assets/here-to-help.png"
    },
    "complex-care": {
        title: "Complex Care",
        subtitle: "Specialist support for complex health needs.",
        description: "Complex care, sometimes referred to as long-term care or continuing care, is provided to patients with significant, continuing healthcare issues such as chronic illness and disabilities. This can include brain damage, spinal cord injuries, and multiple sclerosis.",
        benefits: [
            "Specialist Nurse-Led Care",
            "Ventilator & Tracheostomy Care",
            "PEG Feeding Support",
            "24/7 Clinical Oversight"
        ],
        detailedContent: "Our complex care team consists of highly trained carers and nurses who are experienced in managing intricate health conditions. We work closely with other healthcare professionals to deliver a seamless, integrated care package that promotes the best possible health outcomes.",
        image: "/assets/positive-behaviour.png"
    },
    "mental-health-support": {
        title: "Mental Health Support",
        subtitle: "Compassionate support for mental well-being.",
        description: "We provide support for individuals with a range of mental health needs, helping them to manage their condition and build a fulfilling life. Our recovery-focused approach empowers individuals to regain control and move towards a brighter future.",
        benefits: [
            "Recovery-Focused Planning",
            "Emotional Support & Counseling Access",
            "Crisis Management",
            "Community Re-integration"
        ],
        detailedContent: "We understand that mental health journeys are personal. Our support is flexible and adapts to the changing needs of each individual. We focus on building resilience, coping strategies, and social connections to promote long-term recovery.",
        image: "/assets/equality-diversity.png"
    },
    "live-in-care": {
        title: "Live in Care",
        subtitle: "Round-the-clock support in your own home.",
        description: "Live-in care provides you with a dedicated carer who lives with you in your own home. It allows you to stay in familiar surroundings with your pets and loved ones, while receiving the full-time support you need.",
        benefits: [
            "One-to-One Dedicated Care",
            "Continuity of Care",
            "Peace of Mind for Families",
            "Lifestyle Maintenance"
        ],
        detailedContent: "Live-in care is a popular alternative to residential care homes. It offers a higher level of personal attention and flexibility. Your carer is there to help with personal care, housekeeping, outings, and companionship, ensuring you can live life on your own terms.",
        image: "/assets/active-support.png"
    },
    "respite-care": {
        title: "Respite Care",
        subtitle: "A short-term break for you and your carer.",
        description: "Respite care is planned or emergency temporary care provided to caregivers of a child or adult. It provides a break for the family caregiver, which is essential to maintaining their own health and well-being.",
        benefits: [
            "Temporary Relief for Carers",
            "Safe & Stimulating Environment",
            "Emergency Support Available",
            "Holiday Cover"
        ],
        detailedContent: "Whether you need coverage for a few days or a few weeks, our respite care services provide a safe and welcoming environment. We ensure that care routines are maintained so that the transition is smooth and stress-free for everyone involved.",
        image: "/assets/learning-hub.png"
    },
    "palliative-end-of-life-care": {
        title: "Palliative & End of Life Care",
        subtitle: "Dignified and compassionate care in your final chapter.",
        description: "Palliative care focuses on providing relief from the symptoms and stress of a serious illness. End of life care is support for people who are in the last months or years of their life.",
        benefits: [
            "Pain & Symptom Management",
            "Emotional & Spiritual Support",
            "Family Support Services",
            "Dignity & Respect Focus"
        ],
        detailedContent: "Our team provides sensitive and compassionate care to ensure comfort and dignity during this difficult time. We work collaboratively with palliative care teams, GPs, and district nurses to manage symptoms and allow individuals to pass away peacefully in their chosen environment.",
        image: "/assets/referral-bg.png"
    },
    "hospital-to-home": {
        title: "Hospital to Home",
        subtitle: "Supporting your safe transition from hospital.",
        description: "Our Hospital to Home service is designed to enable a smooth transition from hospital back to your own home. We can provide support for a short period while you recoup, or on a longer-term basis if your needs have changed.",
        benefits: [
            "Discharge Planning Support",
            "Reablement Focus",
            "Medication & Equipment Support",
            "Confidence Building"
        ],
        detailedContent: "Returning home after a hospital stay can be daunting. Our team helps to ensure that your home is ready and that you have the right support in place to aid your recovery and prevent readmission. We focus on reablement, helping you regain your independence and confidence.",
        image: "/assets/trusted-team.png"
    }
};

export type ServiceSlug = keyof typeof servicesData;
