import React, { useContext } from 'react'
import { GalleryContext } from '../context'
import Card from './Card'

const ImageGrid = ({ setSelectedImage }) => {
  const { data } = useContext(GalleryContext)

  return (
    <>
      <div className='img-grid'>
        {data.map(({ docId, url }) => {
          return (
            <Card
              key={docId}
              docId={docId}
              setSelectedImage={setSelectedImage}
              url={url}
            />
          )
        })}
      </div>
    </>
  )
}

export default ImageGrid
