import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { BsFillTrashFill } from 'react-icons/bs'
import { GalleryContext } from '../context'

const Card = ({ docId, setSelectedImage, url }) => {
  const { removeImageFromGallery } = useContext(GalleryContext)
  return (
    <>
      <motion.article layout whileHover={{ opacity: 1 }} className='img-wrap'>
        <motion.button
          layout
          className='remove-image'
          onClick={() => removeImageFromGallery(docId)}
        >
          <BsFillTrashFill />
        </motion.button>
        <motion.img
          onClick={() => setSelectedImage(url)}
          layout
          className='image'
          src={url}
          alt='test'
        />
      </motion.article>
    </>
  )
}

export default Card
