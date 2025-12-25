"use client";
import styles from "./features-list.module.scss";
import { motion } from "motion/react";

const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
];

const FeaturesList = () => {
    return (
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={container}
        >
            {features.map((feature, index) => (
                <motion.li key={index}
                    initial="hidden"
                    animate="visible"
                    variants={features}
                >
                    {feature}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default FeaturesList

// for variants and staggered animation, we write a container object, hidden and visible
// hidden is for initial state, visible is for final state

