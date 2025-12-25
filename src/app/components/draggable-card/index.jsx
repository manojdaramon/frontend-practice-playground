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