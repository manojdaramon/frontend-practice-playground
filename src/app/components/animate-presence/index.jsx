"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatePresenceExample() {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: 40 }}>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"} Box
            </button>

            <AnimatePresence>
                {show && (
                    <motion.div
                        key="box"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            marginTop: 20,
                            width: 200,
                            height: 100,
                            background: "#4f46e5",
                            borderRadius: 8,
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}


// "use client" → marks this component as client-side in Next.js

// useState → controls whether the box is shown or hidden

// AnimatePresence → enables exit animations when a component is removed

// show → boolean state to toggle the box

// motion.div → animated div from Framer Motion

// key="box" → helps AnimatePresence track the element for exit animation

// initial → starting animation state when element enters

// animate → animation state after entering

// exit → animation state when element leaves

// transition → controls animation timing and duration
