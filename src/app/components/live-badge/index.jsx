"use client";

import { motion } from "framer-motion";
import styles from "./live-badge.module.scss";

export default function LiveBadge() {
    return (
        <div className={styles.wrapper}>
            <motion.span
                className={styles.dot}
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.5, 1],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <span className={styles.text}>LIVE</span>
        </div>
    );
}




// motion.span → animated span using Framer Motion

// animate → defines animation keyframes
// scale → makes the dot pulse (grow and shrink)
// opacity → fades the dot in and out

// transition → controls animation behavior
// duration → time for one animation cycle
// repeat → Infinity makes animation loop forever
// ease → smooth in–out animation timing
