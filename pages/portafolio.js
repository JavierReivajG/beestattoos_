import React from "react";
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const Portafolio = () => {
    return (
        <div className="main-portafolio-container">
            <Navbar/>
                <section className="main-portafolio-container--slider">
                    <ul className="portafolio-container--slider">
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">
                            
                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}} 
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="portafolio-container--card">

                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.6, margin: "100px"}}
                        whileTap={{ scale: 1.6, margin: "100px"}} 
                        className="portafolio-container--card">

                        </motion.li>
                    </ul>
                </section>
            <Footer/>
        </div>
    )
}


export default Portafolio