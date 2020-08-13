import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


function MotionDiv(props) {
    const pageVariants = {
        in: {
            opacity:1,
            x:0
        },
        out: {
            opacity: 0,
            x:-300
        }
    }
    const pageTransition = {
        duration:2,
        type: "spring",
        stiffness: 3,
    }
    return (
        <motion.div
        initial = "out"
        animate = "in"
        exit = "out"
        variants = {pageVariants}
        transition = {pageTransition}
        >
           {props.children}
        </motion.div>
    )
}

export default MotionDiv;
