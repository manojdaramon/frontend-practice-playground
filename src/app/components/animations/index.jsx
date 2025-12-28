"use client";


import React from "react";
import { motion } from "motion/react";

const Animation = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            <h1>Animations</h1>

            <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >Button</motion.button>
        </motion.div>
    );
};

export default Animation;


//initial is for initial state, animate is for final state
//if initial is y: 10 then animate is y: 0, this will animate from bottom to top, similar for x

//whileHover is for hover, whileTap is for tap
//transition is for animation
//type: "spring" is for spring animation, stiffness: 100 is for stiffness of spring
//damping: 10 is for damping(up n down jump) of spring


