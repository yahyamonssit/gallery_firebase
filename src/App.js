import React, { useState } from 'react'
import { GalleryProvider } from './context'
import Form from './components/Form'
import Modal from './components/Modal'
import ImageGrid from './components/ImageGrid'

export const App = () => {
  const [selectedImage, setSelectedImage] = useState('')

  return (
    <main className='App'>
      <header className='header'>
        <h1>Unsplash Clone</h1>
        <h2>React Firebase Gallary App</h2>
        <p>Upload your image from down here !! 😀</p>
      </header>
      <GalleryProvider>
        <Form />
        <ImageGrid setSelectedImage={setSelectedImage} />

        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </GalleryProvider>
    </main>
  )
}
