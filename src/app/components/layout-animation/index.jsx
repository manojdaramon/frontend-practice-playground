"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./layoutanimation.module.scss";

export default function LayoutAnimationExample() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <motion.div
                layout
                onClick={() => setExpanded(!expanded)}
                className={styles.card}
            >
                <h3>Click me</h3>

                {expanded && (
                    <motion.p layout>
                        This content smoothly appears because of layout animation.
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
}
