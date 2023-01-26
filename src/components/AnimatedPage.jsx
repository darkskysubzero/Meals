import React from 'react'
import { motion } from 'framer-motion'


const animations = {
    initial: {
        opacity: 0,
        x: 100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            // Causes delay
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        x: -100
    }
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="hidden"
            animate="show"
            exit="exit"
        >{children}</motion.div>
    )
}

export default AnimatedPage