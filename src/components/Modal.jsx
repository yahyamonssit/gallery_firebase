import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImage, setSelectedImage }) => {
  return (
    <>
      <motion.section
        initial={{ y: -700, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        // transition={{ delay: 0.3 }}
        className='backdrop'
        onClick={() => setSelectedImage(null)}
      >
        <img src={selectedImage} alt={selectedImage} />
      </motion.section>
    </>
  )
}

export default Modal
