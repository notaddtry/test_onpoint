import React from 'react'

import styles from './slides.module.scss'

const SlideBackground = ({ images, slideName, isSeen = true }) => {
  if (!isSeen) {
    return <></>
  }

  return (
    <div className={styles[slideName + '_background']}>
      {images.map((image) => (
        <picture
          className={`${
            styles[slideName + '_background_' + image]
          } ${slideName}_background_image`}
          key={image}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/${
              slideName + '_background'
            }/${image}.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${
              slideName + '_background'
            }/${image}.png`}
            alt='описание'
          />
        </picture>
      ))}
    </div>
  )
}

export default SlideBackground
