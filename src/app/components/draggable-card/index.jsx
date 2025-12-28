"use client";

import { motion } from "motion/react";
import styles from "./draggable-card.module.scss";

const DraggableCard = () => {
    return (
        <div>
            <motion.div className={styles.card}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                dragMomentum={false}
            >Draggable Card
            </motion.div>
        </div>
    );
};

export default DraggableCard;

//// drag → enables dragging on the element

// dragConstraints → limits how far the element can be dragged
// (all values 0 means it snaps back to original position)

// dragElastic → controls how stretchy the drag feels
// (lower value = tighter drag)

// dragMomentum → controls inertia after release
// false = stops immediately, true = keeps moving
